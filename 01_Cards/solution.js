function solve() {

    let arrayForLeftCards = [];
    let arrayForRightCards = [];
    let leftResult = '';
    let rightResult = '';
    let history = document.getElementById('history');

    Array.from(document.getElementsByTagName('img')).forEach((img) => {
        img.addEventListener('click', clickImg)
    });

    function clickImg(element) {

        element = element.target;
        element.src = "images/whiteCard.jpg";
        let currentCardName = element.getAttribute('name');

        element.removeEventListener('click', clickImg);

        if (element.parentElement.getAttribute('id') == 'player1Div') {
            leftResult = document.getElementById("result").children[0];
            // console.log(img);
            arrayForLeftCards.push(element);
            // console.log(leftResult);
            leftResult.textContent = `${currentCardName}`;
        } else if (element.parentElement.getAttribute('id') == 'player2Div') {
            rightResult = document.getElementById("result").children[2];
            arrayForRightCards.push(element);
            rightResult.textContent = `${currentCardName}`;
        }

        if (arrayForLeftCards.length > 0 && arrayForRightCards.length > 0) {
            let currentLeftCard = arrayForLeftCards[arrayForLeftCards.length - 1];
            let currentRightCard = arrayForRightCards[arrayForRightCards.length - 1];
            // console.log(currentLeftCard);
            // console.log(currentRightCard);
            if (parseInt(currentLeftCard.getAttribute('name')) > parseInt(currentRightCard.getAttribute('name'))) {
                currentLeftCard.style.border = '2px solid green';
                currentRightCard.style.border = '2px solid darkred';
            } else if (parseInt(currentLeftCard.getAttribute('name')) < parseInt(currentRightCard.getAttribute('name'))) {
                currentRightCard.style.border = '2px solid green';
                currentLeftCard.style.border = '2px solid darkred';
            }
        }

        if ((arrayForLeftCards.length > 0 && arrayForRightCards.length > 0)) {

            history.innerHTML += `[${leftResult.textContent} vs ${rightResult.textContent}] `;

            leftResult.innerHTML = '';
            rightResult.innerHTML = '';
            arrayForRightCards = [];
            arrayForLeftCards = [];
        }
    }


    // console.log(rightResult);
}