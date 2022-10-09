export const sendOrder = (data) =>
  fetch("http://localhost:8000/send_mail", {
    mode: "cors",
    method: "POST",
    body: data,
  });

export const getContacts = () =>
  fetch("http://localhost:8000/get_contacts", {
    mode: "no-cors",
    method: "GET",
  }).then(res => res.json());
