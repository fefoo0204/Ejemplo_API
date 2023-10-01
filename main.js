document.addEventListener("DOMContentLoaded", function() {
    const jokeText = document.getElementById("joke-text");
    const getJokeButton = document.getElementById("get-joke");

    // URL de la API de Chuck Norris Jokes
    const apiUrl = "https://api.chucknorris.io/jokes/random";

    // Función para obtener y mostrar una broma de Chuck Norris
    function getChuckNorrisJoke() {
        // Realizar una solicitud GET a la API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Mostrar la broma en la página
                jokeText.textContent = data.value;
            })
            .catch(error => {
                console.error("Error al obtener la broma:", error);
            });
    }

    // Agregar un evento clic al botón para obtener una broma
    getJokeButton.addEventListener("click", getChuckNorrisJoke);

    // Obtener una broma al cargar la página
    getChuckNorrisJoke();
});

