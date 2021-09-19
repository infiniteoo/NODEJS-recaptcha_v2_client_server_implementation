document.getElementById("subscribeForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const captcha = document.querySelector("#g-recaptcha-response").value;

  return fetch("/subscribe", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name, email, captcha }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.msg);
      if (data.success) return location.reload();
    });
});
