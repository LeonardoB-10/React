import React from "react";
import ReactDOM from "react-dom/client";

//Lo importamos para poder usarlo
import {App} from "./HelloWorldApp";
import {DaatosPersonales} from "./DatosPersonales";
import './style.css'

//StrictMode -> Para trabajar en modo estricto y que nos muestre errores
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

//StrictMode -> Para trabajar en modo estricto y que nos muestre errores
ReactDOM.createRoot(document.getElementById("datosPersonales")).render(
  <React.StrictMode>
    {/* Se esta enviando las propeties desde el componente padre */}
    <DaatosPersonales saludo="Hola Karen" />
    {/* <DaatosPersonales saludo="123"/> */}
  </React.StrictMode>
);
