

const inputElem = document.querySelector('#input-name')
const form = document.querySelector('#form')
const listElem = document.querySelector('#to-do-list')

const toDoArray = JSON.parse(localStorage.getItem('myKey')) || [];

function updateList() {
    listElem.innerHTML = '';

      for(const key in toDoArray) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = toDoArray[key]
    const button = document.createElement('button')
    button.innerText = 'delete'
    button.setAttribute('key',key)
    button.classList.add('delete')
    
    li.appendChild(span)
    li.appendChild(button)
    listElem.appendChild(li)
}
localStorage.setItem('myKey',JSON.stringify(toDoArray));


}

function addList(task) {

     if(task === '' ) return;
    
    toDoArray.push(task);

    
    updateList();
    inputElem.value = '';

    inputElem.focus()
    
}

function deleteFromList(key) {
    toDoArray.splice((key),1);

    updateList();
    inputElem.value = '';
    inputElem.focus()
}

form.addEventListener('submit',e =>{
    e.preventDefault();
     addList(inputElem.value)
})
 
document.addEventListener('click', e=>{
    const el = e.target;
    if (el.classList.contains('delete')) {
        deleteFromList(el.getAttribute('key'))
    }
})

updateList();





