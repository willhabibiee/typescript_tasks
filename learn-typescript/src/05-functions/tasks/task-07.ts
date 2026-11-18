/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(studentsList) {
  let count = 0;
  for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].active === true) {
      count++;
    }
  }
  return count;
}

function countInactiveStudents(studentsList) {
  let count = 0;
  for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].active === false) {
      count++;
    }
  }
  return count;
}

function countStudentsByMajor(studentsList, majorName) {
  let count = 0;
  for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].major === majorName) {
      count++;
    }
  }
  return count;
}

function printEnrollmentReport(studentsList) {
  console.log("--- Enrollment Report ---");
  console.log("Total students: " + studentsList.length);
  console.log("Active students: " + countActiveStudents(studentsList));
  console.log("Inactive students: " + countInactiveStudents(studentsList));
  console.log("Software Engineering students: " + countStudentsByMajor(studentsList, "Software Engineering"));
  console.log("Networking students: " + countStudentsByMajor(studentsList, "Networking"));
  console.log("Multimedia students: " + countStudentsByMajor(studentsList, "Multimedia"));
}

printEnrollmentReport(students);