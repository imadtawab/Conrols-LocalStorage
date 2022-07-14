// < > ,
let inputText = document.querySelector("#inputText") ,
    controls = document.querySelector(".controls") ,
    results = document.querySelector(".results") 
inputText.onsubmit=(eo) => {
    eo.previousDefault()
}
controls.onclick = (eo) => {
    if(eo.target.classList == "check-item") {
        checkItem()
    } else if(eo.target.classList == "add-item") {
        addItem()
    } else if(eo.target.classList == "delete-item") {
        deleteItem()
    } else if(eo.target.classList == "show-item") {
        showItem()
    }
}
function MessageInputEmpty() {
        results.innerText = "Input Cant Be Empty"
}
function checkItem() {
    if(inputText.value !== ""){
        if (localStorage.getItem(inputText.value)) {
            results.innerHTML = `Found Local Item Called <span>"${inputText.value}"</span>`
        } else {
            results.innerHTML = `No Local Storage Item With The Name <span>"${inputText.value}"</span>`
        }
    } else {
        MessageInputEmpty()
    }
}
function addItem() {
    if (inputText.value !== "") {
        localStorage.setItem(inputText.value ,inputText.value)
        results.innerHTML = `Local Storage Item <span>"${inputText.value}"</span> Added`
        inputText.value = ""
    } else {
        MessageInputEmpty()
    }
}
function deleteItem() {
    if(inputText.value !== ""){
        if (localStorage.getItem(inputText.value)) {
            localStorage.removeItem(inputText.value)
            results.innerHTML = `Local Storage Item <span>"${inputText.value}"</span> Deleted`
            inputText.value = ""
        } else {
            results.innerHTML = `No Local Storage Item With The Name <span>"${inputText.value}"</span>`
        }
        
    } else {
        MessageInputEmpty()
    }
}
function showItem() {
    if(localStorage.length !== 0){
        results.innerHTML = ""
       for (let i = 0; i < localStorage.length; i++) {
           
        Object.entries(localStorage)[i][0]
        
        results.innerHTML += ` <span class="key">${Object.entries(localStorage)[i][0]} </span> `

       }
    } else {
        results.innerHTML = "Local Storage Is Empty"
    }
}