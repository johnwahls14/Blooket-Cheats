function highlightCorrectAnswer(correctAnswerId) {
    // Get all answer elements
    const answerElements = document.querySelectorAll('.answer');

    // Loop through each element and highlight the correct one
    answerElements.forEach(element => {
        if (element.dataset.answerId === correctAnswerId) {
            element.style.backgroundColor = 'yellow'; // Highlight correct answer
        } else {
            element.style.backgroundColor = ''; // Reset other answers
        }
    });
}

This function assumes that each answer element has a class of answer and a data-answer-id attribute that corresponds to the answer ID. You can call this function and pass the correct answer ID to highlight it.
