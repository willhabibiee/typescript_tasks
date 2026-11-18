/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeAverages = employees.map(emp => {
    const totalScore = emp.projects.reduce((sum, p) => sum + p.score, 0);
    return {
        name: emp.name,
        averageScore: totalScore / emp.projects.length
    };
});

const topEmployees = employeeAverages.filter(emp => emp.averageScore > 85);

const employeesWithLowProject = employees.filter(emp => 
    emp.projects.some(p => p.score < 80)
);

console.log(employeeAverages);
console.log(topEmployees);
console.log(employeesWithLowProject);