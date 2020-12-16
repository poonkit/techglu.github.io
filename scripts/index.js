function onClickMenu(menu) {
  $('html, body').animate({ scrollTop: $(`#${menu}`).offset().top - 70 }, 'slow');
  return false;
}


$(function(){
  $("#formContent").load("../contact-form/fcf.form.htm"); 
});