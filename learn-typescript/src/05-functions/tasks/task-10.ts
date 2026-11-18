/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

// --- Completion Statistics Functions ---

function countTotalEnrollments(data) {
    return data.length;
}

function countCompletedEnrollments(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].completed === true) {
            count++;
        }
    }
    return count;
}

function countIncompleteEnrollments(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].completed === false) {
            count++;
        }
    }
    return count;
}

function calculateCompletionPercentage(data) {
    let total = countTotalEnrollments(data);
    if (total === 0) return 0;
    let completed = countCompletedEnrollments(data);
    return (completed / total) * 100;
}

// --- Academic Statistics Functions ---

function findHighestScore(data) {
    if (data.length === 0) return 0;
    let highest = data[0].score;
    for (let i = 1; i < data.length; i++) {
        if (data[i].score > highest) {
            highest = data[i].score;
        }
    }
    return highest;
}

function findLowestScore(data) {
    if (data.length === 0) return 0;
    let lowest = data[0].score;
    for (let i = 1; i < data.length; i++) {
        if (data[i].score < lowest) {
            lowest = data[i].score;
        }
    }
    return lowest;
}

function calculateTotalScore(data) {
    let total = 0