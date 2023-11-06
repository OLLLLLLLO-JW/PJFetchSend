import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent implements OnInit {
  title = 'FetchSendCreation';
  constructor() {}
  endpointURLBase!: string
  caseToCreate!: string
  ngOnInit(): void {
    console.log("starting up!!")
    this.endpointURLBase = 'localhost:3000/'
  }

  logCaseType(incomingText: string){
    this.endpointURLBase = 'localhost:3000/'
    this.caseToCreate = incomingText;
    this.endpointURLBase = this.endpointURLBase + incomingText;
  }

}
