interface  Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}
const Student1:Student = {
	firstName: "Mohamed",
	LastName: "Refat",
	age: 27,
	location: "Egypt"
}
const Student2:Student = {
	firstName: "Ibrahim",
	lastName: "Gamal",
	age: 28,
	location: "South Africa"
}
const studentsList: Array<Student> = [Student1, Student2];
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLBodyElement = document.createElement('table');
const thehead: HTMLBodyElement = document.createElement('thehead');
const th1: HTMLBodyElement = document.createElement('th1');
const th2: HTMLBodyElement = document.createElement('th2');

th1.innerText = 'firstName';
th2.innerText = 'location';
