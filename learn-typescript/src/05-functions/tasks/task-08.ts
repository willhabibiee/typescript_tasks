/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(data) {
    return data.length;
}

function countSubmittedAssignments(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === true) {
            count++;
        }
    }
    return count;
}

function countMissingAssignments(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === false) {
            count++;
        }
    }
    return count;
}

function countPassedStudents(data, passingScore) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === true && data[i].score >= passingScore) {
            count++;
        }
    }
    return count;
}

function countNeedingRevision(data, passingScore) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === true && data[i].score < passingScore) {
            count++;
        }
    }
    return count;
}

function calculateAverageScore(data) {
    let totalScore = 0;
    let submittedCount = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === true) {
            totalScore += data[i].score;
            submittedCount++;
        }
    }
    if (submittedCount === 0) return 0;
    return totalScore / submittedCount;
}

function findHighestScore(data) {
    let submittedData = data.filter(item => item.submitted === true);
    if (submittedData.length === 0) return 0;
    let highest = submittedData[0].score;
    for (let i = 1; i < submittedData.length; i++) {
        if (submittedData[i].score > highest) {
            highest = submittedData[i].score;
        }
    }
    return highest;
}

function findLowestScore(data) {
    let submittedData = data.filter(item => item.submitted === true);
    if (submittedData.length === 0) return 0;
    let lowest = submittedData[0].score;
    for (let i = 1; i < submittedData.length; i++) {
        if (submittedData[i].score < lowest) {
            lowest = submittedData[i].score;
        }
    }
    return lowest;
}

function printLMSReport(data) {
    const passingScore = 75;
    console.log("--- LMS Assignment Report ---");
    console.log("Total students: " + countTotalStudents(data));
    console.log("Submitted assignments: " + countSubmittedAssignments(data));
    console.log("Missing assignments: " + countMissingAssignments(data));
    console.log("Passed students: " + countPassedStudents(data, passingScore));
    console.log("Students requiring revision: " + countNeedingRevision(data, passingScore));
    console.log("Average score: " + calculateAverageScore(data).toFixed(2));
    console.log("Highest score: " + findHighestScore(data));
    console.log("Lowest score: " + findLowestScore(data));
}

printLMSReport(submissions);