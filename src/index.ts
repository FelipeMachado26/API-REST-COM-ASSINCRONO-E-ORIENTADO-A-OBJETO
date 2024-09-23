import'dotenv/config'
import  Express  from "express";
import rotas from './utilitarios/rotas';


const app = Express()

app.use(Express.json())

app.use(rotas)

app.listen(3000)



 




