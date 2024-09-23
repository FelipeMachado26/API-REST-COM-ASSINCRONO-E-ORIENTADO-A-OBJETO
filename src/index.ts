import'dotenv/config'
import  Express  from "express";


const app = Express()

app.use(Express.json())

app.get('/',(req,res)=>{
    return res.json('tudo certo')
})

app.listen(process.env.PORT,() =>{
    console.log('Servidor inicializado')
})



