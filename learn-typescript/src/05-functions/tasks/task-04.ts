/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

function printAttendanceReport(attendanceList) {
  let totalPresent = 0;
  let totalAbsent = 0;
  let absentNames = [];

  for (let i = 0; i < attendanceList.length; i++) {
    let student = attendanceList[i];
    if (student.status === "Present") {
      totalPresent++;
    } else if (student.status === "Absent") {
      totalAbsent++;
      absentNames.push(student.name);
    }
  }

  console.log("--- Attendance Report ---");
  console.log("Total Present: " + totalPresent);
  console.log("Total Absent: " + totalAbsent);
  console.log("Names of absent students: " + absentNames.join(", "));
}

let classAttendance = [
  { name: "Andi", status: "Present" },
  { name: "Budi", status: "Absent" },
  { name: "Citra", status: "Present" },
  { name: "Doni", status: "Absent" },
  { name: "Eka", status: "Present" }
];

printAttendanceReport(classAttendance);