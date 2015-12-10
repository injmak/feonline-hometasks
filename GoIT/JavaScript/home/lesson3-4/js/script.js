
var app = {
  questionArr: ['1. Вопрос № 1', '2. Вопрос № 2', '3. Вопрос № 3'],

  answerArr: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],

  /**
   * Create html element
   * @param {params} object that represent the input parameters
   */
  createElement: function(params){
    var childElement = document.createElement(params.elementName);

    if(params.elementType){
      childElement.setAttribute('type', params.elementType);
    }

    if(params.className){
      childElement.className = params.className;
    }

    if(params.parentElement){
      if(params.before){
        params.parentElement.insertBefore(childElement, params.parentElement.firstChild);
      }else{
        params.parentElement.appendChild(childElement);
      }
    }

    if(params.innerHTML){
      childElement.innerHTML = params.innerHTML;
    }

    return childElement;
  },

  /**
   * Generate html content function
   * @param {parentElement} parent element for insert the html code to
   */
  generateHTML: function(parentElement){

    for (var i in this.questionArr) {
      this.createElement({
        elementName: 'h2',
        innerHTML: this.questionArr[i],
        parentElement: parentElement,
      });

      for (var j in this.answerArr) {
        var checkbox =
        this.createElement({
          elementName: 'div',
          className: 'checkbox',
          parentElement: parentElement,
        });
        var label =
        this.createElement({
          elementName: 'label',
          innerHTML: this.answerArr[j],
          parentElement: checkbox,
        });
        var input =
        this.createElement({
          elementName: 'input',
          elementType: 'checkbox',
          before: true,
          parentElement: label,
        });
      }
    }

    var formGroup =
    app.createElement({
      elementName: 'div',
      className: 'form-group text-center',
      parentElement: parentElement,
    });

    app.createElement({
      elementName: 'button',
      elementType: 'submit',
      innerHTML: 'Проверить мои результаты',
      className: 'btn btn-default',
      parentElement: formGroup,
    });
  }

};

/**
 * Get body element
 */
var body = document.querySelector('body');

var container = app.createElement({
  elementName: 'div',
  className: 'container',
  parentElement: body,
});

/**
 * Create head text
 */
app.createElement({
  elementName: 'h1',
  innerHTML: 'Тест по программированию',
  className: 'text-center',
  parentElement: container,
});

/**
 * Create form element
 */
var form = app.createElement({
  elementName: 'form',
  className: 'form-horizontal',
  parentElement: container,
});

/**
 * Generate html code inside the form element
 */
app.generateHTML(form);
