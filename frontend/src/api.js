export const sendOrder = (data) =>
  fetch("/send_mail", {
    mode: "cors",
    method: "POST",
    body: data,
  });

export const getContacts = () =>
  fetch("/get_contacts", {
    mode: "cors",
    method: "GET",
  }).then(res => res.json());
