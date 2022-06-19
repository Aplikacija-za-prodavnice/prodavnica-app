import AuthResponseData from "src/app/Interfejsi/AuthResponseData/AuthResponseData";

export default class AuthResponse implements AuthResponseData{
    kind: String;
    idToken: String;
    email: String;
    refreshToken: String;
    localId: String;
    expiresIn: String;
    registered: boolean;
}