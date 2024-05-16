import express from "express";
import morgan from "morgan";

import employeesRoutes from "../Rutas/employees.routes.js";
import indexRoutes from "../Rutas/index.routes.js";
import usuarioEmpresaRoutes from "../Rutas/usuario_empresa.routes.js"
import empresaRoutes from "../Rutas/empresa.routes.js"
import empresaRedesRouter from "../Rutas/empresa_redes.routes.js"

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", employeesRoutes);
app.use("/usuario-empresa", usuarioEmpresaRoutes);
app.use("/empresa", empresaRoutes);
app.use("/empresa-redes", empresaRedesRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
