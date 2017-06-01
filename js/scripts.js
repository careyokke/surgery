$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var food = $("#food").val();
    var music = $("#Music").val();
    var artist = $("input:radio[name=Artist]:checked").val();
    $(".name").append(name);
    $(".food").append(food);
    $(".music").append(music);
    $(".artist").append(artist);

    event.preventDefault();
  });
});
