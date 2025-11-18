import { AppDataSource } from "./data-source.ts";
import { UsuarioService } from "./service/usuario.service";
import { ProfesorService } from "./service/profesor.service";
import { PreguntaService } from "./service/pregunta.service";

AppDataSource.initialize().then(async () => {
  console.log("✅ Conexión establecida con la base de datos");

  const usuarioService = new UsuarioService();
  const profesorService = new ProfesorService();
  const preguntaService = new PreguntaService();

  
  const usuario = await usuarioService.create({
    nombre: "Jordan Lema",
    email: "jordanLem@gmail.com",
    password: "1256",
    rol: "PROFESOR"
  });
  console.log("Usuario creado:", usuario);

  
  const profesor = await profesorService.create({
    experiencia: "5 años enseñando programación",
    estado: "pendiente",
    usuario: usuario
  });
  console.log("Profesor creado:", profesor);

  
  const pregunta = await preguntaService.create({
    enunciado: "¿Qué es TypeORM?",
    respuestaCorrecta: "Un ORM para Node.js"
  });
  console.log("Pregunta creada:", pregunta);

  console.log("Todos los usuarios:", await usuarioService.findAll());

}).catch(error => console.error("❌ Error al conectar:", error));
