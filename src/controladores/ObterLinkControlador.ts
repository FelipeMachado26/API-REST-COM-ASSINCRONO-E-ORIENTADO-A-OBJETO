import { Response,Request } from "express"
import { lerDados } from "../utilitarios/arquivos";
import Link from "../Modelos/link";
import { contarVisitas } from "../utilitarios/arquivos";

export default class ObterLink{
    async controlador(req:Request,res:Response){

        const {identificador} = req.params
        const bancodedados = await lerDados()
 

      const existeLink = bancodedados.find(link => {
        return link.identificador === identificador

      })
         if(!existeLink){
            return res.status(404).json({
                mensagem:'O Link não existe'
            })
         }

         await contarVisitas(existeLink.identificador)

         return res.status(200).json({
            url:existeLink.url
         })

    }


}