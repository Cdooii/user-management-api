export class User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
    }
}
