const myWord = ["Recording Studio Bookings"];
let tamp = 0;
let tamp1 = 0;
let word = "";
let word1 = "";
(function myMove() {
  if (tamp === myWord.length) {
    tamp = 0;
  }
  word = myWord[tamp];
  word1 = word.slice(0, ++tamp1);
  document.querySelector(".content-gerak").textContent = word1;
  if (word1.length === word.length) {
    tamp++;
    tamp1 = 0;
  }
  setTimeout(myMove, 200);
})();

document.formAdmin.onsubmit = async (event) => {
  event.preventDefault();
  const email = document.formAdmin.email.value;
  const password_ = document.formAdmin.password_.value;
  await fetch("/api/loginadmin", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password_,
    }),
  }).then(async (response) => {
    if (response.ok) {
      const message = await response.text();
      alert(message);
      location.href = "../adm-beranda/adm-beranda.html";
    } else {
      const message = await response.text();
      alert(message);
      location.reload();
    }
  });
};
