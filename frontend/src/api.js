export const sendOrder = (data) =>
  fetch("http://localhost:8000/send_mail", {
    mode: "no-cors",
    method: "POST",
    body: data,
  });
