import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  template: `<span> Submitted successfully. </span>`,
  styles: [`span {
    background-color: #09a509;
    padding: 0px 5px;
  }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
