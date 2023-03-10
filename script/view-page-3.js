import { createQuizz } from "./services.js";
import { goToPage2AfterFinish } from "./main.js";
import { view2 } from './view-page-2.js'
let currentQuestion = 1;
// let pastQuestion = 1;
let sendableObject = {};
sendableObject.questions = [];
sendableObject.levels = [];
let numberOfAnsweredQuestion = 0;
let numberOfFullFillLevel = 0;
let levelZero = false;
let title;
// let image;
// let validAllQuestionAnswered = false;
let numberOfQuestions = 0;
let currentLevels = 1;
let quizzURL = "";
// let sendableObject.questions[0] = null;
// let sendableObject = {
//     title: title,
//     image: value2,
//     questions: [{
//         title: value,
//         color: valuue,
//         answers: [{
//             text: resp1,
//             image: img1,
//             isCorrectAnswer: boooolean1
//         },
//         {
//             text: resp2,
//             image: img2,
//             isCorrectAnswer: boooolean2            
//         }
//     ]
//     }]
//   };
export const view3 = {
    numberLevels: "",
    numberOfQuestions: "",
    questionStorage: [],
    mountInitialPage: async function mountInitialPage() {
        return `   <header>
                        <p>BuzzQuiz</p>
                    </header>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <main>
                        <div class="paginainicial">
                            <div class="frase">
                                Comece pelo começo
                            </div>
                            <div class="container-informacoes">
                                <input id="inputQuizzTitle" type="text" minlength="20" maxlength="65" required title="Digite entre 20 e 65"
                                    placeholder="Título do seu quizz">
                                <input id="inputQuizzURL" type="url" required title="Digite uma URL válida" placeholder="URL da imagem do seu quizz">
                                <input id="inputQuizzQuestions"type="number" min="1" required title="Digite um número igual ou maior que 0"
                                    placeholder="Quantidade de perguntas do quizz">
                                <input id="inputQuizzLevels" type="number" min="1" required title="Digite um número igual ou maior que 0"
                                    placeholder="Quantidade de níveis do quizz">
                            </div>
                            <button onclick="hide(this); createQuestions.call(window);" >Prosseguir para criar perguntas</button>
                        </div>
                        <div class="segundapagina hide">
                            <div class="frase">
                                Preencha os dados sobre o seu Quizz abaixo
                            </div>
                            <div class="question-box">

                            </div>
                            
                        </div>
                        <div class="terceirapagina hide">
                            <div class="frase">
                                Agora, decida os níveis
                            </div>
                            <div class="level-box">

                            </div>
                            <button class= "button33"onclick="analyzeUserInDataLevels(this); hide(this); renderSucess(); ">Finalizar o quizz</button>
                        </div>
                        <div class="quartapagina hide">
                            <div class="frase">Seu quizz está pronto</div>
                            <div class="sucess-box">

                            </div>
                            <button  onclick="goToPage2AfterFinish()" >Acessar Quizz</button>
                            <h2 onclick="window.location.reload()">Voltar pra home</h2>
                        </div>


    </main>`
    },

    reload: function reload() {
        window.location.reload();
    },
    createQuestions: function createQuestions(elemento) {
        let boxQuestions = window.document.querySelector('.segundapagina .question-box');
        // if (elemento !== undefined) {
        //     let elementCloseQuestionBox32 = elemento.parentNode;
        //     let elementQuestionNumber = elementCloseQuestionBox32.querySelector(".titleQuestion32").innerHTML;
        //     elementQuestionNumber = elementQuestionNumber.replace(/[^0-9]/g, '');
        //     currentQuestion = elementQuestionNumber;
        // }


        // if(sendableObject.questions[0] == null){
        //     for (let i = 0; i < numberOfQuestions; i++) {
        //         sendableObject.questions[i] = {};
        //     }
        // }
        // else{
        //     sendableObject.questions[currentQuestion] = {
        //         title: novoTitulo,
        //         color: novaCor,
        //         answers: [{
        //             text: resp1,
        //             image: img1,
        //             isCorrectAnswer: booolean1
        //         },
        //         {
        //             text: resp2,
        //             image: img2,
        //             isCorrectAnswer: booolean2
        //         }]
        //     };
        // }

        ///anotando os dados
        //1 round
        //2 round







        boxQuestions.innerHTML = "";



        for (let i = 0; i < numberOfQuestions; i++) {
            if (i == (currentQuestion - 1)) {
                // currentQuestion++;

                
                boxQuestions.innerHTML += `
                <div class="openQuestionBox32">
                    <div class="questionBox32">
                        <div id="openQuestionTitle" class="titleQuestion32">
                        </div>
                        <div class="inputsQuestion32">
                        </div>
                    </div>
                    <div class="rightAnswerBox32">
                        <div class="titleQuestion32">
                            Resposta certa                        
                        </div>
                        <div class="inputsRightQuestions32">
                        </div>
                    </div>
                    <div class="wrongAnswerBox32">
                        <div class="titleQuestion32">
                            Respostas incorretas                        
                        </div>
                        <div class="firstWrongQuestion32">                      
                        </div>
                        <div class="secondWrongQuestion32">                        
                        </div>
                        <div class="thirdWrongQuestion32">                        
                        </div>
                    </div>
                </div>
            `;

                const elementTitleQuestion32 = document.querySelector("#openQuestionTitle");
                const elementInputsQuestion32 = document.querySelector(".inputsQuestion32");
                const elementInputsRightQuestions32 = document.querySelector(".inputsRightQuestions32");
                const elementFirstWrongQuestion32 = document.querySelector(".firstWrongQuestion32");
                const elementSecondWrongQuestion32 = document.querySelector(".secondWrongQuestion32");
                const elementThirdWrongQuestion32 = document.querySelector(".thirdWrongQuestion32");

                elementTitleQuestion32.innerHTML += `
            Pergunta ${i + 1}
        `;
                elementInputsQuestion32.innerHTML += `
            <input id="question32-${i + 1}" class="question-title" type="text" placeholder="Texto da pergunta ${i + 1}">
            <input id="backgroundColor32-${i + 1}" class="question-color" type="text" placeholder="Cor de fundo da pergunta ${i + 1}">
        `;
                elementInputsRightQuestions32.innerHTML += `
            <input id="rightAnswer32-${i + 1}" class="correct-answer" type="text" placeholder="Resposta correta da pergunta ${i + 1}">
            <input id="rightURL32-${i + 1}" class="question-url-correct" type="text" placeholder="URL da imagem da pergunta ${i + 1}">
        `;
                elementFirstWrongQuestion32.innerHTML += `
            <input id="firstWrongQuestion32-${i + 1}" class="wrong-answer1" type="text" placeholder="Resposta incorreta 1 da pergunta ${i + 1}">
            <input id="firstWrongURL32-${i + 1}" class="question-url1" type="text" placeholder="URL da imagem 1 da pergunta ${i + 1}">   
        `;
                elementSecondWrongQuestion32.innerHTML += `
            <input id="secondWrongQuestion32-${i + 1}" class="wrong-answer2" type="text" placeholder="Resposta incorreta 2 da pergunta ${i + 1} (OPCIONAL)">
            <input id="secondWrongURL32-${i + 1}" class="question-url2" type="text" placeholder="URL da imagem 2 da pergunta ${i + 1} (OPCIONAL)"> 
        `;
                elementThirdWrongQuestion32.innerHTML += `
            <input id="thirdWrongQuestion32-${i + 1}" class="wrong-answer3" type="text" placeholder="Resposta incorreta 3 da pergunta ${i + 1} (OPCIONAL)">
            <input id="thirdWrongURL32-${i + 1}" class="question-url3" type="text" placeholder="URL da imagem 3 da pergunta ${i + 1} (OPCIONAL)">   
        `;
            }
            else {
                boxQuestions.innerHTML += `
            <div class="closeQuestionBox32">
                <div class="titleQuestion32">Pergunta ${i + 1}</div>
                <div onclick="analyzeUserInData(this)" class="icon32">
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
            `;
            }

        }

        boxQuestions.innerHTML += `
                <div class="button32"  onclick="analyzeUserInData(this); hide(this); createLevels.call(window);" >
                    Prosseguir pra criar níveis
                </div>
                `;
    },

    expandQuestion: function expandQuestion(req) {
        const selected = window.document.querySelector('.selected');
        const question = req.parentNode.parentNode;
        if (selected) {
            selected.classList.add('hide');
            question.classList.add('selected');
        } else {
            question.classList.add('selected');
        }
    },
    validHexQuestionColor: function validHexQuestionColor(){
        let questionColor = document.querySelector(".question-color").value;
        let validSize = questionColor.length === 7;
        let isValidHexDecColor = str => /^#?[0-9A-Fa-f]+$/.test(str);
        let validColor = isValidHexDecColor(questionColor.slice(0, 7)); 
        console.log(validSize);
        console.log(validColor);
        return (validSize&&validColor);

    },
    analyzeUserInData: function analyzeUserInData(elemento) {
        let elementCloseQuestionBox32 = elemento.parentNode;
        
        let elementQuestionNumber = elementCloseQuestionBox32.querySelector(".titleQuestion32").innerHTML;
        elementQuestionNumber = elementQuestionNumber.replace(/[^0-9]/g, '');
        let validQuestionTitle, validQuestionColor, validCorrectAnswer, validQuestionUrlCorrect, validWrongAnswer1, validQuestionUrl1, validAllDataIn = false;

        validQuestionTitle = (document.querySelector(".question-title").value.length) >= 20;
        validQuestionColor = validHexQuestionColor();
        validCorrectAnswer = !!document.querySelector(".correct-answer").value;
        validQuestionUrlCorrect = isValidUrl(document.querySelector(".question-url-correct").value);
        validWrongAnswer1 = !!document.querySelector(".wrong-answer1").value;
        validQuestionUrl1 = isValidUrl(document.querySelector(".question-url1").value);
        validAllDataIn = validQuestionTitle && validQuestionColor && validCorrectAnswer && validQuestionUrlCorrect && validWrongAnswer1 && validQuestionUrl1;
        
        // if(validAllDataIn && (elemento.classList.contains("icon32"))){
        if(validAllDataIn){
            getQuestionsData();
            if(!elemento.classList.contains("button32")){
                currentQuestion = elementQuestionNumber;
                createQuestions();  
            }
            numberOfAnsweredQuestion++;                
        }
        else if(!validQuestionTitle){
            alert("Coloque a sua pergunta com pelo menos 20 caracteres!");
        }
        else if(!validQuestionColor){
            alert("Coloque uma cor em hexadecimal, no formato #000000!");
        }
        else if(!validQuestionUrlCorrect){
            alert("Coloque uma URL valida de uma imagem na pergunta correta");
        }
        else if(!validQuestionUrl1){
            alert("Coloque uma URL valida de uma imagem na primeira pergunta errada");
        }
        
        else {
            alert("Faltam dados");
        }
        
        // validQuestionTitle = !!document.querySelector(".wrong-answer2").value);
        // validQuestionTitle = !!document.querySelector(".question-url1").value);
        // validQuestionTitle = !!document.querySelector(".wrong-answer3").value);
        // validQuestionTitle = !!document.querySelector(".question-url1").value);

    },
    getQuestionsData: function getQuestionsData(){
        sendableObject.questions[currentQuestion-1] = {
            title: document.querySelector(".question-title").value,
            color: document.querySelector(".question-color").value,
            answers: [{
                text: document.querySelector(".correct-answer").value,
                image: document.querySelector(".question-url-correct").value,
                isCorrectAnswer: true
            },
            {
                text: document.querySelector(".wrong-answer1").value,
                image: document.querySelector(".question-url1").value,
                isCorrectAnswer: false
            }]
        };
        if(!!document.querySelector(".wrong-answer2").value){
            sendableObject.questions[currentQuestion-1].answers.push({
            text: document.querySelector(".wrong-answer2").value,
            image: document.querySelector(".question-url2").value,
            isCorrectAnswer: false
            });            
        }

        if(!!document.querySelector(".wrong-answer3").value){
            sendableObject.questions[currentQuestion-1].answers.push({
            text: document.querySelector(".wrong-answer3").value,
            image: document.querySelector(".question-url3").value,
            isCorrectAnswer: false
            });            
        }

    },

    hide: function hide(elemento) {
        let pagina = elemento.parentNode;
        if (pagina.classList.contains("question-box")) {
            pagina = pagina.parentNode;
        }
        let nextPagina = elemento.parentNode.nextSibling?.nextSibling;
        if (pagina.classList.contains("segundapagina")) {
            nextPagina = document.querySelector(".terceirapagina");
        }
        else if (pagina.classList.contains("terceirapagina")) {
            nextPagina = document.querySelector(".quartapagina");
        }
        let validTitle = false;
        let validURL = false;
        let validQuestions = false;
        let validLevels = false;
        let validPage31 = false;
        // let elementTerceiraPagina = document.querySelector(".terceirapagina");


        //variaveis da pagina 3.1
        let valueQuizzTitle = document.getElementById('inputQuizzTitle').value;
        title = valueQuizzTitle
        let valueQuizzURL = document.getElementById('inputQuizzURL').value;
        quizzURL = valueQuizzURL;
        let valueQuizzQuestions = document.getElementById('inputQuizzQuestions').value;
        numberOfQuestions = valueQuizzQuestions;
        let valueQuizzLevels = document.getElementById('inputQuizzLevels').value;
        numberLevels = valueQuizzLevels;
        //validando variaveis da primeira pagina
        validTitle = (valueQuizzTitle.length <= 65) && (valueQuizzTitle.length >= 20);
        validURL = isValidUrl(valueQuizzURL);
        validQuestions = (valueQuizzQuestions >= 3);
        validLevels = (valueQuizzLevels >= 2);
        validPage31 = validTitle && validURL && validQuestions && validLevels;
        // validPage31 = validTitle && validQuestions && validLevels;
        // let validPage32 = false;
        // validPage32Function()
        if (pagina.classList.contains("paginainicial")) {
            if (validPage31) {
                pagina.classList.add('hide');
                nextPagina.classList.remove('hide');
                // elementTerceiraPagina.classList.remove('hide');
                for (let i = 0; i < numberOfQuestions; i++) {
                    sendableObject.questions[i] = {};
                }
                for (let i = 0; i < numberLevels; i++) {
                    sendableObject.levels[i] = {};
                }
            }
            else if (!validTitle) {
                alert("O titulo deve conter de 20 até 65 caracteres!");
            }
            else if (!validURL) {
                alert("Coloquei uma URL valida!");
            }
            else if (!validQuestions) {
                alert("Deve existir no minimo 3 questões!");
            }
            else if (!validLevels) {
                alert("Deve existir no minimo dois niveis!");
            }
        }
        else if (pagina.classList.contains("segundapagina") && ((numberOfAnsweredQuestion) == numberOfQuestions)) {
            
            pagina.classList.add('hide');
            nextPagina.classList.remove('hide');
        }
        else if (pagina.classList.contains("terceirapagina") && ((numberOfFullFillLevel) == numberLevels)) {
            finishQuizz.call(window);
            pagina.classList.add('hide');
            nextPagina.classList.remove('hide');
        }
        else if (!(numberOfAnsweredQuestion == numberOfQuestions)){
            alert(`Insira dados em todas as ${numberOfQuestions} perguntas`);
        }
        else if (!(numberOfFullFillLevel == numberLevels)){
            alert(`Insira os dados de todos os ${numberLevels} levels`);            
        }

        // pagina.classList.add('hide');
        // nextPagina.classList.remove('hide');
    },

    getLevelsData: function getLevelsData(){
        sendableObject.levels[currentLevels-1] = {
            title: document.querySelector(".level-title").value,
            image: document.querySelector(".level-url").value,
            text: document.querySelector(".level-description").value,
            minValue: document.querySelector(".level-min").value
        };
        // console.log("objto todo: ",sendableObject);
        // console.log("questions: ",sendableObject.questions);
        // console.log("levels: ",sendableObject.levels);
    },
    analyzeUserInDataLevels: function analyzeUserInDataLevels(elemento){
        let elementCloselevel = elemento.parentNode.parentNode;
        let elementLevelNumber = elementCloselevel.querySelector(".close-titulo").innerHTML;
        elementLevelNumber = elementLevelNumber.replace(/[^0-9]/g, '');
        // currentLevels = elementLevelNumber;
        // console.log(currentLevels);
        // class="level-title"
        // class="level-min"
        // class="level-url"
        // class="level-description"
        let validLevelTitle, validLevelMin, validLevelUrl, validDescription, validAllDataLevelIn = false;

        // validLevelTitle = !!document.querySelector(".level-title").value;
        validLevelTitle = (document.querySelector(".level-title").value.length) >= 10;
        // validLevelMin = !!document.querySelector(".level-min").value;
        validLevelMin = (document.querySelector(".level-min").value >= 0) && (document.querySelector(".level-min").value <= 100);
        debugger;
        let levelMinNumber = document.querySelector(".level-min").value;
        if( levelMinNumber == "0"){
            levelZero = true;
        }
        // validLevelUrl = !!document.querySelector(".level-url").value;
        validLevelUrl = isValidUrl(document.querySelector(".level-url").value);
        validDescription = (document.querySelector(".level-description").value.length >= 30);
        validAllDataLevelIn = validLevelTitle && validLevelMin && validLevelUrl && validDescription && levelZero;
        if(validAllDataLevelIn){
            getLevelsData();
            if(!elemento.classList.contains("button33")){
                currentLevels = elementLevelNumber;
                renderLevels();  
            }
            numberOfFullFillLevel++;            
            console.log(numberOfFullFillLevel); 
        }
        else if(!validLevelTitle){
            alert("O titulo do nível deve ter pelo menos 10 caracteres!");
        }
        else if(!levelZero){
            alert("O primeiro nivel deve contar % de acerto minimo de 0!");
        }
        else if(!validLevelMin){
            alert("A % de acerto minimo deve ser um número e estar entre 0 a 100!");
        }
        else if(!validLevelUrl){
            alert("URL invalida! Coloque a URL de uma imagem!");
        }
        else if(!validDescription){
            alert("A descrição deve conter pelo menos 30 caracteres!");
        }
        else {
            alert("Faltam dados");
        }

    },


    renderLevels: function renderLevels(elemento) {
        const boxLevels = window.document.querySelector('.terceirapagina .level-box');
        
        // if (elemento !== undefined) {
            
        // }

        // analyzeUserInDataLevels();

        boxLevels.innerHTML = "";

        for (let i = 0; i < numberLevels; i++) {
            if (i == (currentLevels - 1)) {
                boxLevels.innerHTML += `
                    <div class="level">
                        <div class="titulo">
                            <p>Nivel ${i + 1}</p>
                        </div>
                        <div class="selected">
                           <input type="text" class="level-title" minlength="10" required title="minimo de 10 letras" placeholder="Título do nível ${i + 1}">
                           <input type="number" class="level-min" min="0" max="100" required placeholder="% de acerto mínima do nível ${i + 1}">
                           <input type="url" class="level-url" required placeholder="URL da imagem do nível ${i + 1}">
                           <input type="text" class="level-description" minlength="30" required title="minimo de 30 letras" placeholder="Descrição do nível ${i + 1}">
                        </div>
                    </div>
                `;
            }
            else {
                boxLevels.innerHTML += `
                <div class="close-level">
                    <div class="close-titulo">Nível ${i + 1}</div>
                    <div class="icon32">
                        <ion-icon onclick="analyzeUserInDataLevels(this)" name="create-outline"></ion-icon>
                    </div>
                </div>
                `;
            }
        }
    },
    createLevels: function createLevels() {
        view3.questionStorage = [];
        // alert("create levels");
        // const allCorrectAnswers = window.document.querySelectorAll('.correct-answer');
        // const allWrongAnswers1 = window.document.querySelectorAll('.wrong-answer1');
        // const allWrongAnswers2 = window.document.querySelectorAll('.wrong-answer2');
        // const allWrongAnswers3 = window.document.querySelectorAll('.wrong-answer3');
        // const allQuestionColors = window.document.querySelectorAll('.question-color');
        // const allQuestionTitles = window.document.querySelectorAll('.question-title');
        // const allQuestionUrlsCorrects = window.document.querySelectorAll(
        //     '.question-url-correct'
        // );
        // const allQuestionUrls1 = window.document.querySelectorAll('.question-url1');
        // const allQuestionUrls2 = window.document.querySelectorAll('.question-url2');
        // const allQuestionUrls3 = window.document.querySelectorAll('.question-url3');

        // for (let i = 0; i < allCorrectAnswers.length; i++) {
        //     const title = allQuestionTitles[i].value;
        //     const color = allQuestionColors[i].value;
        //     const correct = allCorrectAnswers[i].value;
        //     const urlCorrect = allQuestionUrlsCorrects[i].value;
        //     const wrong1 = allWrongAnswers1[i].value;
        //     const wrong2 = allWrongAnswers2[i].value;
        //     const wrong3 = allWrongAnswers3[i].value;
        //     const url1 = allQuestionUrls1[i].value;
        //     const url2 = allQuestionUrls2[i].value;
        //     const url3 = allQuestionUrls3[i].value;

        //     view3.questionStorage.push({
        //         title: title,
        //         color: color,
        //         answers: [
        //             {
        //                 text: correct,
        //                 image: urlCorrect,
        //                 isCorrectAnswer: true,
        //             },
        //             {
        //                 text: wrong1,
        //                 image: url1,
        //                 isCorrectAnswer: false,
        //             },
        //         ],
        //     });

        //     if (wrong2 !== '' && wrong3 === '') {
        //         view3.questionStorage[i].answers.push({
        //             text: wrong2,
        //             image: url2,
        //             isCorrectAnswer: false,
        //         });
        //     } else if (wrong2 !== '' && wrong3 !== '') {
        //         view3.questionStorage[i].answers.push(
        //             {
        //                 text: wrong2,
        //                 image: url2,
        //                 isCorrectAnswer: false,
        //             },
        //             {
        //                 text: wrong3,
        //                 image: url3,
        //                 isCorrectAnswer: false,
        //             }
        //         );
        //     }
        // }
        // let questions = document.querySelector('questions')
        // questions.classList.add('hide');
        // questions.classList.remove('questions');
        // levels.classList.remove('hide');
        // levels.classList.add('levels');
        renderLevels();
    },
    isValidUrl: function isValidUrl(urlString) {
        return (urlString.includes('.png') || urlString.includes('.jpg') || urlString.includes('.jpeg') || urlString.includes('.bmp'));
    },
    renderSucess: function renderSucess() {
        
        // alert("Teste");
        view3.inputTitle = document.querySelector('.paginainicial input').value;
        view3.inputImage = document.querySelector(
            '.paginainicial input:nth-child(2)'
        ).value;
        const boxSucess = window.document.querySelector('.quartapagina .sucess-box');
        boxSucess.innerHTML = `
        <div class="quizz">
          <div class="gradient"></div>
          <img src="${view3.inputImage}" alt="">
          <div class="quizzFinishedTitle">
            ${view3.inputTitle}
          </div>
        </div>
      `;
    },

    finishQuizz: async function finishQuizz() {
        // const [quizzTitle, quizzImage] = document.querySelectorAll('.paginainicial .container-informacoes input')
        // const levelBoxItems = document.querySelectorAll('.terceirapagina .level-box input')

        // let questions = [];
        // const allCorrectAnswers = window.document.querySelectorAll('.correct-answer');
        // const allWrongAnswers1 = window.document.querySelectorAll('.wrong-answer1');
        // const allWrongAnswers2 = window.document.querySelectorAll('.wrong-answer2');
        // const allWrongAnswers3 = window.document.querySelectorAll('.wrong-answer3');
        // const allQuestionColors = window.document.querySelectorAll('.question-color');
        // const allQuestionTitles = window.document.querySelectorAll('.question-title');
        // const allQuestionUrlsCorrects = window.document.querySelectorAll(
        //     '.question-url-correct'
        // );
        // const allQuestionUrls1 = window.document.querySelectorAll('.question-url1');
        // const allQuestionUrls2 = window.document.querySelectorAll('.question-url2');
        // const allQuestionUrls3 = window.document.querySelectorAll('.question-url3');

        // for (let i = 0; i < allCorrectAnswers.length; i++) {
        //     const title = allQuestionTitles[i].value;
        //     const color = allQuestionColors[i].value;
        //     const correct = allCorrectAnswers[i].value;
        //     const urlCorrect = allQuestionUrlsCorrects[i].value;
        //     const wrong1 = allWrongAnswers1[i].value;
        //     const wrong2 = allWrongAnswers2[i].value;
        //     const wrong3 = allWrongAnswers3[i].value;
        //     const url1 = allQuestionUrls1[i].value;
        //     const url2 = allQuestionUrls2[i].value;
        //     const url3 = allQuestionUrls3[i].value;

        //     questions.push({
        //         title: title,
        //         color: color,
        //         answers: [
        //             {
        //                 text: correct,
        //                 image: urlCorrect,
        //                 isCorrectAnswer: true,
        //             },
        //             {
        //                 text: wrong1,
        //                 image: url1,
        //                 isCorrectAnswer: false,
        //             },
        //         ],
        //     });

        //     if (wrong2 !== '' && wrong3 === '') {
        //         questions[i].answers.push({
        //             text: wrong2,
        //             image: url2,
        //             isCorrectAnswer: false,
        //         });
        //     } else if (wrong2 !== '' && wrong3 !== '') {
        //         questions[i].answers.push(
        //             {
        //                 text: wrong2,
        //                 image: url2,
        //                 isCorrectAnswer: false,
        //             },
        //             {
        //                 text: wrong3,
        //                 image: url3,
        //                 isCorrectAnswer: false,
        //             }
        //         );
        //     }
        // }


        // const levels = [...levelBoxItems].map(item => item.value).reduce((acc, item, i) => {
        //     if ((i === 0) || (i % 4 === 0 && i > 2)) {
        //         acc[0] = Object.assign(acc[0], { title: item })
        //     } else if ((i === 1) || (i % 4 === 1 && i > 2)) {
        //         acc[0] = Object.assign(acc[0], { minValue: item })
        //     } else if ((i === 2) || (i % 4 === 2 && i > 2)) {
        //         acc[0] = Object.assign(acc[0], { image: item })
        //     } else if ((i === 3) || (i % 4 === 3 && i > 2)) {
        //         acc[0] = Object.assign(acc[0], { text: item })
        //     }
        //     if (Object.keys(acc[0]).length === 4) {
        //         acc[1].push(acc[0])
        //         acc[0] = {}
        //     }
        //     return acc
        // }, [{}, []])

        // const objectQuizzCreate = {
        //     title: quizzTitle.value,
        //     image: quizzImage.value,
        //     questions: questions,
        //     levels: levels[1],
        // };
        sendableObject.image = quizzURL;
        sendableObject.title = title;
        console.log(sendableObject);

        
        const promise = await createQuizz(sendableObject);

        let userItems = window.localStorage.getItem("userID")
        let newUserItems = JSON.parse(userItems)
        newUserItems.push({ [`${promise.id}`]: promise.key })
        window.localStorage.setItem("userID", JSON.stringify(newUserItems))
    },

    levelObjectCreate: function levelObjectCreate() {
        view3.levelStorage = [];
        for (let i = 0; i < allLevelTitles.length; i++) {
            view3.levelStorage.push({
                title: levelTitles[i],
                image: levelUrls[i],
                text: levelDescription[i],
                minValue: levelMins[i],
            });
        }
    },

    backHome: function backHome() {
        location.reload(true);
    },

    postQuizz: function postQuizz() {
        const objectQuizzCreate = {
            title: inputTitle,
            image: inputImage,
            questions: questionStorage,
            levels: levelStorage,
        };
        const promise = createQuizz(objectQuizzCreate)
        // const promise = axios.post(
        // 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes',
        // objectQuizzCreate
        // );

        promise.catch((err) => console.log(err));
        promise.then((res) => {
            quizzAtual = res.data;
            if (localStorage.length === 0) {
                userQuizzes.push(res.data);
                userQuizzesString = JSON.stringify(userQuizzes);
                localStorage.setItem('userQuizzes', userQuizzesString);
            } else {
                const arrayAux = JSON.parse(localStorage.getItem('userQuizzes'));
                arrayAux.push(res.data);
                userQuizzesString = JSON.stringify(arrayAux);
                localStorage.setItem('userQuizzes', userQuizzesString);
            }
        });
        
    },



    accessQuizz: async function accessQuizz() {
        const main = window.document.querySelector('main')
        console.log(main)

        // const { image, title, questions } =  await createQuizz(quizz)
        // view.buildPage2(main, image, title, questions)
        // window.openQuizz(main)
    }

}
