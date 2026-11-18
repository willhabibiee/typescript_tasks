/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const andiBorrowings = borrowings.filter(b => b.student === "Andi");

const borrowingsWithBookInfo = borrowings.map(b => ({
    ...b,
    book: books.find(book => book.id === b.bookId)
}));

const programmingStudents = [...new Set(borrowings
    .filter(b => books.find(book => book.id === b.bookId)?.category === "Programming")
    .map(b => b.student))];

const totalBorrowings = borrowings.length;

const averageDuration = borrowings.reduce((sum, b) => sum + b.days, 0) / borrowings.length;

const longBorrowingsStudents = [...new Set(borrowings.filter(b => b.days > 7).map(b => b.student))];

console.log(andiBorrowings);
console.log(borrowingsWithBookInfo);
console.log(programmingStudents);
console.log(totalBorrowings);
console.log(averageDuration);
console.log(longBorrowingsStudents);