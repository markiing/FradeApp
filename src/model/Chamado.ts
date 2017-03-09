import {Assunto} from './Assunto';
import {Usuario} from './Usuario';
import {Cliente} from './Cliente';
import {Tipo} from './Tipo';
import {Status} from './Status';

export class Chamado{

    codigo:number;
    assunto:Assunto;
    usuario:Usuario;
    cliente:Cliente;
    titulo:string;
    tipo:Tipo;
    dataAbertura:Date;
    status:Status;

}