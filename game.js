started = false;
level = 1;
mang1 = [];
mang2 = [];
quay = -1;
check2 = false;
color = ["red", "green", "blue", "yellow"];
$(document).keypress(function (e) {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function setColor(a, s) {
  // console.log(a)
  a.addClass(s);
  setTimeout(function () {
    $(a).removeClass(s);
  }, 200);
}
function lennhac(s) {
  let a;
  switch (s) {
    case "red":
      a = new Audio("sounds/red.mp3");
      a.play();
    case "green":
      a = new Audio("sounds/green.mp3");
      a.play();
    case "blue":
      a = new Audio("sounds/blue.mp3");
      a.play();
    case "yellow":
      a = new Audio("sounds/yellow.mp3");
      a.play();
    case "wrong":
      a = new Audio("sounds/wrong.mp3");
      a.play();
  }
}
$(".btn").click(function () {
  if (check2 && started) {
    let color = $(this).attr("id");
    mang1.push(color);
    setColor($(this), "pressed");
    quay++;
    lennhac(color)
    nextSequence();
  }
});

function ramdom() {
    check2 = true;
  $("#level-title").text("Level " + level);
  setTimeout(function () {
    let ram = Math.floor(Math.random() * 4);
    mang2.push(color[ram]);
    lennhac(color[ram]);
    setColor($("#" + color[ram]), "pressed");
    level += 1;
  }, 1000);
}
function nextSequence() {
  if (mang1[quay] !== mang2[quay]) {
    level = 1;
    setColor($("body"), "game-over");
    $("#level-title").text("Bấm 1 phím bất kỳ để bắt đầu trò chơi");
    started = false;
    check2 = false;
    mang2 = [];
    mang1 = [];
    quay = -1;
    lennhac("wrong");
    $(document).keypress(function (e) {
        check2 = true
      if (!started) {
        ramdom();
      }
      
    });
    return;
  }
  if (quay + 1 === mang2.length) {
    ramdom();
    mang1 = [];
    quay = -1;
  }
}
