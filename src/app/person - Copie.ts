import {
    async, inject
} from '@angular/core/testing';
import { Person } from './person';

describe('Person', () => {

    it('should create an instance', () => {
        expect(new Person()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        let todo = new Person({
            id: 1,
            firstname: 'Test',
            lastname: 'Testy'
        });
        expect(todo.id).toEqual(1);
        expect(todo.firstname).toEqual('Test');
        expect(todo.lastname).toEqual('Test');
    });

});
