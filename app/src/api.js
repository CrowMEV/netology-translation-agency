export const sendOrder = (data) =>
  fetch("http://localhost:80/send_mail", {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: data,
  });
