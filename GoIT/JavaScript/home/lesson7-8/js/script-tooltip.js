$(function(){
  createTooltip({
    tooltipId : '#js-firstName-tooltip',
    inputId : '#js-firstName-input',
    idParent : '#js-fullName-form',
    html : '<div class="tooltip__content">Please provide your First Name.</div>'
  });

  createTooltip({
    tooltipId : '#js-lastName-tooltip',
    inputId : '#js-lastName-input',
    idParent : '#js-fullName-form',
    html : '<div class="tooltip__content">Please provide your Last Name.</div>'
  });

  createTooltip({
    tooltipId : '#js-addressName-tooltip',
    inputId : '#js-addressName-input',
    idParent : '#js-fullName-form',
    html : '<div class="tooltip__content">Please provide your address.</div>'
  });

//
  createTooltip({
    tooltipId : '#js-accountNick-tooltip',
    inputId : '#js-accountNick-input',
    idParent : '#js-account-form',
    html : '<div class="tooltip__content">Please provide your Account Nick.</div>'
  });

  createTooltip({
    tooltipId : '#js-accountNumber-tooltip',
    inputId : '#js-accountNumber-input',
    idParent : '#js-account-form',
    html : '<div class="tooltip__content">Please provide your Account Number.</div>'
  });

  createTooltip({
    tooltipId : '#js-availableSum-tooltip',
    inputId : '#js-availableSum-input',
    idParent : '#js-account-form',
    html : '<div class="tooltip__content">Please provide your Available Sum.</div>'
  });

  createTooltip({
    tooltipId : '#js-creditSum-tooltip',
    inputId : '#js-creditSum-input',
    idParent : '#js-account-form',
    html : '<div class="tooltip__content">Please provide your Credit Sum.</div>'
  });
});

function createTooltip(params){
  var DELTA_WIDTH = 157;
  var DELTA_HEIGHT = 8;

  var $inputElement = $(params.inputId);
  var $tooltipElement = null;

  $($inputElement).mouseover(function(){

    $tooltipElement = createElement({
      tagName : '<div/>',
      idParent : params.idParent,
      idElement : params.tooltipId,
      className : 'tooltip',
      html : params.html
    });
     $tooltipElement.appendTo(params.idParent);

    $($tooltipElement).css({
      'left' : ($inputElement.position().left + DELTA_WIDTH),
      'top' : ($inputElement.position().top - DELTA_HEIGHT),
      'opacity' : '0'
    });

    $($tooltipElement).animate({
      'opacity' : '1'
    },300);
  }).mouseout(function(){
    $($tooltipElement).animate({
      'opacity' : '0'
    },300);

    $($tooltipElement).remove();
  });
}

function createElement(params){
  var $element = $(params.tagName,{
    html : params.html,
    'class' : params.className,
    id : params.idElement
  });
  return $element;
}
