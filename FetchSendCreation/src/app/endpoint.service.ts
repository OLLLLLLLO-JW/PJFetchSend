import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { typeSource } from './types.interface.';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})



export class EndpointService {

  

  constructor(private http: HttpClient) { }
  typeURL = 'localhost:3000/type'

  // types$: Observable<Types[]>;

  getTypeList(): Observable<any>{
    console.log("inside Get Type list")
    
    const tempvalue = this.http.get<any>(this.typeURL)
    // console.log(tempvalue)
    return  tempvalue
  }
}
