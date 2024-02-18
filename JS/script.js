


/*
* Partes de la llamada de datos de un archivo JSON externo
* 1. function fetchQuestions() { Hacemos la función que nos llama a los datos }
* 2.  fetch (ruta del json) usamos fetch para obtener los datos del json (solicitud del servidor para obtener response)
* 3.  .then usamos .then para manejar la respuesta (response: es la respuesta recibida del servidor) 
*/


var i = 0;

document.addEventListener( "DOMContentLoaded", function fetchQuestions() {
    fetch (`../JSON/json.json`)
    .then(response => response.json()) //response (respuesta servidor) + .json() (convertidor en objeto de json) <= response (lo metemos en este response) 
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
        var questionValues = {};
        for (var n = 0; n < questions.length; n++) {
            questionValues[`q${n}`] = 0
        }
            console.log(questionValues);



        console.log(`¡Pregunta actual!: Pregunta nº${i+1}`)

        var r1Value = questions[0].respuesta[0].valor;
        var r2Value = questions[0].respuesta[1].valor;
        var r3Value = questions[0].respuesta[2].valor;
        var r4Value = questions[0].respuesta[3].valor;

        console.log(`respuesta1 = ${r1Value}`);
        console.log(`respuesta1 = ${r2Value}`);
        console.log(`respuesta1 = ${r3Value}`);
        console.log(`respuesta1 = ${r4Value}`);
        

        function nextQuestion() {
            if (i < questions.length - 1) { // 29 ESTA INCLUIDO YA QUE NOS DARA EL ELSE SABES 
                
                i++;

                console.log(`¡Siguente pregunta! Pregunta nº${i+1}`)
    
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
            if(i > 0) { 
                
                i--;

                console.log(`¡Anterior pregunta! Pregunta nº${i+1}`);

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

        
        var nextButton = document.getElementById(`nextButton`).addEventListener(`click`, nextQuestion);/* , pointRecolect(r1Value, r2Value, r3Value, r4Value) */
        var backButton = document.getElementById(`backButton`).addEventListener(`click`, backQuestion);





        /* showQuestion(i) */; //Creamos función showQuestion() par mostrar preguntas y currentQuestioIndex lleva el registro actual de la pregunta que se esta mostrando
    })
    .catch(error => console.error(`Error fetching questions: ${error}`)) // Lo mismo que el anterior, si hay algun error(error) lo mostramos en consola y luego lo almacenamos en objeto error
});
 

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