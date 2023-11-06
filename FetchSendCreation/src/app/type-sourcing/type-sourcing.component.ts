import {  Component,  ViewEncapsulation,  AfterViewInit, OnInit} from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { CaseType } from '../types.interface.';

@Component({
  selector: 'app-type-sourcing',
  templateUrl: './type-sourcing.component.html',
  styleUrls: ['./type-sourcing.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class TypeSourcingComponent implements OnInit  {
constructor(private endpoint: EndpointService){}
  
caseTypes!: CaseType[];
selectedCaseType: CaseType | undefined;



ngOnInit() {
  this.sourceDropDown()
}

  sourceDropDown(){
  try {
    const data = this.endpoint.getCaseTypeList();
    console.log("this is data")
    console.log(data)
    this.caseTypes = data
  } catch (error){
    console.error('Error:', error);
  }
}


}
