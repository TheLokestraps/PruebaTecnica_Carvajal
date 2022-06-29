import react, { useState } from "react";
import axios from "axios";
import "../css/login.css";
import logo from "../assets/login.jpg";

const url = "http://localhost:3000/users/login";

export function Login() {
  const data = (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const options = {
      method: "POST",
      url: url,
      data: {
        username,
        password,
      },
    };

    axios
      .request(options)
      .then((res) => {
        alert("Login Exitoso");
        sessionStorage.setItem("Token", res.data.data.accessToken);
        console.log("Token: " + sessionStorage.getItem("Token"));
        window.location.href = "/Contactos";
      })
      .catch((err) => {
        alert("Login fallido, verifique los datos");
      });
  };

  return (
    <div className="login">
      <form id="login-box" action="" onSubmit={data}>
        <div id="col1">
          <img id="wallp" src={logo} width="100%" height=""></img>
        </div>
        <div id="col2">
          <h1>Contactos</h1>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuario"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <input type="submit" id="btns" name="submit" value="Ingresar"></input>{" "}
          <br />
          <a href="/Registro">¿Aun no tienes Cuenta? Registrate</a>
        </div>
      </form>
    </div>
  );
}
