import react, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Alert } from 'react-native';
import "../css/crud.css";
import axios from "axios";
import {
  createContact,
  deleteContact,
  updateContact,
} from "../utils/index.js";
import { Link } from "react-router-dom";


export function Crud() {
  const [contacto, setContactos] = useState([]);

  const [edit, setEdit] = useState({});

  function getAllContactos() {
    const token = sessionStorage.getItem("Token");
    const url = "http://localhost:3000/contact/";
    const options = {
      method: "GET",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios.request(options).then((response) => {
      setContactos(response.data.data);
    });
  }

  useEffect(() => {
    getAllContactos();
  });

  const createC = async (e) => {
    let nombre = document.getElementById("nombretxta").value;
    let telefono = document.getElementById("numbertxta").value;
    let descripcion = document.getElementById("descripciontxta").value;

    const data = {
      nombre,
      telefono,
      descripcion,
    };
    const token = sessionStorage.getItem("Token");

    const response = createContact(data, token);

    if(response.data.status == "success"){
      Alert.alert("Contacto creado correctamente");
    }else {
      Alert.alert("Error al crear el contacto " + response.data);
    }

  }

  const updateC = async (e) => {
    let nombre = document.getElementById("nombretxte").value;
    let telefono = document.getElementById("numbertxte").value;
    let descripcion = document.getElementById("descripciontxte").value;

    const data = {
      nombre,
      telefono,
      descripcion,
    };
    const token = sessionStorage.getItem("Token");
    const response = updateContact(data, edit.nombre, token);

    if(response.data.status == "success"){
      Alert.alert("Contacto creado correctamente");
    }else {
      Alert.alert("Error al crear el contacto " + response.data);
    }

  }

  const deleteC = async (e) => {

    const token = sessionStorage.getItem("Token");

    const response = deleteContact({nombre: e.target.parentNode.parentNode.childNodes[0].innerHTML} , token);

    if(response.data.status == "success"){
      Alert.alert("Contacto eliminado correctamente");
    }else {
      Alert.alert("Error al crear el contacto " + response.data);
    }

  }

  function Toggle() {
    const table = document.getElementById("table");
    const Switch = document.getElementById("switch");
    const Circle = document.getElementById("circle");

    table.classList.toggle("active");
    Switch.classList.toggle("active");
    Circle.classList.toggle("active");
  }

  function PopUp() {
    const open = document.getElementById("btnAg");
    const modal_container = document.getElementById("modal-container");
    const close = document.getElementById("closebtn");

    open.addEventListener("click", () => {
      modal_container.classList.add("show");
    });

    close.addEventListener("click", () => {
      modal_container.classList.remove("show");
    });
  }

  function PopUpe(e) {
  
    const modal_container = document.getElementById("modal-container2");
    const close = document.getElementById("closebtne");

    const payload = {
      nombre: e.target.parentNode.parentNode.childNodes[0].innerHTML,
      telefono: e.target.parentNode.parentNode.childNodes[1].innerHTML,
      descripcion: e.target.parentNode.parentNode.childNodes[2].innerHTML
    }

    setEdit(payload);

    let nombreCombo = document.getElementById("nombretxte");
    let telefonoCombo = document.getElementById("numbertxte");
    let descripcionCombo = document.getElementById("descripciontxte");
    
    nombreCombo.value = payload.nombre;
    telefonoCombo.value = payload.telefono;
    descripcionCombo.value = payload.descripcion;


    modal_container.classList.add("show");

    close.addEventListener("click", () => {
      modal_container.classList.remove("show");
    });
  }

  function SerializeByName(name){
    return "Editar "+ name;
  }

  return (
    <div className="crud">
      <nav id="navbar">
        <ul>
          <li>
            <h2>Contactos</h2>
          </li>
          <li onClick={Toggle}>
            <input type="button" id="switch"></input> <div id="circle"></div>
          </li>
          <li>
            <Link to="/">
              <button id="exit">Cerrar Sesión</button>
            </Link>
          </li>
        </ul>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <div id="table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Descripcion</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {contacto.map((c) => {
              return (
                <tr>
                  <td>{c.nombre}</td>
                  <td>{c.telefono}</td>
                  <td>{c.descripcion}</td>
                  <td>
                    <input class="btnedit" onClick={PopUpe} type="button" value={SerializeByName(c.nombre)} id="btnedit" />
                    <input
                      type="button"
                      value="Borrar"
                      onClick={deleteC}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <div class="agregar">
        <input onClick={PopUp} type="button" id="btnAg" value="+"></input>
        <div class="modal-container" id="modal-container">
          <div class="modal">
            <form id="formag" action="" onSubmit={createC}>
              <h1>Nuevo Contacto</h1>
              <input
                type="text"
                id="nombretxta"
                name="nombre"
                placeholder="Nombre"
              />
              <input
                type="number"
                id="numbertxta"
                name="number"
                placeholder="Numero"
              />
              <input
                type="text"
                id="descripciontxta"
                name="descripcion"
                placeholder="Descripcion"
              />
              <input
                type="submit"
                id="btnsa"
                name="submit"
                value="Enviar"
              ></input>{" "}
              <br />
              <input type="button" id="closebtn" value="X" />
            </form>
          </div>
        </div>
      </div>
      <div class="editar">
        <div class="modal-container2" id="modal-container2">
          <div class="modal2">
            <form id="formag" action="" onSubmit={updateC}>
              <h1>Editar Contacto</h1>
              <input
                type="text"
                id="nombretxte"
                name="nombre"
                placeholder="Nombre"
              />
              <input
                type="number"
                id="numbertxte"
                name="number"
                placeholder="Numero"
              />
              <input
                type="text"
                id="descripciontxte"
                name="descripcion"
                placeholder="Descripcion"
              />
              <input
                type="submit"
                id="btnsa"
                name="submit"
                value="Enviar"
              ></input>{" "}
              <br />
              <input type="button" id="closebtne" value="X" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
