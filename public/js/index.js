const burgerButton = document.querySelector('#burger-button');
const burgerInput = document.querySelector('#burger-input');
const devourButton = document.querySelectorAll('.devour-button');

burgerButton.addEventListener('click', (event) => {

    let newBurger = {
        burger_name: burgerInput.value,
        devoured: false
    };

    console.log(newBurger);
    fetch('api/burgers/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBurger),
    }).then(response => {
        response = response.json();
        console.log(response)
    })
});

devourButton.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log('clicked devour button');

        fetch('api/burgers', {
            method: "PUT",
            Headers: { "Content-Type": "application/json" }
        })

    });
});

