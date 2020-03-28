import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  template: `<span> Invalid data. </span>`,
  styles: [`span {
    background-color: #ed6262;
    padding: 0px 5px;
  }`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
