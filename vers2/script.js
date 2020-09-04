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
}

$(document).ready(init);
