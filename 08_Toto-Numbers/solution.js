function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', clickedBtn);

    function clickedBtn() {
        let input = document.getElementsByTagName('input')[0];
        // console.log(input.value);
        let inputValue = input.value;
        let checkNumbersCount = 0;
        let splittedInput = inputValue.split(' ');
        // console.log(splittedInput);

        for (let i = 0; i < splittedInput.length; i++) {
            // console.log(splittedInput[i]);
            if (splittedInput[i] >= 1 && splittedInput[i] <= 49){
                checkNumbersCount++;
            }
        }

        // console.log(checkNumbersCount);
        // console.log(splittedInput.length);
        let allNumbers = document.getElementById('allNumbers');
        if (+checkNumbersCount === 6 && +splittedInput.length === 6){
            for (let i = 1; i <= 49; i++) {

                let currentDiv = document.createElement('div');
                currentDiv.classList.add('numbers');

                for (let j = 0; j < splittedInput.length; j++) {
                   if (i === +splittedInput[j]){
                       // console.log(i);
                       currentDiv.style.backgroundColor = "orange";
                   }
                }

                currentDiv.innerText = i;
                allNumbers.appendChild(currentDiv);
            }

            document.getElementsByTagName('button')[0].disabled = true;
            input.disabled = true;
        }
    }
}