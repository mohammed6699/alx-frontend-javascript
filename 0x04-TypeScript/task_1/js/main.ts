interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [propName: string]: any
}
interface Directors extends Teacher {
	numberOfReports: number,
}
function printTeacher(firstName, lastName): string {
	return (`${firstName[0]}. ${lastName}`);
}
class studentCalss {
    firstName: string;
    lastName: string;

    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework = (): string => 'curently working';
    displayName = (): string => this.firstName;
}
interface studentConstructor {
    firstName: string,
    lastName: string,
    (firstName:string, lastName:string): classInterface;
}
