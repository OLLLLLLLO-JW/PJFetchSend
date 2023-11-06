import { Component, Input, OnDestroy } from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { Subscription, first } from 'rxjs';
import { CreationResponse } from '../creation.interface';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss']
})
export class CreateTypeComponent implements OnDestroy {
  constructor(private endpointService: EndpointService){}
  creationSub!: Subscription;
  creationResponse: CreationResponse[] = [];
  finalResponse!: string;

  ngOnDestroy(): void {
    this.creationSub.unsubscribe();
  }

  @Input('creationType') creationType = '';

  handleCreateCase(caseToCreate: string){
    console.log("case to create")
    caseToCreate = caseToCreate.toLowerCase()
    
    
    console.log(caseToCreate)
    this.creationSub =  this.endpointService.callCaseCreation(caseToCreate).subscribe((response) => {
      console.log(`this is the response ${JSON.stringify(response)}`)
      console.log(response.length)
      for(let i = 0; i < response.length; i++){
        this.creationResponse.push(response[i])
      }  
      console.log("This is creatiion response: ")
      console.log(this.creationResponse[0])
      this.finalResponse = JSON.stringify(this.creationResponse[0])
    });
  }

}
