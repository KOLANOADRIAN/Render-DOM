
const powitanie = () => {
    console.log("Hello-FrondEnd__developers")
};

window.ononline = (event) => {
    console.log("You are now connected to the network.");
};

window.onoffline = (event) => {
    console.log("The network connection has been lost.");
  };


  window.addEventListener("load", function(){
    console.log("strona się załadowała");
});

const init = () => {
    powitanie();
};

init ();


const addElement = (event) => {
    event.preventDefault()
    console.log("submit")
    
}
const addForm = document.querySelector(".form--add")
addForm.addEventListener("submit", addElement)
