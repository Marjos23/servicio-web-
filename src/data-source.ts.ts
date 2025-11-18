import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./domain/usuario";
import { Profesor } from "./domain/profesor";
import { Pregunta } from "./domain/pregunta";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "basedatos.db",
  synchronize: true,
  logging: true,
  entities: [Usuario, Profesor, Pregunta],
});
