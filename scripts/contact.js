emailjs.init("kkycr6R32XSZs6HQJ");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    emailjs
      .send("service_4nr827j", "template_ihj4uvo", data)
      .then((response) => {
        document.getElementById("responseMessage").innerText =
          "Message sent successfully!";
        form.reset();
      })
      .catch((error) => {
        document.getElementById("responseMessage").innerText =
          "Failed to send message.";
        console.error("Error:", error);
      });
  });
