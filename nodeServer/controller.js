import { typeResponse } from "./typesToReturn.js";

export function getType(req, res){

    res.send(typeResponse);
}
