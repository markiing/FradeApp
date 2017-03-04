import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../../model/Usuario';
import {HomePage} from '../home/home';
import {UsuarioService} from '../../service/UsuarioService';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsuarioService]
})
export class LoginPage implements OnInit {

  credentials = {user:"", password:""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _alertController:AlertController,private _usuarioService:UsuarioService) {}

  ngOnInit(){
    this._usuarioService.logout();
  }

  logar(){
    this._usuarioService.logar(this.credentials.user, this.credentials.password)
      .subscribe(
        data =>{
            this.navCtrl.push(HomePage);
        },
        error =>{
          this.exibirAlert("Usuário ou senha incorreta :(");
        }
      )
  }

  exibirAlert(mensagem){
    let alert = this._alertController.create({
      title: 'Atenção',
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

}
