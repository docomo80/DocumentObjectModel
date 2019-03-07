function solve() {
    let chatChronology = '';
    document.getElementById('exercise').children[1].addEventListener("click", function () {
        let valueOfMe = document.getElementById('exercise').children[0].value;

        if (valueOfMe.length ){
            let divMe = document.createElement('div');
            let spanMe = document.createElement('span');
            let paragraphMe = document.createElement('p');
            paragraphMe.innerHTML = valueOfMe;
            spanMe.innerHTML = 'Me';
            // console.log(valueOfMe);

            chatChronology = document.getElementById('chatChronology');

            divMe.appendChild(spanMe);
            divMe.appendChild(paragraphMe);

            // divMe.children[0].style.display = 'block';
            divMe.style.textAlign = 'left';
            // divMe.children[1].style.textAlign = 'left';
            chatChronology.appendChild(divMe);

            document.getElementById('exercise').children[0].value = '';
        }

    });

    document.getElementById('exercise').children[4].addEventListener("click", function () {
        let valueOfPesho = document.getElementById('exercise').children[3].value;

        if (valueOfPesho){
            let divPesho = document.createElement('div');
            let spanPesho = document.createElement('span');
            let paragraphPesho = document.createElement('p');
            paragraphPesho.innerHTML = valueOfPesho;
            spanPesho.innerHTML = 'Pesho';
            // console.log(paragraphPesho);

            chatChronology = document.getElementById('chatChronology');
            divPesho.appendChild(spanPesho);
            divPesho.appendChild(paragraphPesho);
            // divPesho.children[0].style.display = 'block';
            // divPesho.children[0].style.textAlign = 'right';
            divPesho.style.textAlign = 'right';
            chatChronology.appendChild(divPesho);

            document.getElementById('exercise').children[3].value = '';
        }
    });
}