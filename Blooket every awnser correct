(function() {
    const correctAnswers = {};
    const answerElements = document.querySelectorAll('.answer');

    answerElements.forEach((element) => {
        const answerText = element.innerText;
        correctAnswers[answerText] = true;
        element.onclick = () => {
            if (correctAnswers[answerText]) {
                element.classList.add('correct');
            }
        };
    });
})();
