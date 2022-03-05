import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  student_info = 'Name';


  superPower = 'angular'; //string
  textColor = 'white';//dynamic color

  username = "rakib";

  dateExample = Date.now();

  toolbar = false;

  uppercaseExample = "uppercase";

  lowerCaseExample = "LOWERCASE";

  jsonExample = {name: "rakib", age: 25};

  currencyExample = 157;

  // contacts = [
  //   {
  //    'firstName': 'Rakib',
  //    'lastName': 'Khan',
  //    'contactId': '171442549'
  //   },

  //   {
  //     'firstName': 'Khalek',
  //     'lastName': 'Mia',
  //     'contactId': '171442571'
  //    },

  //    {
  //     'firstName': 'Mehedi',
  //     'lastName': 'Hasan',
  //     'contactId': '171442589'
  //    }

  // ];

  // sayHello(){
  //   console.log("hello from event");
  // }
}
