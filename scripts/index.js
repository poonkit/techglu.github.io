function onClickMenu(menu) {
  $('html, body').animate({ scrollTop: $(`#${menu}`).offset().top - 70 }, 'slow');
  return false;
}


$(function(){
  $("#formContent").load("../html5-contact-form-send-email/formpage.html"); 
});