$(function(){
  var ACTIVE_CLASS = 'tab-header__li-active';
  var $links = $('.tab-header li');
  var $jsTabPanel1 = $('#js-tab-panel1');
  var $jsTabPanel2 = $('#js-tab-panel2');
  var $jsTabPanel3 = $('#js-tab-panel3');

  $jsTabPanel3.hide();
  $jsTabPanel2.hide();
  $jsTabPanel1.show();

  $links.on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('id');
    var active = $(this).hasClass(ACTIVE_CLASS);

    if(!active){
      $links.removeClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);
    }

    switch (id) {
      case 'js-tab1':
      $jsTabPanel3.hide();
      $jsTabPanel2.hide();
      $jsTabPanel1.show();
      break;
      case 'js-tab2':
      $jsTabPanel3.hide();
      $jsTabPanel2.show();
      $jsTabPanel1.hide();
      break;
      case 'js-tab3':
      $jsTabPanel3.show();
      $jsTabPanel2.hide();
      $jsTabPanel1.hide();
        break;
      default:
    }
  });
});
