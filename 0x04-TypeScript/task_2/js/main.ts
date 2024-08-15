interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}
interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}
class Director implements DirectorInterface{
    workDirectorTasks= (): string => 'Working from home';
    getCoffeeBreak = (): string => 'Getting coffee break';
    workFromHome = (): string => 'Getting to director tasks';
    };
class Teacher implements TeacherInterface {
   workDirectorTasks = (): string => 'Cannot work from home';
   getCoffeeBreak = (): string => 'Cannot have a break';
   workTeacherTasks = (): string => 'Getting to work';
}

function createEmploye(salary: number | string){
    if (typeof salary === 'number' && salary<500){
    return new Teacher();
    }
    else {
        return new Director();
    }    
}

function isDirector(employee: Teacher | Director) {
    return employee;
}

function executeWork(employee: Teacher | Director) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks;
    }if (employee instanceof Teacher){
        return employee.workTeacherTasks
    }
}
type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects) {
    switch (todayClass) {
        case 'Math':
            return 'Teaching Math'
        case 'History':
            return 'Teaching History'
        default:
            throw new Error ("undefned ")
    }
}
