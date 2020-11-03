
const powitanie = () => {
    console.log("Hello-FrondEnd__developers")
};

window.ononline = (event) => {
    console.log("You are now connected to the network.");
};

window.onoffline = (event) => {
    console.log("The network connection has been lost.");
};


window.addEventListener("load", function () {
    console.log("strona się załadowała");
});

const init = () => {
    powitanie();
};

init();


const addElement = (event, node, txt, attr, value) => {
    event.preventDefault();
    const elementNode = document.createElement(node);
    if (txt) {
        const text = document.createTextNode(txt);
        elementNode.appendChild(text);
    }
    elementNode.setAttribute(attr, value)
    document.querySelector(".content").appendChild(elementNode);
    clearForm = (addForm)
};

const serchElements = (event) => {
    event.preventDefault();
    
}


const addForm = document.querySelector(".form--add")
addForm.addEventListener("submit", (event) => addElement(
    event,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
))


const formSerch = document.querySelector(".form__input--serch")
formSerch.addEventListener("submit", serchElements)