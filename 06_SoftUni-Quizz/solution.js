function solve() {
    let buttons = document.getElementsByTagName('button');

    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click', clickedBtn);
    });
    let index = 0;
    let arr = [];
    let hidden = document.getElementsByClassName('hidden');

    function clickedBtn(element) {
        let pressedButton = element.target;
        let currentSection = pressedButton.parentNode;
        // console.log(currentSection);
        let currentInputs = currentSection.getElementsByTagName('input');

        // console.log(pressedButton.textContent);
        for (let i = 0; i < currentInputs.length; i++) {
            if (currentInputs[i].checked && pressedButton.textContent === 'Next question') {
                // console.log(currentInputs[i].value);
                arr.push(currentInputs[i].value);
                hidden[index].style.display = 'block';
                index++;
            } else if (currentInputs[i].checked && pressedButton.textContent === 'Get the results') {
                arr.push(currentInputs[i].value);
                let countCorrectAnswers = 0;
                // console.log('time to get results');
                for (let i = 0; i <= arr.length; i++) {
                    let current = arr[i];
                    if (current === '2013' || current === 'Pesho' || current === 'Nakov') {
                    countCorrectAnswers++;
                    }
                }

                if (countCorrectAnswers === 3){
                    document.getElementById('result').textContent = 'You are recognized as top SoftUni fan!';
                } else {
                    document.getElementById('result').textContent = `You have ${countCorrectAnswers} right answers`;
                }

            }
        }
    }
}