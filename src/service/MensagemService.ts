import {Services} from './Services';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Mensagem} from '../model/Mensagem';
import {Chamado} from '../model/Chamado';
@Injectable()
export class MensagemService extends Services<Mensagem>{

    private _mensagens:Mensagem[] = [];
    constructor(http: Http){
        super(http);
    }

    recuperarMensagensPorChamado(chamado:Chamado):Mensagem[]{
        this._mensagens = [];
        let obsMsg:Observable<Mensagem[]> = this.getResult(this.FRADESERVICE_API_RECUPERAR_MENSAGENS+"&codigoChamado="+chamado.codigo);
        obsMsg.subscribe(d=>{
            d.forEach(c=>{
                this._mensagens.push(c);
            })
        })
        return this._mensagens;
    }
}