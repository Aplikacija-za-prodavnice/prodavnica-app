export default class User{
    public id:String;
    public email:String;
    private _token:String;
    private tokenExpirationDate:Date;
    constructor(id:String,email:String,token:String,tokenExpirationDate:Date){
        this.id=id;
        this.email=email;
        this._token=token;
        this.tokenExpirationDate=tokenExpirationDate;
    }
    get token(){
        return this._token;
    }
}