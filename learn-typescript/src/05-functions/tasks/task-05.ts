/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

function getHighestScore(scores) {
  let highest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

function getLowestScore(scores) {
  let lowest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < lowest) {
      lowest = scores[i];
    }
  }
  return lowest;
}

function getAverageScore(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

function getPassingCount(scores) {
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      count++;
    }
  }
  return count;
}

function printReport(scores) {
  console.log("--- Backend Development Score Report ---");
  console.log("Highest Score: " + getHighestScore(scores));
  console.log("Lowest Score: " + getLowestScore(scores));
  console.log("Average Score: " + getAverageScore(scores));
  console.log("Passing Students (Score >= 75): " + getPassingCount(scores));
}

let studentScores = [80, 65, 90, 72, 85, 95, 60, 78];
printReport(studentScores);