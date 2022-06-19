export default interface AuthResponseData{
    kind:String;
    idToken:String;
    email:String;
    refreshToken:String;
    localId:String;
    expiresIn:String;
    registered: boolean;
}