interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

interface Director extends Teacher {
  numberOfReports: number;
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Interface for the printTeacher function
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string, lastName: string }): string;
}

function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
  return `${firstName}. ${lastName}`;
}



// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

// Interface for StudentClass constructor
// interface StudentConstructor {
//   new (firstName: string, lastName: string): StudentClassInterface;
// }

// Interface for StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName()); // John
