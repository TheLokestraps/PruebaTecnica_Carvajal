import axios from "axios";
const url = "http://localhost:3000/contact/";

export function createContact(body, token) {
  const options = {
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      nombre: body.nombre,
      telefono: body.telefono,
      descripcion: body.descripcion,
    },
  };
  axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function updateContact(body, oldname ,token) {
  const options = {
    method: "PUT",
    url: url + oldname,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      nombre: body.nombre,
      telefono: body.telefono,
      descripcion: body.descripcion,
    },
  };
  axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function deleteContact(body ,token) {
    const options = {
      method: "DELETE",
      url: url + body.nombre,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
