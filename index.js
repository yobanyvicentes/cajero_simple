// ------- operaciones que puede realizar el cajero -----------
// creo un array de strings con 3 elementos que son las operaciones que puede realizar un cliente en el cajero
const OPERATIONS = ["Consultar saldo", "Ingresar monto", "Retirar Monto"];


// ------- array con la lista de usuarios ---------
// creo un array de objetos, donde cada objeto tiene un nombre de usuario, un balance y una contraseña
let users = [
    {name: "Angie", balance: 100, pass: "user1"},
    {name: "Carolina", balance: 150, pass: "user2"},
    {name: "Sandra", balance: 200, pass: "user3" },
];


// ---- variables resumen de la transacción -------
const title = "Resumen de la transacción";
let dateStart = "";
let transaction = "";
let dateEnd = "";


// ------- buscar usuario y devolverlo --------
// creo una función que recorra la lista de usuarios, y que si encuentra un usuario con el nombre que recibe, llo devuelva al ejecutar la función.
const isUser = (name) => {
    let userValidator = "";
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (user.name === name) {
            userValidator = user;
            break;
        };
    };
    return userValidator;
};


// ---------- Hacer que ingrese un nombre de usuario valido --------
let userName = prompt("ingrese su nombre de usuario");
let userExist = isUser(userName);

while (!userExist) {
    userName = prompt("ingrese un nombre de usuario valido");
    userExist = isUser(userName);
};


// ---------- Hacer que ingrese la contraseña correcta -------------------
let pass = prompt("ingrese su constraseña");

while (userExist.pass !== pass) {
    pass = prompt("contraseña incorrecta, intente de nuevo");
    console.log(userExist.pass === pass);
};

dateStart = new Date();


// ---------- Solicitar una opción valida al usuario -------------
let action = prompt(`Bienvenido, ingrese el número de la acción que desea realizar: \n 1 ${OPERATIONS[0]} \n 2 ${OPERATIONS[1]} \n 3 ${OPERATIONS[2]}`);

while (action !== "1" && action !== "2" && action !== "3") {
    action = prompt(`ingrese el número de una opción valida: \n 1 ${OPERATIONS[0]} \n 2 ${OPERATIONS[1]} \n 3 ${OPERATIONS[2]}`);
};
action = parseInt(action);


// -------- Consultar saldo -----------
if (action === 1) {
    transaction = "Consultar saldo \n";
    alert(`su balance actual es de: ${userExist.balance} USD`);
};


// -------- Ingresar monto ------------
if (action === 2) {
    let amount = prompt("ingrese el monto a consignar");
    amount = parseInt(amount);

    while (typeof(amount) !== "number" || (userExist.balance + amount) > 990) {
        amount = prompt(
            `ingrese un monto valido a consignar. \nRecuerde que su cuenta tiene un tope de almacenamiento de 990 USD y su saldo actual es de ${userExist.balance} USD.`
        );
        amount = parseInt(amount);
    };

    transaction = "Consignar dinero \n";
    alert(`Ha ingresado ${amount} USD.\nSu nuevo balance es: ${userExist.balance + amount} USD.`);
};


// -------- Retirar monto -------------
if (action === 3) {
    let amount = prompt("ingrese el monto a retirar");
    amount = parseInt(amount);

    while (typeof(amount) !== "number" || (userExist.balance - amount) < 10) {
        amount = prompt(
            `ingrese un monto valido a retirar. \nRecuerde que su cuenta debe mantener un balance mínimo de 10 USD  y su saldo actual es de ${userExist.balance} USD.`
        );
        amount = parseInt(amount);
    };

    transaction = "Retirar dinero \n";
    alert(`Ha retirado ${amount} USD.\nSu nuevo saldo es: ${userExist.balance - amount} USD.`);
};


// -------- Agradecer y despedir al usuario --------
alert("Gracias por usar nuestros servicios.");
dateEnd = new Date();


// ------ Crear los elementos HTML del resumen ------
let divSummary = document.createElement("div");
const h1Title = document.createElement("h1");
const pUser = document.createElement("p");
const pDateStart = document.createElement("p");
const pTransaction = document.createElement("p");
const pDateEnd = document.createElement("p");


// ------ Poner el resultado a las variables resumen ------
h1Title.textContent = title;
pUser.textContent = `Usuario: ${userExist.name}`;
pDateStart.textContent = `Fecha y hora de ingreso: ${dateStart}`;
pTransaction.textContent = `Transacción realizada: ${transaction}`;
pDateEnd.textContent = `Fecha y hora finalización:  ${dateEnd}`;


// -------- Presentar el resumen de la transacción -------------
divSummary.appendChild(h1Title);
divSummary.appendChild(pUser);
divSummary.appendChild(pDateStart);
divSummary.appendChild(pTransaction);
divSummary.appendChild(pDateEnd);


// ----- Agregar el Summary al Body -----------------------
document.body.appendChild(divSummary);
