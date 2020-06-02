import express, { request } from 'express';

const app = express();

const users = [
    "Thiago",
    "João",
    "Maria",
    "Ana"
];

app.get("/users", (request, response) => {
    console.log("Listagem de usuários");

    response.json(users);
});

app.get("/users/:id", (request, response) => {

    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);

})

app.post("/users", (request, response) => {
    const user = {
        name: "Thiago",
        email: "1234@email.com.br"
    }; 
    return response.json(user);
});

app.listen(3333);