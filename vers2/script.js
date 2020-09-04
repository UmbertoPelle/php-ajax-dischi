function serch() {
  var bt = $('#bt');

  bt.click(function () {
    var input = $('.serch #input').val();
    $('#albums').text('');
    $('.serch #input').val('');

    $.ajax({
      url:'index.php',
      method:'GET',
      success:function (data) {
        printserch(data['response'],input);
      },
      error:function (err) {
        console.log(err);
      }
    });
  });
}

function printserch(data,input) {
  var target = $('#albums');
  var template = $('#album-template').html();
  var compiled = Handlebars.compile(template);

  for (var i = 0; i < data.length; i++) {
    var album =data[i];
    if (album['author'] == input) {
      target.append(compiled(album));
    }
  };
}

function getData() {
  $.ajax({
    url:'index.php',
    method:'GET',
    success:function (data) {
      printPoster(data['response']);
    },
    error:function (err) {
      console.log(err);
    }
  });
}

function printPoster(data) {
  var target = $('#albums');
  var template = $('#album-template').html();
  var compiled = Handlebars.compile(template);

  for (var i = 0; i < data.length; i++) {
    var album =data[i];
    target.append(compiled(album));
  };

}

function init() {
  getData();
  serch();
}

$(document).ready(init);
