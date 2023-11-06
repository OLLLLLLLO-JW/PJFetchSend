import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map} from "rxjs";
import { CaseType } from './types.interface.';


@Injectable({
  providedIn: 'root'
})


export class EndpointService {

  constructor(private http: HttpClient) { }

  typeURL = 'http://localhost:3000/type';
  caseTypes: CaseType[] = [];

  getCaseTypeList(){
    console.log("service Starting")
    console.log("Get Type list")
    this.getCTResponse().subscribe( (response) => {
      for(let i = 0; i < response.length; i++){
        this.caseTypes.push(response[i])
      }      
      return response
    });
    return this.caseTypes;
  }

  getCTResponse(): Observable<CaseType[]>{
    return  this.http.get<CaseType[]>(this.typeURL).pipe(
      map((response: CaseType[]) => {
        return response.map(item => ({
          type: item.type,
        }));
      })
    ) 
  }

}
