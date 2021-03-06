export class ServiceConfiguration{
    
    private _url:string = "http://localhost:8080/";
    private _api:string = "FradeTecnologiaService/";
    private _tokenApplication:string = "1234567890";

    public FRADESERVICE_API_RECUPERAR_ASSUNTOS: string = "recuperarassuntos?tokenApplication="+this._tokenApplication;
    public FRADESERVICE_API_LOGAR:string = "logarPost";
    public FRADESERVICE_API_RECUPERAR_CHAMADOS:string="recuperarchamadoporusuario?token="+this._tokenApplication;
    public FRADESERVICE_API_RECUPERAR_MENSAGENS:string="recuperarmensagens?tokenApplication="+this._tokenApplication;

    getRequestURL(service: string):string{
      console.log("Requested URI: "+this._url+this._api+service);
      return this._url+this._api+service;
  }
}