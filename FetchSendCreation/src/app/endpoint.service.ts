import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map} from "rxjs";
import { CaseType } from './types.interface.';
import { CreationResponse } from './creation.interface';


@Injectable({
  providedIn: 'root'
})

export class EndpointService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:3000/';
  typeURL = 'http://localhost:3000/type';
  finalURL = '';
  caseTypes: CaseType[] = [];
  creationResponse: CreationResponse[] = [];

  getCTResponse(): Observable<CaseType[]>{
    return  this.http.get<CaseType[]>(this.typeURL).pipe(
      map((response: CaseType[]) => {
        return response.map(item => ({
          type: item.type,
        }));
      })
    ) 
  }

  callCaseCreation(endpointToAppend: string): Observable<CreationResponse[]>{
    console.log("inside Case creation")
    this.finalURL = this.baseURL + endpointToAppend
    console.log(`final url: ${this.finalURL}`);
    return  this.http.get<CreationResponse[]>(this.finalURL).pipe(
      map((response: CreationResponse[]) => {
        return response.map(item => ({
          CustID: item.CustID,
          accountType: item.accountType,
          openDay: item.openDay
        }));
        
      })
    ) 
  }

}
