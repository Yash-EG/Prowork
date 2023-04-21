let addToDoButton = document.getElementById('addToDo');
let toDoCointainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let idCount1 = 0
let idCount2 = 0

addToDoButton.addEventListener('click', function(){
    // My Row
    
    idCount1++
    idCount2++

    var myId1 = `E${idCount1}`
    var myId2 = `EI${idCount2}`

    var tr = document.createElement('tr')
    tr.classList.add('odd:bg-[#ead7f783]')
    tr.classList.add('even:bg-[#d7e5f729]')
    // tr.setAttribute('class', "odd:bg-[#ead7f783] even:bg-[#d7e5f729]")
    tr.setAttribute('id',myId1)


    // DATA
    let data = document.createElement('td')
    data.classList.add('text-left')
    data.classList.add('p-4')
    data.classList.add('text-xl')
    data.innerText = inputField.value

    let data2 = document.createElement('td')
    data2.classList.add('text-center')
    data2.classList.add('p-4')
    data2.classList.add('text-xl')
    data2.setAttribute('id',myId2)

    var myButtons = `
        <button class="pl-2" onclick="completed(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>                                 
        </button>
    `

    data2.innerHTML = myButtons
    // data2.innerText = myButtons

    tr.appendChild(data)
    tr.appendChild(data2)



    // tr.innerText = inputField.value;
    toDoCointainer.appendChild(tr);
})

function completed(element){
    let taskId = element.parentNode.id
    let ele = document.getElementById(taskId)

    taskId = ele.parentNode.id
    ele = document.getElementById(taskId)
    ele.style.display = 'none'
}