const burgerButton = document.querySelector('#burger-button');
const burgerInput = document.querySelector('#burger-input');

burgerButton.addEventListener('click', (event) => {
    let newBurger = burgerInput.value;
    fetch('api/burgers', {
        method: "POST",
        body: JSON.stringify({ burger_name: newBurger }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => {
            console.log(response);
        });
});