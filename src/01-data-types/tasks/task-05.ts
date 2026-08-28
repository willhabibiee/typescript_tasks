/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
  employeeId: string;
  employeeName: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  totalWorkingHours: number;
  isPresent: boolean;
};

// Function untuk menghitung selisih jam
function calculateWorkingHours(checkIn: string, checkOut: string): number {
  const [inHour, inMinute] = checkIn.split(":").map(Number);
  const [outHour, outMinute] = checkOut.split(":").map(Number);

  const startInMinutes = inHour * 60 + inMinute;
  const endInMinutes = outHour * 60 + outMinute;

  return (endInMinutes - startInMinutes) / 60;
}

var checkInTime = "08:00";
var checkOutTime = "17:00";

const attendance1: Attendance = {
  employeeId: "EMP-001",
  employeeName: "Budi Santoso",
  date: "2026-08-18",
  checkInTime: checkInTime,
  checkOutTime: checkOutTime,
  totalWorkingHours:calculateWorkingHours(checkInTime, checkOutTime) ,
  isPresent: Boolean(checkInTime && checkOutTime),
};

 checkInTime = "09:00";
 checkOutTime = "15:00";
const attendance2: Attendance = {
  employeeId: "EMP-002",
  employeeName: "Siti Rahma",
  date: "2026-08-18",
  checkInTime: checkInTime,
  checkOutTime: checkOutTime,
  totalWorkingHours:calculateWorkingHours(checkInTime, checkOutTime) ,
  isPresent: Boolean(checkInTime && checkOutTime),
};

const attendance3: Attendance = {
  employeeId: "EMP-003",
  employeeName: "Andi Wijaya",
  date: "2026-08-18",
  checkInTime: "-",
  checkOutTime: "-",
  totalWorkingHours: 0,
  isPresent: false,
};


console.log("--- Data Presensi 1 ---");
console.log(attendance1);

console.log("\n--- Data Presensi 2 ---");
console.log(attendance2);

console.log("\n--- Data Presensi 3 ---");
console.log(attendance3);