import { typeResponse } from "./typesToReturn.js";
import { newAccountResopnse } from "./newAccountResponse.js";

export function getType(req, res){

    res.send(typeResponse);
}

export function getNewAccount(req, res){
    res.send(newAccountResopnse);
}
