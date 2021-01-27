const burgerButton = document.querySelector('#burger-button');
const burgerInput = document.querySelector('#burger-input');
const devourButton = document.querySelectorAll('.devour-button');

burgerButton.addEventListener('click', (event) => {

    let newBurger = {burger_name: burgerInput.value};

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
           
        let route = `api/burgers/${button.dataset.id}`;
        console.log(route)
        fetch(route, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({devoured: true})
        }).then((res) => {
            console.log(res);
        });
    });
});

