/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */


// Data siswa
const studentName: string = "Nadia Putri";
const studentID: string = "ST0260645";
const assignmentScore: number = 88.5;
const midtermScore: number = 84;
const finalExamScore: number = 91.5;
const attendanceScore: number = 100;
const extracurricular: boolean = true; // true = ikut, false = tidak

// Output ke console
console.log("Nama:", studentName);
console.log("ID:", studentID);
console.log("Nilai Tugas:", assignmentScore);
console.log("Nilai UTS:", midtermScore);
console.log("Nilai UAS:", finalExamScore);
console.log("Nilai Kehadiran:", attendanceScore);
console.log("Ekstrakurikuler:", extracurricular ? "Ikut" : "Tidak Ikut");
