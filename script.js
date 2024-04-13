
/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(employee => employee.profession === "developer");
  developers.map(developer => console.log(developer));
}

function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("New employee added:", newEmployee);
}

function removeAdmin() {
  const filteredEmployees = arr.filter(employee => employee.profession !== "admin");
  console.log("Employees after removing admins:", filteredEmployees);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "susan", age: "20", profession: "intern" },
    { id: 5, name: "emma", age: "22", profession: "developer" },
    { id: 6, name: "lucas", age: "25", profession: "manager" }
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log("Concatenated array:", concatenatedArray);
}



console.log("PrintDeveloperbyMap:");
PrintDeveloperbyMap();

console.log("\nPrintDeveloperbyForEach:");
PrintDeveloperbyForEach();

console.log("\naddData:");
addData();

console.log("\nremoveAdmin:");
removeAdmin();

console.log("\nconcatenateArray:");
concatenateArray();

