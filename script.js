let inputText = document.getElementById('inputText');
let buttonAdd = document.getElementById('buttonAdd');
let buttonClear = document.getElementById('buttonClear');
let pgContainer = document.getElementById('pgContainer');


buttonAdd.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    pgContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";



    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';

    })

    paragraph.addEventListener('dblclick', function () {
        pgContainer.removeChild(paragraph);

    })
    buttonClear.addEventListener('click', function () {
        pgContainer.removeChild(paragraph);

    })
})


