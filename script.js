
const powitanie = () => {
    console.log("Hello-FrondEnd__developers")
};

window.addEventListener("load", function () {
    console.log("strona się załadowała");
});

const init = () => {
    powitanie();
};

init();


const addForm = document.querySelector(".form--add")
addForm.addEventListener("submit", (event) => addElement(
    event,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
));


const addElement = (event, node, txt, attr, value) => {
    event.preventDefault();
    const elementNode = document.createElement(node);
    if (txt) {
        const text = document.createTextNode(txt);
        elementNode.appendChild(text);
    }
    if (attr) {
        elementNode.setAttribute(attr, value)
    }
    document.querySelector(".content").appendChild(elementNode);
};

const serchForm = document.querySelector(".form--search")
serchForm.addEventListener("submit", (event) => serchElements(event, serchForm.elements["serching-element"].value));


const serchElements = (event, nameElement) => {
    event.preventDefault();
    const infoElement = document.querySelector(".result")
    const elements = document.querySelectorAll(nameElement)
    console.log(elements);
    if (elements.length) {
        infoElement.innerHTML = `<p class="result__info">W tym dokumencie znalazłem ${elements.length}elenentów ${nameElement}</p>`;
    schowInfo();
    } else  { infoElement.innerHTML = `<p class="result__info">W tym dokumencie znalazłem NEIE ZNALAZŁEM elenentów ${nameElement}</p>`;
    return;
}
};




const schowInfo = () => {console.log("funkcja show info działa") }




// .....................



