import {Cliente} from './Cliente';

export class Usuario{

    constructor(
    codigo:number,
    ativo:boolean, 
    cliente:Cliente, 
    perfil:number, 
    nome:string, 
    senha:string,
    email:string, 
    celular1:string,
    celular2:string,
    ultimoLogin:Date){}
}