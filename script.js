$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "0%");
  $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "16%");
  $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "32%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "49%");
  $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "66%");
  $(".analysis").addClass("active").siblings().removeClass("active");
});
$(".step06").click(function () {
  $("#line-progress").css("width", "82%");
  $(".review").addClass("active").siblings().removeClass("active");
});
$(".step07").click(function () {
  $("#line-progress").css("width", "98%");
  $(".launch").addClass("active").siblings().removeClass("active");
});
