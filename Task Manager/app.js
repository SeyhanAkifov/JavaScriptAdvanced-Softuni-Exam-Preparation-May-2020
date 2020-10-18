function solve() {

    let colorElements = document.querySelectorAll('section ');

    let orangeElement = colorElements[1].getElementsByTagName('div')[1];
    let yellowElement = colorElements[2].getElementsByTagName('div')[1];
    let greenElement = colorElements[3].getElementsByTagName('div')[1];


    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let addButton = document.getElementById('add');


    addButton.addEventListener('click', (e) => {

        e.preventDefault()

        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.innerHTML = task.value;
        let p1Element = document.createElement('p')
        p1Element.innerHTML = `Description: ${description.value}`;
        let p2Element = document.createElement('p')
        p2Element.innerHTML = `Due Date: ${date.value}`;
        let divElement = document.createElement('div')
        divElement.setAttribute('class', 'flex');
        let startElement = document.createElement('button')
        startElement.setAttribute('class', 'green');
        startElement.innerHTML = 'Start';
        let deleteElement = document.createElement('button')
        deleteElement.setAttribute('class', 'red');
        deleteElement.innerHTML = 'Delete';


        articleElement.appendChild(h3Element);
        articleElement.appendChild(p1Element);
        articleElement.appendChild(p2Element);
        divElement.appendChild(startElement);
        divElement.appendChild(deleteElement);
        articleElement.appendChild(divElement);


        orangeElement.appendChild(articleElement);

        startElement.addEventListener('click', (event) => {


            let articleElement1 = event.target.parentNode.parentNode;
            orangeElement.removeChild(event.target.parentNode.parentNode);

            let buttons = articleElement.getElementsByTagName('button');
            buttons[0].setAttribute('class', 'red');
            buttons[0].innerHTML = 'Delete';
            buttons[1].setAttribute('class', 'orange');
            buttons[1].innerHTML = 'Finish';

            yellowElement.appendChild(articleElement1);

            buttons[0].addEventListener('click', (event) => {
                yellowElement.removeChild(event.target.parentNode.parentNode);
            })

            buttons[1].addEventListener('click', (event) => {

                let articleElement2 = event.target.parentNode.parentNode;
                yellowElement.removeChild(event.target.parentNode.parentNode);

                let buttons = articleElement2.getElementsByTagName('div')[0];
                articleElement2.removeChild(buttons);

                greenElement.appendChild(articleElement2);

            })

        })
        deleteElement.addEventListener('click', (event) => {

            orangeElement.removeChild(event.target.parentNode.parentNode);

        });


        task.value = "";
        description.value = "";
        date.value = "";





    });


   
};