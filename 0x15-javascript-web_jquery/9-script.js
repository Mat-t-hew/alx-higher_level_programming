$(document).ready(function sayHello () {
  $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', (data) => {
    const hello = data.hello;
    $('DIV#hello').text(hello);
  });
});
