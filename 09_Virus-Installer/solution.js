function solve() {
    let buttons = document.getElementById('buttons').children;
    let content = document.getElementById('content');
    // console.log(buttons);
    let index = 1;

    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click', clickedBtn)
    });
    let firstStep = document.getElementById('firstStep');
    let secondStep = document.getElementById('secondStep');
    let thirdStep = document.getElementById('thirdStep');

    function clickedBtn(btn) {
        if (btn.target.innerText === 'Next') {
            if (index === 1) {
                // let firstStep = document.getElementById('firstStep');

                console.log('firstDiv');
                content.style.backgroundImage = "none";
                firstStep.style.display = 'block';
                index++;

            } else if (index === 2 && firstStep.querySelectorAll('input')[0].checked ) {

                firstStep.style.display = 'none';
                secondStep.style.display = 'block';
                let content = document.getElementById('content');
                console.log('secondDiv');
                content.style.backgroundImage = "none";
                secondStep.style.display = 'block';
                index++;
                buttons[0].style.visibility = 'hidden';

                setTimeout(function () {
                    buttons[0].style.visibility = 'visible';
                }, 3000);
            } else if (index === 3){
                thirdStep.style.display = 'block';
                secondStep.style.display = 'none';
                console.log(buttons[0]);
                buttons[1].textContent = 'Finish';
                buttons[0].style.visibility = 'hidden';
            }

        } else if (btn.target.innerText === 'Cancel' || btn.target.innerText === 'Finish') {
            // let main = document.getElementById('main');
            //             // main.style.visibility = "hidden";
            content.style.visibility = 'hidden';
            document.getElementsByTagName('h1')[0].style.visibility = 'hidden';
            buttons[1].style.visibility = 'hidden';
            document.getElementById('exercise').style.visibility = 'hidden';
        }
    }
}