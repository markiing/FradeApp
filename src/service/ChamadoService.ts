import {Services} from './Services';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Chamado} from '../model/Chamado';
import {Usuario} from '../model/Usuario';

@Injectable()
export class ChamadoService extends Services<Chamado>{
    
    private _chamados:Chamado[];
    
    constructor(http: Http){
        super(http);
    }


    recuperarTodosOsChamadosPorUsuario(usuario:Usuario):Chamado[]{
        this._chamados = [];
        let chamadosObs:Observable<Chamado[]> = this.getResult(this.FRADESERVICE_API_RECUPERAR_CHAMADOS+"&codUsuario="+usuario.codigo);
        chamadosObs.subscribe(d=>{
            d.forEach(c=>{
                this._chamados.push(c);
            })
        });
        return this._chamados;
    }
}