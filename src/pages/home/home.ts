import { Component, OnInit } from '@angular/core';
import {ChamadoService} from '../../service/ChamadoService';
import {MensagemService} from '../../service/MensagemService';
import {Usuario} from '../../model/Usuario';
import {Mensagem} from '../../model/Mensagem';
import {Chamado} from '../../model/Chamado';
import { NavController, Platform, ModalController, NavParams ,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ChamadoService]
})
export class HomePage implements OnInit {
  _user:Usuario;
  _chamados:Chamado[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private _chamadoService:ChamadoService) {
    
  }
  
  ngOnInit(){
    this._user = Usuario.fromJson(localStorage.getItem("currentUser"));
    this._chamados = this._chamadoService.recuperarTodosOsChamadosPorUsuario(this._user);
  }

  abrirDetalhes(chamado:Chamado){
    let modal = this.modalCtrl.create(ModalContentPage, chamado);
    modal.present();
  }


}

/**
 * @author - Marcus Cartágenes
 * @class - Classe responsável pelo Modal.
 */
@Component({
  template: `<ion-header>
  <ion-toolbar>
    <ion-title>
      #{{chamado.codigo}} - {{chamado.titulo}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button> 
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-card>
    <ion-card-content>
        <div class="item item-text-wrap">
          <b>Descrição:</b> {{chamado.titulo}}<br/><br/>
          <b>Data de Abertura:</b> {{chamado.dataAbertura}}<br/><br/>
          <b>Status:</b> {{chamado.statusChamado.status}}
        </div>
    </ion-card-content>
  </ion-card>
        <div class="bar bar-assertive">
          <h1 class="title">Mensagens do chamado {{chamado.codigo}}</h1>
        </div>
        <div class="template-card-content" *ngFor="let mensagem of mensagens" style="text-align:justify;text-justify:inter-word;">
          {{mensagem.mensagem}} 
          <div class="spacer" height="10px">
            <p>{{mensagem.dataEnvio}} - {{mensagem.usuario.nome}}</p>
          </div>
        </div>
      
</ion-content>`,
providers:[MensagemService],
styles:['.bar { width:100%; text-align:center; box-shadow:1px 1px 4px black; color:white; background-color:rgb(124, 25,   18)}']
})
export class ModalContentPage{

  chamado:Chamado;
  mensagens:Mensagem[] = [];

  constructor(public platform: Platform,public params:NavParams, public viewController:ViewController, private _mensagemService:MensagemService){
    this.chamado = this.params.data;
    this.mensagens = this._mensagemService.recuperarMensagensPorChamado(this.chamado);
    console.log(this.mensagens);
  }

  dismiss(){
    this.viewController.dismiss();
  }

}
