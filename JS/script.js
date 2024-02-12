const jsonurl = 'json.json'



// Llamamos archivo JSON
function fetchQuestions() {
    fetch(jsonurl)
    .then(response => response.json())
    .then(data => {
        questions = data; // Esto es lo importante
        showQuestion(currentQuestionIndex);
    })
    .catch(error => console.error('Error fetching questions:', error));
};


jsonurl = [
    {
        "pregunta": "¿Tu empresa apoya activamente a empresas lideradas por mujeres?",
        "respuesta": [
            {
                "texto_respuesta": "Sí, nuestra empresa tiene políticas y programas específicos para apoyar a empresas lideradas por mujeres, promoviendo la igualdad de género.",
                "valor": 5
            },
            {
                "texto_respuesta": "Estamos en proceso de explorar formas de apoyar a empresas lideradas por mujeres, pero aún no hemos implementado programas concretos al respecto.",
                "valor": 3
            },
            {
                "texto_respuesta": "No, nuestra empresa no tiene políticas o programas específicos para apoyar a empresas lideradas por mujeres en este momento.",
                "valor": 2
            },
            {
                "texto_respuesta": "No estoy seguro/a de la política de la empresa en este tema.",
                "valor": 0
            }
        ]

}]

var pregunta = document.getElementById(`pregunta_HTML`);

// Mostrar preguntas (recorrer e insertar dentro de <b id="pregunta_HTML") 
jsonurl[i].forEach(function(pregunta) {
    pregunta.innerHTML = `${jsonurl.pregunta}`
});



