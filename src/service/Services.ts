import {ServiceConfiguration} from './ServiceConfiguration';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * @author - Marcus Cartágenes
 * @since - 23/02/2017
 * @class - Service.ts
 * @see - ServiceConfiguration
 * 
 * CLASSE GENÉRICA PARA CONSUMO DE SERVIÇOS EXTERNOS, AQUI SERÁ ENCONTRADO DOIS MÉTODOS ESPECIAIS (getResult() e postObject())
 * QUE SÃO RESPONSÁVEIS POR REALIZAR AS REQUISIÇÕES GET E POST PARA A URL CONFIGURADA NO ServiceConfiguration.
 */

@Injectable()
export class Services<T> extends ServiceConfiguration{

    constructor(public _http: Http){
        super();
    }

    getResult(serviceRequested:string):Observable<any>{
        return this._http.get(this.getRequestURL(serviceRequested)).map(this._extractData).catch(this._handleError);
    }

    postObject(serviceRequested:string,urlSearchParams: URLSearchParams): Observable<any>{
     return this._http.post(this.getRequestURL(serviceRequested),urlSearchParams, this._getHeaders('P'))
                                .catch(this._handleError);
    }

    private _extractData(res:Response){
        let data = res.json();
        return data;
    }

    private _handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
  }

  private _getHeaders(type:string): Headers{
     if(type ===  'G'){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return headers;
     }else{
         let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
         return headers;
     }
  }
}