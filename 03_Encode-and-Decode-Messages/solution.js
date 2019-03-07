function solve() {
    let firstDiv = document.getElementById('exercise').children[0];
    let secondDiv = document.getElementById('exercise').children[1];
    let encodeChars = '';
    let decodedChars = '';

// add listener to Button
    firstDiv.children[3].addEventListener("click", function () {
        // console.log(firstDiv.children[3]);
        let firstTextArea = firstDiv.children[1];
        let textAreaValue = firstTextArea.value;
        // console.log(textAreaValue);
        for (let i = 0; i < textAreaValue.length; i++) {
            // console.log(textAreaValue.charCodeAt(i));
            let temporaryValue = textAreaValue.charCodeAt(i);
            encodeChars += String.fromCharCode(temporaryValue + 1);
            // console.log(textAreaValue.length);
        }
        secondDiv.children[1].value = encodeChars;
        firstDiv.children[1].value = '';
        // console.log(encodeChars);
        // secondDiv.children[1].value = encodeChars.toString().replace(/,/g,'');
        // secondDiv.children[1].value = encodeChars.join('');

        // console.log(encodeChars);

    });

    secondDiv.children[3].addEventListener("click", function () {
        // let removedCommasFromEncodedArray = encodeChars.join('');

        for (let i = 0; i < encodeChars.length; i++) {
            let temporaryValue = encodeChars.charCodeAt(i);
            decodedChars += String.fromCharCode(temporaryValue - 1);
        }
        // console.log(decodedChars);

        // let removedCommasFromDecodedArray = decodedChars.join('');
        // console.log(removedCommasFromDecodedArray);

        // secondDiv.children[1].value = '';
        secondDiv.children[1].value = decodedChars;
        encodeChars = '';
        decodedChars = '';
    });
}