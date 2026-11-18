/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentsWithScores = students.map(student => {
    let score = 0;
    student.answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });
    return { ...student, score };
});

const passedStudents = studentsWithScores.filter(student => student.score > 70);

const highestScoreStudent = studentsWithScores.reduce((max, student) => student.score > max.score ? student : max, studentsWithScores[0]);

const totalScore = studentsWithScores.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / studentsWithScores.length;

console.log(studentsWithScores);
console.log(passedStudents);
console.log(highestScoreStudent);
console.log(averageScore);