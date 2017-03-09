import {Cliente} from './Cliente';

export class Usuario{

    constructor(
    public codigo:number,
    public ativo:boolean, 
    public cliente:Cliente, 
    public perfil:number, 
    public nome:string, 
    public senha:string,
    public email:string, 
    public celular1:string,
    public celular2:string,
    public ultimoLogin:Date){}


    static fromJson(json:string): Usuario{
        let obj = JSON.parse(json);
        let cliente:Cliente = null;
        if(obj.cliente != null){
            cliente = new Cliente(obj.cliente.codigo,obj.cliente.razaoSocial, obj.cliente.nomeFantasia, obj.cliente.registro);
        }
        return new Usuario(obj.codigo,obj.ativo,cliente,obj.perfil,obj.nome,obj.senha,obj.email,obj.celular1,obj.celular2,obj.ultimoLogin);
    }
}