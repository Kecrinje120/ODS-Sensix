
/*
* Partes de la llamada de datos de un archivo JSON externo
* 1. function fetchQuestions() { Hacemos la función que nos llama a los datos }
* 2.  fetch (ruta del json) usamos fetch para obtener los datos del json (solicitud del servidor para obtener response)
* 3.  .then usamos .then para manejar la respuesta (response: es la respuesta recibida del servidor) 
*/

var questionValues;

var questionsValuesString = localStorage.getItem(questionValues);

questionValues = JSON.parse(questionsValuesString);

var i = 0;

document.addEventListener(`DOMContentLoaded`, function () {
    if (window.location.pathname.endsWith('quest.html')) {
        // La página actual es quest.html, ejecutar fetch
        fetchQuestions();
    } else if (window.location.pathname.endsWith(`results.html`)) {
        console.log(`NUEVA PAGINA`);

        var questionValuesString = localStorage.getItem(`questionValues`);

        if (questionValuesString) {
            console.log(`¡¡¡TENGO LOS VALORES STRING!!!`)
            var questionValuesFinal = JSON.parse(questionValuesString);
            console.log(questionValuesFinal);

            // AQUÍ ES DONDE ESCRIBIMOS EL CODIGO DE RESULTS
            var sumatorio = 0;

            for (var n = 0; n < questionValuesFinal.length; n++) {
                sumatorio += questionValuesFinal[n];
            }

            console.log(`Se ha completado el quest con un ${sumatorio}/150`);

            var resultadoFinal = parseFloat((sumatorio / 150) * 10).toFixed(2);

            console.log(`Resultado: ${resultadoFinal}`);


            // Creación
            var resultText1 = document.createElement(`p`);
            resultText1.classList.add(`resultText`);

            var divResult2 = document.createElement(`div`);
            var resultText2 = document.createElement(`p`);
            resultText2.classList.add(`resultText`);
            divResult2.appendChild(resultText2)
            if (sumatorio < 75) {
                resultText2.innerHTML = `MAL, ESPABILA &#128545;`
            } else if (sumatorio >= 75 && sumatorio < 100) {
                resultText2.innerHTML = `MEJORABLE, CONFIAMOS EN TI &#128546;`
            } else if (sumatorio >= 100 && sumatorio < 139) {
                resultText2.innerHTML = `POR EL BUEN CAMINO, SIGA TRABAJANDO EN ELLO &#128077;`
            } else {
                resultText2.innerHTML = `EXCELENTE, SIGUE ASÍ &#127775;`
            }

            var resultText3 = document.createElement(`p`);
            resultText3.classList.add(`resultText`);

            // Modificamos
            resultText1.textContent = `Has completado el test con un resultado de ${sumatorio}/150.`;
            resultText3.textContent = `Tu puntuación es de ${resultadoFinal}.`;

            // Insertamos
            var resultadosDIV = document.getElementById(`resultadosDIV`);

            resultadosDIV.appendChild(resultText1);
            resultadosDIV.appendChild(resultText2);
            resultadosDIV.appendChild(resultText3);


            /* RECOMENDACIONES */
            function fetchQuestionsResults() {
                console.log(`fetchQuestionsResults se está ejecutando`);
                fetch(`../JSON/json.json`)
                    .then(response => response.json())
                    .then(data => {

                        var questionsResults = data;

                        console.log(questionsResults.length); /* Tengo las questions de nuevo */

                        console.log(questionsResults[0].recomendacion[0].texto_recomendacion);

                        /* function showhide(faqDiv) {
                            faqDiv.classList.toggle(`active`)
                        } */

                        var tipsBox = document.getElementById(`tips-box`);

                        for (i = 0; i < questionsResults.length; i++) {

                            //1. Creamos elemento faq-recomendations

                            var faqDiv = document.createElement(`div`);
                            faqDiv.classList.add(`faq-recomendations`);


                            //2. Creamos question

                            var question = document.createElement(`div`);
                            question.classList.add(`question`);

                            //3. Creamos h3 para question
                            var h3 = document.createElement(`h5`);
                            h3.textContent = `Pregunta ${i + 1} - ${questionsResults[i].pregunta}`;

                            //3. Crear span para question
                            var iconSpan = document.createElement(`span`);
                            iconSpan.classList.add(`material-symbols-outlined`);
                            iconSpan.textContent = `expand_more`

                            //3.1 Añadir evento de click sobre faqDiv


                            /* faqDivArray.addEventListener(`click`, () => {
                                faqDiv.classList.toggle(`active`);
                            }) */

                            //4. Añadir faqDiv a tipsBox
                            tipsBox.appendChild(faqDiv);

                            //5. Añadir question a faqDiv
                            faqDiv.appendChild(question);

                            //5. Añadir h3 y iconSpan a faqDiv
                            question.appendChild(h3)
                            question.appendChild(iconSpan);

                            //6. Creamos answer
                            var answer = document.createElement(`div`);
                            answer.classList.add(`answer`);

                            //6.1 Creamos div intermedio
                            var middleDiv = document.createElement(`div`);

                            //7. Añadir answer a faqDiv
                            faqDiv.appendChild(answer);

                            //8. Añadir div intermedio a answer
                            answer.appendChild(middleDiv);


                            //9. Para cada recomendación crear un p
                            questionsResults[i].recomendacion.forEach((recomendacion, s) => {

                                //9.1 Crear p para cada recomendación
                                var recomendationParagraph = document.createElement(`p`);
                                //7.2 Insertar conenido en cada `p`
                                recomendationParagraph.textContent = `${questionsResults[i].recomendacion[s].texto_recomendacion}`

                                //10. Añadir cada recomendationParagraph a cada middelDiv
                                middleDiv.appendChild(recomendationParagraph);
                            });

                            //10. Agregar evento de mostrar/ocultar anwser

                        }

                        var faqDivAll = document.querySelectorAll(`.faq-recomendations`);


                        faqDivAll.forEach(faq => {
                            faq.addEventListener(`click`, () => {
                                faq.classList.toggle(`active`);
                            })
                        })

                    })

            }


            fetchQuestionsResults()

            /* faqDivArray.forEach(faq => {
                        faq.addEventListener(`click`, () => {
                            faq.classList.toggle(`.active`);
                            console.log(`se activo`)
                        })
                    }) */


        } else {
            console.log(`NO SE ENCONTRARON LOS DATOS EN EL ALMACENAMIENTO LOCAL`)
        }
    }
});

function MenuHamburgesa() {
    var equis = document.querySelector('.hamburguer');
    var nav = document.querySelector('nav');
    var contenidoHamburguesa = document.getElementById('contenido-hamburguesa');

    equis.classList.toggle("transicion");
    nav.classList.toggle("transicion");

    if (contenidoHamburguesa.style.display !== "block") {
        contenidoHamburguesa.style.display = "block"
    } else {
        contenidoHamburguesa.style.display = "none"
    }

}
var hamburger = document.getElementById('MenuHamburgesa');
hamburger.addEventListener('click', MenuHamburgesa);

/* document.addEventListener( `DOMContentLoaded`,  */
function fetchQuestions() {
    console.log(`fetchQuestions se esta ejecutando...`)
    fetch(`../JSON/json.json`)
        .then(response => response.json())
        //response (respuesta servidor) + .json() (convertidor en objeto de json) <= response (lo metemos en este response) 
        .then(data => { // ahora vamos a manejar los datos de la response
            var questions = data // guardamos los datos en un objeto llamado questions

            console.log(questions);

            console.log(questions.length);

            console.log(questions[0].pregunta); // pregunta 0

            console.log(questions[0].respuesta) // Todas las respuestas

            console.log(questions[0].respuesta[0].texto_respuesta); //Primera respuesta; [0]

            console.log(questions[0].respuesta[1].texto_respuesta); //Segunda respuesta; [1]

            console.log(questions[0].respuesta[1].valor);

            //Aquí tenemos una tabla de los valores que se van a recolectar por cada pregunta
            console.log(`Aquí tenemos una tabla de los valores que se van a recolectar por cada pregunta`);
            questionValues = [];
            for (var n = 0; n < questions.length; n++) {
                questionValues[n] = 0;
            }
            console.log(questionValues);

            //Aquí tenemos una tabla de questiones 

            console.log(`¡Pregunta actual!: Pregunta nº${i + 1}`)

            var r1Value = questions[0].respuesta[0].valor;
            var r2Value = questions[0].respuesta[1].valor;
            var r3Value = questions[0].respuesta[2].valor;
            var r4Value = questions[0].respuesta[3].valor;

            console.log(`respuesta1 = ${r1Value}`);
            console.log(`respuesta2 = ${r2Value}`);
            console.log(`respuesta3 = ${r3Value}`);
            console.log(`respuesta4 = ${r4Value}`);

            // ASIGNAMOS rValues a los inputs correspondientes en el HTML

            var respuesta_opcion1_input = document.getElementById(`respuesta_opcion1`);
            var respuesta_opcion2_input = document.getElementById(`respuesta_opcion2`);
            var respuesta_opcion3_input = document.getElementById(`respuesta_opcion3`);
            var respuesta_opcion4_input = document.getElementById(`respuesta_opcion4`);

            // Al optimizar en bucle utilizar class = "respuesta_radio"
            // Asignación de rValue a inputValue

            respuesta_opcion1_input.value = r1Value;
            respuesta_opcion2_input.value = r2Value;
            respuesta_opcion3_input.value = r3Value;
            respuesta_opcion4_input.value = r4Value;

            // Testeamos...
            // Para sacar un conjunto de radios para ver el check los llamamos por su nombre (name), es mejor para
            // formularios que el class

            var radios = document.querySelectorAll(`.respuesta_radio`); //Array de radios

            // Usamos el eventListener de nextButton para dar el valor del radio marcado...así que lo hacemos en 
            // la función nextQuestion()

            // Hacemos array de values para recorrerlos en memoria-check
            var rValues = [r1Value, r2Value, r3Value, r4Value];


            // Click label 
            var labels = document.querySelectorAll(`.form_label`)

            labels.forEach(label => {
                label.addEventListener(`click`, () => {
                    labels.forEach(otherLabel => {
                        if (otherLabel !== label) { //si el otherlabel(clicada).styele !== label(no clickadas).style es decir que tenga el style 
                            otherLabel.style.backgroundColor = ``;
                            label.style.borderRadius = ``;
                            label.style.color = `black`; //restablece todos en caso de que uno no tenga el mismo estilo que el resto
                        }
                    });
                    label.style.backgroundColor = `white`;
                    label.style.borderRadius = `10px`;
                });
            });




            function nextQuestion() {

                /* // REQUIRED
                var allChecked = false;
                for (r = 0; r < radios.length; r++) {
                    if(radios[r].checked) { // si hay  alguna radio que esté checked
                        allChecked = true;
                        break
                    }
                if (!allChecked) {
                    alert(`Debes marcar una respuesta`);
                    break
                } */

                //Quitamos focus al label
                labels.forEach(label => {
                    labels.forEach(otherLabel => {
                        if (otherLabel !== label) { //si el otherlabel(clicada).styele !== label(no clickadas).style es decir que tenga el style 
                            otherLabel.style.backgroundColor = ``; //restablece todos en caso de que uno no tenga el mismo estilo que el resto
                        }
                    });
                });

                // GUARDAR VALUES
                for (var r = 0; r < radios.length; r++) {
                    if (radios[r].checked) { //indice [r] se mantiene en la coincidencia
                        console.log(`Valor de la respuesta seleccionada: ${radios[r].value}`);

                        // Aquí es donde se transfiere el radios[r].value a la array questionsValues

                        questionValues[i] = parseInt(radios[r].value);

                        // Ahora hay que desmarcar el radio pulsado
                        radios[r].checked = false; // se desmarcan todos los del nuevo escenario

                        // Despues de guardar el ultimo valor guardamos questionValues[i] en local storage
                        /* if (i == questions.length) {
                            localStorage.setItem(`questionValues`, JSON.stringify(questionValues)); // EL MALO
                        } */

                        break;
                    }
                }

                // Como estan desmarcados los del escenario puede funcionar este if si marcas o como si no marcas
                // ningun radio ya que si marcas --> false y si no --> false
                if (!radios.checked) {
                    console.log(questionValues);
                }

                /* IR A PAGINA DE RESULTS */
                if (i == questions.length - 1) {
                    /* for (var n = 0; n < questionValues.length; n++) {
                        if (questionValues[n] === null) {
                            questionValues[n] = 0;
                        }
                    } */
                    localStorage.setItem(`questionValues`, JSON.stringify(questionValues)); // ESTE ES EL BUENO
                    window.location.replace(`../HTML/results.html`);
                }


                // Aquí ira el finalizar test...Y CAMBIA `SIGUENTE` POR `FINALIZAR`
                if (i == questions.length - 2) {
                    nextButton.textContent = `Finalizar`;
                }


                // IR A LA SIGUIENTE PREGUNTA Y RESPUESTAS
                if (i < questions.length - 1) { // 29 ESTA INCLUIDO YA QUE NOS DARA EL ELSE SABES 

                    i++;

                    console.log(`¡Siguente pregunta! Pregunta nº${i + 1}`)

                    respuesta4.style.display = `inline`; // Por si estaba en `none` inline es más seguro
                    opcionalLabel.style.display = `inline`;


                    pregunta.textContent = `${questions[i].pregunta}`

                    if (questions[i].respuesta.length == 4) {
                        respuesta1.textContent = `${questions[i].respuesta[0].texto_respuesta}`;
                        respuesta2.textContent = `${questions[i].respuesta[1].texto_respuesta}`;
                        respuesta3.textContent = `${questions[i].respuesta[2].texto_respuesta}`;
                        respuesta4.textContent = `${questions[i].respuesta[3].texto_respuesta}`;


                        //Asignar nuevos valores
                        var r1Value = questions[i].respuesta[0].valor;
                        var r2Value = questions[i].respuesta[1].valor;
                        var r3Value = questions[i].respuesta[2].valor;
                        var r4Value = questions[i].respuesta[3].valor;

                        // Metemos rValues en inputValues
                        respuesta_opcion1_input.value = r1Value;
                        respuesta_opcion2_input.value = r2Value;
                        respuesta_opcion3_input.value = r3Value;
                        respuesta_opcion4_input.value = r4Value;

                        // Memoria del checked-value
                        // Hacemos array de rValues

                        /* if (questionValues[i] ==! null) {
                            for (var v = 0; v < rValues.length; v++) {
                                if (rValues[v] == questionValues[i]) {
                                    radios[v].checked = true;
                                    break
                                }
                            }
                        } */

                    } else {
                        respuesta1.textContent = `${questions[i].respuesta[0].texto_respuesta}`;
                        respuesta2.textContent = `${questions[i].respuesta[1].texto_respuesta}`;
                        respuesta3.textContent = `${questions[i].respuesta[2].texto_respuesta}`;

                        respuesta4.style.display = `none`; // Queda oculto span
                        opcionalLabel.style.display = `none`; // Queda oculto label > input?

                        //Asignar nuevos valores
                        var r1Value = questions[i].respuesta[0].valor;
                        var r2Value = questions[i].respuesta[1].valor;
                        var r3Value = questions[i].respuesta[2].valor;
                        var r4Value = null;

                        // Metemos rValues en inputValues
                        respuesta_opcion1_input.value = r1Value;
                        respuesta_opcion2_input.value = r2Value;
                        respuesta_opcion3_input.value = r3Value;
                        respuesta_opcion4_input.value = r4Value;
                    }

                    console.log(`respuesta1 = ${r1Value}`);
                    console.log(`respuesta2 = ${r2Value}`);
                    console.log(`respuesta3 = ${r3Value}`);
                    console.log(`respuesta4 = ${r4Value}`);

                } else {
                    console.log(`Esta es la última pregunta`);
                }

            }


            function backQuestion() {
                //Quitamos focus al label
                labels.forEach(label => {
                    labels.forEach(otherLabel => {
                        if (otherLabel !== label) { //si el otherlabel(clicada).styele !== label(no clickadas).style es decir que tenga el style 
                            otherLabel.style.backgroundColor = ``; //restablece todos en caso de que uno no tenga el mismo estilo que el resto
                        }
                    });
                });

                if (i > 0) {

                    // En caso de ir atras CAMBIA `FINALIZAR` POR `SIGUENTE`
                    if (i == questions.length - 1) {
                        nextButton.textContent = `Siguiente`;
                    }

                    i--;

                    for (var r = 0; r < radios.length; r++) {
                        if (radios[r].checked) { //indice [r] se mantiene en la coincidencia

                            radios[r].checked = false; // se desmarcan todos los del nuevo escenario

                            break;
                        }
                    }

                    console.log(questionValues);

                    console.log(`¡Anterior pregunta! Pregunta nº${i + 1}`);

                    respuesta4.style.display = `inline`;
                    opcionalLabel.style.display = `inline`;

                    pregunta.textContent = `${questions[i].pregunta}`

                    if (questions[i].respuesta.length == 4) {
                        respuesta1.textContent = `${questions[i].respuesta[0].texto_respuesta}`;
                        respuesta2.textContent = `${questions[i].respuesta[1].texto_respuesta}`;
                        respuesta3.textContent = `${questions[i].respuesta[2].texto_respuesta}`;
                        respuesta4.textContent = `${questions[i].respuesta[3].texto_respuesta}`;


                        //Asignar nuevos valores
                        var r1Value = questions[i].respuesta[0].valor;
                        var r2Value = questions[i].respuesta[1].valor;
                        var r3Value = questions[i].respuesta[2].valor;
                        var r4Value = questions[i].respuesta[3].valor;

                        // Metemos rValues en inputValues
                        respuesta_opcion1_input.value = r1Value;
                        respuesta_opcion2_input.value = r2Value;
                        respuesta_opcion3_input.value = r3Value;
                        respuesta_opcion4_input.value = r4Value;


                    } else {
                        respuesta1.textContent = `${questions[i].respuesta[0].texto_respuesta}`;
                        respuesta2.textContent = `${questions[i].respuesta[1].texto_respuesta}`;
                        respuesta3.textContent = `${questions[i].respuesta[2].texto_respuesta}`;

                        respuesta4.style.display = `none`; // Queda oculto span
                        opcionalLabel.style.display = `none`; // Queda oculto label > input?

                        //Asignar nuevos valores
                        var r1Value = questions[i].respuesta[0].valor;
                        var r2Value = questions[i].respuesta[1].valor;
                        var r3Value = questions[i].respuesta[2].valor;
                        var r4Value = 0;

                        // Metemos rValues en inputValues
                        respuesta_opcion1_input.value = r1Value;
                        respuesta_opcion2_input.value = r2Value;
                        respuesta_opcion3_input.value = r3Value;
                        respuesta_opcion4_input.value = r4Value;

                    }

                    console.log(`respuesta1 = ${r1Value}`);
                    console.log(`respuesta2 = ${r2Value}`);
                    console.log(`respuesta3 = ${r3Value}`);
                    console.log(`respuesta4 = ${r4Value}`);

                } else {

                    console.log(`No se puede ya estas en la primera pregunta`)
                }
            }



            //1. INICIALIZAR

            var pregunta = document.getElementById(`pregunta_HTML`);

            var respuesta1 = document.getElementById(`respuesta1`)
            var respuesta2 = document.getElementById(`respuesta2`)
            var respuesta3 = document.getElementById(`respuesta3`)
            var respuesta4 = document.getElementById(`respuesta4`)

            pregunta.textContent = `${questions[0].pregunta}`

            respuesta1.textContent = `${questions[0].respuesta[0].texto_respuesta}`
            respuesta2.textContent = `${questions[0].respuesta[1].texto_respuesta}`
            respuesta3.textContent = `${questions[0].respuesta[2].texto_respuesta}`
            respuesta4.textContent = `${questions[0].respuesta[3].texto_respuesta}`

            var opcionalLabel = document.getElementById(`opcional`);

            //2. ACTIVAR EVENTOS


            var nextButton = document.getElementById(`nextButton`);
            nextButton.addEventListener(`click`, nextQuestion)
            /* , pointRecolect(r1Value, r2Value, r3Value, r4Value) */
            var backButton = document.getElementById(`backButton`).addEventListener(`click`, backQuestion);





        /* showQuestion(i) */; //Creamos función showQuestion() par mostrar preguntas y currentQuestioIndex lleva el registro actual de la pregunta que se esta mostrando
        })
        .catch(error => console.error(`Error fetching questions: ${error}`)) // Lo mismo que el anterior, si hay algun error(error) lo mostramos en consola y luego lo almacenamos en objeto error
}/* ) */;


/* var backButton = document.getElementById(`backButton`).addEventListener(`click`, backQuestion, pointRecolect) */ /* Teoria de poner otra funcion que recoleta el valor */
/* var nextButton = document.getElementById(`nextButton`).addEventListener(`click`, nextQuestion, pointRecolect); */

/**
 * 1. INICIALIZAR CON EL JSON
 * 2. AddEventListener con boton siguente -> función siguente
 * 3. funcion siguente () {
 *
 *      guardar: q1Value = 'input[name="respuesta"]:checked'
 *
 *      let labelOpcional = document.getElementbyId(`opcional`);
 *      labelOpcional.style.display = `block`
 *
 *      nuevo_i = i++
 *
 *      innerHTML = questions[nuevo_i].pregunta
 *      questions[0].respuesta.forEach( (respuesta, nuevo_i) => {
 *          innerHTML = `${questions[nuevo_i].respuesta[i]}`
 *
 * })
 *
 *      if (questions[nuevo_i].respuesta[4].texto_respuesta = `undefined`) {
 *
 *          labelOpcional.style.display = `none`
 *      }
 *
 *      i = nuevo_i
 *
 * }
 *
 * var q1Value = 0;
 * var q2Value = 0;
 * ... bucle... obligatorio
 *
 * 4. pointRecolector() {
 *          var q1Value = parseInt(document.querySelector('input[name="respuesta"]:checked').value); //
 *
 * Siempre debe ser q1value el valor de la primera pregunta. COMO?
 * El q2 value el valor de la segunda pregunta...
 *
 * 1. Manera de checkear la question[i] que se hace
 * 2. i = qi
 *
 * questionsVarValues = {}
 *
 * for (var i = 0; questionValues < questions.length; i++) {
 *             questionValues[`q${i}`] = 0
 * }
 * console.log(questionValues);
 *
 * TENGO QUE HACER UNA ARRAY DE questionValues = {
 *                                                 q0: 2,
 *                                                 q1: 3;
 *                                                 q2: 5;
 *                                                 ...
 *                                               }
 * }
 *
 * EN EL CASO DE QUE DOS FUNCIONES FUNCIONEN A LA VEZ Y UNA RECOLECTA UN VALOR ANTERIOR QUE LA OTRA FUNCION TIENE LA FUNCION DE MODIFICAR
 * }
 */


/* LA CLAVE ES:

1. RECONOCER EL INDICE DE LA PREGUNTA [i]
2. Ajustar el checked al q{i} (del array questionValues) a la pregunta[i]
3. Asignar el valor del checked a la propiedad de questionValues qi correspondiente

    q3 = parseInt(document.querySelector('input[name="respuesta"]:checked').value); //Actual, DEBE COINCIDIR EL
    ENTORNO DE LOS IMPUTS CON EL DE LA PROPIEDAD q3

4. Y YA ESTA, ES BASICAMENTE RECONOCER EL ENTORNO [i], Y ASIGNAR EL checked value al q{i} correspondiente
*/

/* OTRA TAREA POR REALIZAR, QUITAR CHECKED CUANDO SE AVANCE Y GUARDAR EL CHECKED CUANDO SE ATRASE */

//1. Mantener el checked según la pregunta marcada
//2. Al dar siguiente desmarcar todos los inputs
//3. Al dar anterior que aparezca el input marcado (opcional)
//***** 3.1 COMO HACERLO?
//***** CASO NULL-> Checked vacio
//***** CASO numero 0 -> buscar 


/* TAREA SIN COMPLETAR, ASIGNAR rValues al inputValue  */ /* HECHO */

/* NULL A 0 */

/* 
        for (var n = 0; n < questionValues.length; n++) {
            if (questionValues === null) {
                questionValues[n] = 0;
            }
        }

*/