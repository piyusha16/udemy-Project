import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreateStatus = "No Server was Created!";
  serverName='TestServer';
  username="Piyush";

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    },2500);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    console.log("Inside")
    this.serverCreateStatus = "Server was created. Name is "+ this.serverName +"!";
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClearUsername(){
    this.username = '';
  }

}
