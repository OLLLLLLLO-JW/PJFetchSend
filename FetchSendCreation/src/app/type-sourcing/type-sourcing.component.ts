import {  Component,  ViewEncapsulation,  AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { CaseType } from '../types.interface.';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-type-sourcing',
  templateUrl: './type-sourcing.component.html',
  styleUrls: ['./type-sourcing.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class TypeSourcingComponent implements OnInit, OnDestroy  {
constructor(private endpoint: EndpointService){}
  
caseTypes: CaseType[] = [];
selectedCaseType: CaseType | undefined;
ctsubscription!: Subscription;



ngOnInit() {
  this.sourceDropDown()
}
ngOnDestroy() {
  this.ctsubscription.unsubscribe();
}
sourceDropDown(){
  this.loadCTResponse()
}
  loadCTResponse(){
  this.ctsubscription = this.endpoint.getCTResponse().subscribe((response) => {
      for(let i = 0; i < response.length; i++){
        this.caseTypes.push(response[i])
      }
    });
    console.log("this is data")
    console.log(this.caseTypes)
}


}
