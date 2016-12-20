import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-app',
  templateUrl: './person-app.component.html',
  styleUrls: ['./person-app.component.css'],
  providers: [PersonService]
})
export class PersonAppComponent implements OnInit {

  newPerson: Person = new Person();

  constructor(private service: PersonService) { }

  ngOnInit() {
  }

  addPerson() {
    this.service.addPerson(this.newPerson);
    this.newPerson = new Person();
  }


  togglePersonComplete(person) {
    this.service.togglePersonComplete(person);
  }

  removePerson(person) {
    this.service.deletePersonById(person.id);
  }

  get persons() {
    return this.service.getAllPersons();
  }
}
