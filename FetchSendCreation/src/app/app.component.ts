import { Component } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FetchSendCreation';
  constructor(private epService: EndpointService) {}

  getTypes(){
    
    console.log("Inside Types");
    this.epService.getTypeList().subscribe(response => {
      console.log(`this is the response: ${response}`)
    });

  }
}
