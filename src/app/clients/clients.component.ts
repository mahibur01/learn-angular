import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientId: 101, firstName: 'Mahibur', lastName: 'Rahman'},
    {clientId: 102, firstName: 'Abdul', lastName: 'Khalek'},
    {clientId: 103, firstName: 'Mehedi', lastName: 'Hasan'},
    {clientId: 104, firstName: 'Anik', lastName: 'Rahman'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
