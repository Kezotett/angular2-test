export class Person {
    id: number;
    firstname: string;
    lastname: string;
    gender: boolean;

    constructor(values: Object = {}){
        Object.assign(this,values);
    }
}