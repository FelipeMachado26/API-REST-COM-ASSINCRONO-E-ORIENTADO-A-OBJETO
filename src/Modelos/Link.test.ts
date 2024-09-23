import Link from "./link"
describe('Criação de links',() =>{
    test('deve criar um link',()=>{
        const link = new Link('cubosacademy','http://cubos.academy')
        
        expect(link).toHaveProperty('identificador','cubosacademy' )
        expect(link).toHaveProperty('url','http://cubos.academy')
        expect(link).toHaveProperty('visitas',0)
    })
})