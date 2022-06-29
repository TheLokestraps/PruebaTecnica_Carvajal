# Prueba Tecnica Carvajal

## Ivan Esteban Perez

---

Este repositorio consiste en mostrar las habilidades técnicas a traves de los problemas plateados

- Se uso NodeJS + ExpressJS para la creacion de la API REST y el manejo de los datos en la base de datos
- Se uso NodeJS + React para la creacion de la aplicacion web


---
## Escenario

Para el desarrollo de esta prueba usted cuenta con 48 horas.

Se requiere crear un sistema que permita gestionar una Libreta de Contactos en un sistema. Esta gestión está relacionada con permitir eliminar, crear, consultar y editar (CRUD) de la Libreta. El requerimiento contempla: 

1.	Crear Una base de datos relacional (MySql, Maria DB, PostgreSQL) con las tablas necesarias para gestionar una Libreta de Contactos (Nombres, Apellidos, correo, teléfonos, celular, dirección entre otros propuestos por usted) 
2.	Crear la capa de persistencia utilizando el ORM (Sequelize)
3.	Crear un proyecto API REST que implemente los 4 métodos para gestionar la Libreta de Contactos, el API de tener un conjunto de capas que permita separar correctamente las responsabilidades del código de programación (MVC)
4.	Crear un proyecto cliente del API creado anteriormente. 
5.	Crear un proyecto web implementando una interfaz gráfica que permita eliminar, listar, crear y editar una Libreta de Contactos. Este proyecto debe utilizar el cliente del API para consumir cada uno de sus métodos. 
6.	Generar un documento con el modelo entidad relación, diagrama de clases, diagrama de secuencia y pruebas unitarias. 

Consideraciones Generales:
 
•	El proyecto debe estar alojado en un repositorio como – GitHub ó GitLab 
•	Se debe construir un archivo README, que contenga manual de despliegue, los scripts de creación y configuración de la base de datos, credenciales y comentarios adicionales que ayuden al despliegue del código fuente. 
•	Los “plus” son opcionales, seleccione aquellos que demuestren mejor sus conocimientos. 

Requisitos de la prueba: 

•	Para el desarrollo de la prueba utilice NodeJS - JavaScript(plus TypeScript)
•	La lógica se debe implementar mediante API-REST 
•	Debe crear la interfaz gráfica en React - JavaScript(plus TypeScript) o VueJS – JavaScript(plus TypeScript) 
•	Generar un documento con el modelo entidad relación, diagrama de clases, diagrama de secuencia y pruebas unitarias. 
•	Es un plus agregar login. 
•	Es un plus agregar autenticación mediante username token al proyecto 
•	Es un plus tener la aplicación contenerizada (Docker)

NOTA. Es necesario sustentar el proyecto en máximo 1 hora. 

---
## Ejecucion

Para poder ejecutar el codigo se debe tener instalado NodeJS y npm. Luego se debe ejecutar el siguiente comando en las carpetas de BackEnd y FrontEnd:

```
npm install
```

Acto seguido, se procede a ejecutar el siguiente comando en las carpetas de BackEnd y FrontEnd:

Backend:
```
npm run dev
```

FrontEnd:
```
npm run start
```


