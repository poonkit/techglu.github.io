function onClickMenu(menu) {
  $('html, body').animate({ scrollTop: $(`#${menu}`).offset().top - 70 }, 'slow');
  return false;
}


$('#contact-form').submit(function(e) {
  e.preventDefault();

  $.ajax({
    url: 'https://formspree.io/f/xdopwovb',
    method: 'POST',
    data: { message: $('form').serialize() },
    dataType: 'json',
    success: function(response) {
      $('#success').addClass('expand');
      $('#contact-form')
        .find('input[type=text], input[type=email], textarea')
        .val('');
    }
  });
});