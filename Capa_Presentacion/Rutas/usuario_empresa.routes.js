import { Router } from "express";
import { createUsuarioEmpresa, deleteUsuarioEmpresa, getUsuarioEmpresa, getUsuarioEmpresas, updateUsuarioEmpresa } from "../Controladores/usuario_empresa.controller";

const router = Router();
//CREATE
router.post("/usuario-empresa", createUsuarioEmpresa);
//GET GENERAL
router.get("/usuario-empresas", getUsuarioEmpresas);
//GET ID
router.post("/usuario-empresa", getUsuarioEmpresa);
//UPDATE
router.patch("/usuario-empresa",updateUsuarioEmpresa);
//DELETE
router.delete("/usuario-empresa",deleteUsuarioEmpresa);

export default router;