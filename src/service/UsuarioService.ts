import {Services} from './Services';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../model/Usuario';


@Injectable()
export class UsuarioService extends Services<Usuario>{

    private data: Observable<Usuario>;
    private user: Usuario;

    constructor(_http:Http){
        super(_http);
    }

    logar(user:string, password:string){
        let param = new URLSearchParams();
        param.set("user", user);
        param.set("password", password);

        return this.postObject(this.FRADESERVICE_API_LOGAR, param).map((response: Response) =>{
            let user = response.json();
            if(user){
                localStorage.setItem("currentUser", JSON.stringify(user));
            }
        })
    }

    logout(){
        localStorage.removeItem("currentUser");
    }

}