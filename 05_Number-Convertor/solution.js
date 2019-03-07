function solve() {
    let menuTo = document.getElementById('selectMenuTo');
    let firstOption = menuTo.children[0];
    firstOption.value = 'Binary';
    firstOption.textContent = 'Binary';
    // firstOption.innerHTML = 'Binary';
    let secondOption = document.createElement('option');
    secondOption.value = 'hexadecimal';
    secondOption.textContent = 'hexadecimal';
    menuTo.appendChild(secondOption);

    // console.log(input);
    let button = document.getElementsByTagName('button')[0];
    // console.log(button);
    button.addEventListener('click', function () {
        // console.log(inputValue);
        let inputValue = document.getElementById('menus').children[1].value;

        if (inputValue) {
            let result = document.getElementById('result');

            let selectedOption = menuTo.options[menuTo.selectedIndex].value;
            if (selectedOption === 'Binary') {
                // console.log(menuTo.children[1].value);
                // console.log(inputValue);
                let decimalValue = (+inputValue).toString(2);
                // console.log(decimalValue);
                result.value = decimalValue;

            } else if (selectedOption === 'hexadecimal') {
                let hexadeicmalValue = (+inputValue).toString(16).toUpperCase();
                result.value = hexadeicmalValue;
            }
        }

    });
}