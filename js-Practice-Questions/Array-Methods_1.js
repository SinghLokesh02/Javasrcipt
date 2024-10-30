const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/2010",
    department: "Development",
    salary: "39000",
  },
];

// Exercises

// 1) What is the average income of all the people in the array?
let allEmployeeIncome = people.reduce(
  (income, curPerson) => (income += +curPerson.salary),
  0
);
let averageIncome = allEmployeeIncome / people.length;
console.log(averageIncome);

// 2) Who are the people that are currently older than 30?
let peopleOlderThan30 = people.reduce((count, element) => {
  // console.log(2024 - element.DOB.slice(6));
  return 2024 - element.DOB.slice(6) >= 30 ? (count += 1) : count;
}, 0);
console.log(`The Number of Person having age > 30 are : ${peopleOlderThan30}`);

// 3) Get a list of the people's full name (firstName and lastName).
let fullNameOfAllEmployee = people.map(
  (person) => person.firstName + " " + person.lastName
);
console.log(fullNameOfAllEmployee);

// 4) Get a list of people in the array ordered from youngest to oldest.

const sortedByAge = [...people];
sortedByAge.sort((a, b) => Number(a.DOB.slice(6)) - Number(b.DOB.slice(6)));
console.log(sortedByAge);

// 4) Get a list of people in the array ordered as Per there Salary

const sortedBySalary = [...people];
sortedBySalary.sort((a, b) => Number(a.salary) - Number(b.salary));
console.log(sortedBySalary);

// 5) How many people are there in each department?

let departmentDataRecord = {};
people.forEach(({ department }) => {
  if (departmentDataRecord.hasOwnProperty(department)) {
    departmentDataRecord[department] += 1;
  } else {
    departmentDataRecord[department] = 1;
  }
});
console.log(departmentDataRecord);
