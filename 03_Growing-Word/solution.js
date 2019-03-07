function solve() {
    let click = 1;
    let color = "";
    let fonSize = 1;
    document.querySelector("button")
        .addEventListener('click', function () {
            let getElementMain = document.getElementById("main").querySelector("p");
            console.log(getElementMain);
            for (let i = 0; i < 1; i++) {
                if (click === 1) {
                    color = "blue";
                } else if (click === 2) {
                    color = "green";
                } else if (click === 3) {
                    color = "red";
                }
                getElementMain.setAttribute('style', 'color:' + color);
                getElementMain.style.fontSize = fonSize * 2 + "px";

                click++;
                fonSize ++;

                if (click % 4 === 0) {
                    click = 1;
                }
            }
        })
}