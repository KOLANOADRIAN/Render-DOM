
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

// .....

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
// ....
const serchForm = document.querySelector(".form--search")
serchForm.addEventListener("submit", (event) => serchElements(event, serchForm.elements["serching-element"].value));


const serchElements = (event, nameElement) => {
    event.preventDefault();
    const infoElement = document.querySelector(".result")
    infoElement.textContent = '';
    const elements = document.querySelectorAll(nameElement)
    console.log(elements);
    if (elements.length) {
        infoElement.innerHTML = `<h1 class="result__info">W tym dokumencie znalazłem ${elements.length} elenentów <strong>${nameElement}</strong></h1>`;
    schowInfo(elements, infoElement);
    } else  { infoElement.innerHTML = `<h1 class="result__info">W tym dokumencie Nie Znalazłem elenentów <strong>${nameElement}</strong></h1>`;
    return;
}
};




const schowInfo = (elements, infoElement) => {
console.log("funkcja show info działa"),
console.log(elements) 
elements.forEach(element => {
    const iteam = document.createElement("div");
    iteam.className = "element-info";
    iteam.innerHTML = `
    <div>${element.nodeName}</div>
    <div> klasy: ${element.className}</div>
    <div> Wysokość Elementu (offsetHeight)${element.offsetHeight}</div>
    <div> Szerokość Elementu (offsetWidth)${element.offsetWidth}</div>
    <div> Odległość Elementu od lewej krawędzi (offsetLeft) ${element.offsetLeft}</div>
    <div> Odległość Elementu od góry (offsetTop) ${element.offsetTop}</div>
    <div> Liczba elemętów dzieci (childElementCount)${element.childElementCount}</div>
    `;
    infoElement.appendChild(iteam);
});
};




// .....................



