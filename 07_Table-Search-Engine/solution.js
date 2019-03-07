function solve() {
    let trList = document.querySelectorAll('tbody tr td');
    console.log(trList);

    document.getElementsByTagName('button')[0].addEventListener('click', clickedBtn);

    let arr = [];

    function clickedBtn() {
        let input = document.getElementsByTagName('input')[0];
        let inputValue = input.value;
        // console.log(inputValue);
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('select');
        }

        for (let i = 0; i < trList.length; i++) {
            // console.log(trList[i].innerHTML);
            let currentValue = trList[i].innerHTML;
            let foundMatching = currentValue.toLowerCase().indexOf(inputValue.toLowerCase());
            if (!(+foundMatching === -1)) {
                // console.log(foundMatching);
                let currentParentNode = trList[i].parentElement;
                // let tdListToChange = currentParentNode.children;

                currentParentNode.classList.add('select');
                arr.push(currentParentNode);
            }
        }
        // .indexOf(inputValue)
        document.getElementsByTagName('input')[0].value = '';
    }

}