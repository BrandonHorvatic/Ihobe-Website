import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  name: string;
  email: string;
  cell: string;
  company: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  processForm() {
    const allInfo = `Name: ${this.name}; Email: ${this.email}; Cell: ${this.cell}; Company: ${this.company}; Message: ${this.message}`;
    alert(allInfo); 
  }

}
