export const view = {
    createQuizzMainTitleTemplate: function createQuizzMainTitleTemplate(title, image) {
        return `<p style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})">${title}</p>`;
    },
    createQuizzContainerTemplate: function createQuizzContainerTemplate(id) {
        return `<div>
                    <div id="${id}" class="quizz-container">
                        ###!###
                    </div>
                </div>`;
    },
    createTitleTemplate: function createTitleTemplate(title, color) {
        return `<div style="background-color: ${color}">
                    <p>${title}</p>
                </div>`;
    },
    createAnswersContainers: function createAnswersContainers() {
        return `<div class="answer-container">
                        <div>
                        ###!###
                        </div>
                </div>`;
    },

    createAnswersItems: function createAnswersItems({ image = '', text = '' }, id) { //DEVE SER JOGADA DENTRO DE UM DIV A CADA DUAS
        return `<div id="answer-${id}"class="answer-item">
                    <img onclick="selectAnswer(event)" src="${image}" alt="${text}"> 
                    <p>${text}</p>
                </div>`;
    },
    createStatisticMessageTemplate: function createStatisticMessageTemplate(score) {
        return ` <div>
                    <div class="quizz-statistics">
                        <p>${score}% de acerto: Você é praticamente um aluno de Hogwarts!</p>

                        <div>
                            <img src="./img/gato.jpg" alt="gato">
                            <p>Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no botão
                                abaixo para usar o vira-tempo e reiniciar este teste.</p>
                        </div>
                        <div onclick="resetQuizz()" class="button-container">
                            <button>Reiniciar Quizz</button>
                            <!-- <br/> -->
                            <button onclick="window.location.reload()">Voltar para home</button>
                        </div>
                    </div>
                </div>`;
    },
    mapAnswerItens: function mapAnswerItens(answers, genQuestionID, answerContainer, answerContainer1) {
        return answers.reduce((ansAcc, ansItem, i, ansArr) => {
            let newID = newAnswerID.next().value;
            if (ansItem.isCorrectAnswer) {
                this.isCorrectAnswer.add([genQuestionID, newID]);
            }
            let actual = this.createAnswersItems(ansItem, newID);                              //identificar os items de resposta pra pegar true/false
            if (i === 0) {
                ansAcc = [...ansAcc, answerContainer[0], actual];
                return ansAcc;
            } else if (i === 1) {
                ansAcc = [...ansAcc, actual, answerContainer[1]];
                return ansAcc;
            } else if (i === 2 && ansArr.length === 3) {
                ansAcc = [...ansAcc, answerContainer1[0], actual, answerContainer1[1]];
                return ansAcc;
            } else if (i === 2 && ansArr.length === 4) {
                ansAcc = [...ansAcc, answerContainer1[0], actual];
                return ansAcc;
            } else if (i === 3 && ansArr.length === 4) {

                ansAcc = [...ansAcc, actual, answerContainer1[1]];
                return ansAcc;
            }
        }, []);
    },
}