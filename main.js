let gameBtn = document.getElementsByName("game-btn");

let h2HomeResult = document.getElementById("home-result");
let homeResetBtn = document.getElementById("home-reset");
let homeResult = 0;

let h2GuestResult = document.getElementById("guest-result");
let guestResetBtn = document.getElementById("guest-reset");
let guestResult = 0;

for (gameB of gameBtn) {
  gameB.addEventListener("click", function (e) {
    if (e.target.className == "home") {
      homeResult += Number(e.target.value);
      h2HomeResult.innerHTML = homeResult;
    } else {
      guestResult += Number(e.target.value);
      h2GuestResult.innerHTML = guestResult;
    }
  });
}

homeResetBtn.addEventListener("click", function () {
  homeResult = 0;
  h2HomeResult.innerHTML = homeResult;
});

guestResetBtn.addEventListener("click", function () {
  guestResult = 0;
  h2GuestResult.innerHTML = guestResult;
});
