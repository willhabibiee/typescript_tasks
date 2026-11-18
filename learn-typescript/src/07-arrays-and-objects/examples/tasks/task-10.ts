/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentDetails = submissions.map(sub => {
    let correct = 0;
    let wrong = 0;

    sub.answers.forEach(ans => {
        const q = questions.find(item => item.id === ans.questionId);
        if (q && q.correctAnswer === ans.answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    return {
        student: sub.student,
        correct,
        wrong,
        score: correct * 25
    };
});

const studentScores = studentDetails.map(item => ({
    student: item.student,
    score: item.score
}));

const studentCorrectWrong = studentDetails.map(item => ({
    student: item.student,
    correct: item.correct,
    wrong: item.wrong
}));

const categories = [...new Set(questions.map(q => q.category))];
const categoryAverages = categories.reduce((acc, cat) => {
    const catQuestions = questions.filter(q => q.category === cat);
    const catQuestionIds = catQuestions.map(q => q.id);

    let totalCatScore = 0;
    submissions.forEach(sub => {
        let catCorrect = 0;
        sub.answers.forEach(ans => {
            if (catQuestionIds.includes(ans.questionId)) {
                const q = questions.find(item => item.id === ans.questionId);
                if (q && q.correctAnswer === ans.answer) {
                    catCorrect++;
                }
            }
        });
        totalCatScore += (catCorrect / catQuestions.length) * 100;
    });

    acc[cat] = Number((totalCatScore / submissions.length).toFixed(2));
    return acc;
}, {});

const totalStudents = studentScores.length;
const totalScoreSum = studentScores.reduce((sum, s) => sum + s.score, 0);
const averageScore = Number((totalScoreSum / totalStudents).toFixed(2));
const highestScore = Math.max(...studentScores.map(s => s.score));
const lowestScore = Math.min(...studentScores.map(s => s.score));

const passingScore = 75;
const passedStudents = studentScores.filter(s => s.score >= passingScore).length;
const failedStudents = totalStudents - passedStudents;
const passRate = Number(((passedStudents / totalStudents) * 100).toFixed(2));

const finalAnalytics = {
    totalStudents,
    averageScore,
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate
};

console.log(studentScores);
console.log(studentCorrectWrong);
console.log(categoryAverages);
console.log(finalAnalytics);