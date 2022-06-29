import React, { useState } from "react";
import "../css/registro.css";
import axios from "axios";
import logo from "../assets/login.jpg";

const url = "http://localhost:3000/users/";

export function Registro() {
  const datar = (e) => {
    e.preventDefault();
    let username = document.getElementById("usertxt").value;
    let password = document.getElementById("password").value;
    let passwordConfirmation = document.getElementById("passwordConfirmation").value;

    const options = {
      method: "POST",
      url: url,
      data: {
        username,
        password,
        passwordConfirmation,
      },
    };
    axios
      .request(options)
      .then((res) => {
        alert("Registro Exitoso");
        window.location.href = "/";
      })
      .catch((err) => {
        alert("Registro fallido " + err.response.data.status);
      });
  };
  return (
    <div>
      <form className="form" id="registro-box" onSubmit={datar}>
        <div id="col1">
          <img src={logo} alt="Logo-Box" id="wall" srcset="" height="" />
        </div>
        <div id="col2">
          <h1>Registro</h1>
          <input type="text" name="user" id="usertxt" placeholder="Usuario" />
          <input
            type="password"
            class="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />
          <input
            type="password"
            class="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="Confirmar contraseña"
          />
          <input type="submit" name="enviar" id="btne" value="Registrarse" />
        </div>
      </form>
    </div>
  );
}
