import { Injectable } from '@angular/core';
import {Person} from './person';

@Injectable()
export class PersonService {

    // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  persons: Person[] = [];

  constructor() { }

  // Simulate POST /todos
  addPerson(person: Person): PersonService {
    if (!person.id) {
      person.id = ++this.lastId;
    }
    this.persons.push(person);
    return this;
  }

  // Simulate DELETE /todos/:id
  deletePersonById(id: number): PersonService {
    this.persons = this.persons
      .filter(person => person.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updatePersonById(id: number, values: Object = {}): Person {
    let person = this.getPersonById(id);
    if (!person) {
      return null;
    }
    Object.assign(person, values);
    return person;
  }

  // Simulate GET /todos
  getAllPersons(): Person[] {
    return this.persons;
  }

  // Simulate GET /todos/:id
  getPersonById(id: number): Person {
    return this.persons
      .filter(person => person.id === id)
      .pop();
  }

  // Toggle todo complete
  togglePersonComplete(person: Person){
    let updatedPerson = this.updatePersonById(person.id, {
      gender: !person.gender
    });
    return updatedPerson;
  }
}
