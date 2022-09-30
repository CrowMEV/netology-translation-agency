export const sendOrder = (data) =>
  fetch("http://localhost:8000/send_mail", {
    mode: "cors",
    method: "POST",
    body: data,
  });
