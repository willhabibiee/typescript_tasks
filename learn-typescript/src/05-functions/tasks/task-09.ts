/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(data) {
    return data.length;
}

function countAdmittedPatients(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].admitted === true) {
            count++;
        }
    }
    return count;
}

function countDischargedPatients(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].admitted === false) {
            count++;
        }
    }
    return count;
}

function countPatientsByDepartment(data, deptName) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].department === deptName) {
            count++;
        }
    }
    return count;
}

function calculateTotalRevenue(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i].bill;
    }
    return total;
}

function findHighestBill(data) {
    if (data.length === 0) return 0;
    let highest = data[0].bill;
    for (let i = 1; i < data.length; i++) {
        if (data[i].bill > highest) {
            highest = data[i].bill;
        }
    }
    return highest;
}

function findLowestBill(data) {
    if (data.length === 0) return