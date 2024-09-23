export default class Link {
  readonly identificador:string // Realonly informação que não permitirei que seja alterado 
  public  url:string
  public visitas:number

constructor(idenficiador:string,url:string){
    this.identificador = idenficiador
    this.url = url
    this.visitas = 0
}

}