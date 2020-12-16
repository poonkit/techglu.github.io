function onClickMenu(menu) {
  $('html, body').animate({ scrollTop: $(`#${menu}`).offset().top - 70 }, 'slow');
  return false;
}


$(document).ready(function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("contact-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.style = "display: none ";
    button.style = "display: none ";
    status.innerHTML = "Thanks, we received your message! We'll contact you soon.";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  $('#contact-form').on("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}