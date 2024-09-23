import { Request,Response } from "express";
import { adicionarDados, lerDados } from "./arquivos";
import Link from "../Modelos/link";


export default class CadastroLink{
  async  controlador(req:Request,res:Response){
        const{url,identificador} = req.body

        if(!url || !identificador){
            return res.status(400).json({
                mensagem:'A Url e o identificador são obrigatorios'
            })
        }

      const bancodedados = await lerDados()

      const existeLink = bancodedados.find(Link => {
        return Link.identificador === identificador

      })
         if(existeLink){
            return res.status(400).json({
                mensagem:'O Link ja existe'
            })
         }

         const novoLink =  new Link(identificador,url)

         await  adicionarDados(novoLink)
     

         return res.status(201).json(novoLink)
    }
  

}