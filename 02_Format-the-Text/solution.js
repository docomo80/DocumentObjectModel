function solve() {
    let createInput = document.getElementById('input');

    let createInputValue = createInput.innerHTML;

    let createOutput = document.getElementById("output");

    let arr = createInputValue.split(".");

    let createParagraph = document.createElement('p');

    for (let i = 0; i < arr.length; i++) {

        console.log(arr.length);
        if ((i % 3 === 0 && i > 0) || i === arr.length - 1) {
            createOutput.appendChild(createParagraph);

            createParagraph = document.createElement('p');
        }

        createParagraph.innerText += arr[i] + ".";

    }
}