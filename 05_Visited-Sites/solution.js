function solve() {
    let regex = "[\\d]+";
    let input = "";
    let number = 0;

    window.onclick = e => {
        input = e.target.innerText;
        // console.log(input);
        switch (input) {
            case "SoftUni":
                let firstDiv = document.getElementById("exercise").children.item(0);
                let span = firstDiv.children.item(1);
                // console.log(span.innerHTML);
                number = span.innerHTML.match(regex)[0];
                // console.log(number);
                span.innerHTML = `Visited: ${parseInt(number) + 1} times`;
                break;
            case 'Google':
                let secondDiv = document.getElementById("exercise").children.item(1);
                let secondSpan = secondDiv.children.item(1);
                // console.log(secondSpan.innerHTML);
                number = secondSpan.innerHTML.match(regex)[0];
                // console.log(number);
                secondSpan.innerHTML = `Visited: ${parseInt(number) + 1} times`;
                break;
            case 'YouTube':
                let thirdDiv = document.getElementById("exercise").children.item(2);
                let thirdSpan = thirdDiv.children.item(1);
                // console.log(secondSpan.innerHTML);
                number = thirdSpan.innerHTML.match(regex)[0];
                // console.log(number);
                thirdSpan.innerHTML = `Visited: ${parseInt(number) + 1} times`;
                break;
            case 'Wikipedia':
                let fourtDiv = document.getElementById("exercise").children.item(3);
                let fourtSpan = fourtDiv.children.item(1);
                // console.log(secondSpan.innerHTML);
                number = fourtSpan.innerHTML.match(regex)[0];
                // console.log(number);
                fourtSpan.innerHTML = `Visited: ${parseInt(number) + 1} times`;
                break;
            case 'Gmail':
                let fifthDiv = document.getElementById("exercise").children.item(4);
                let fifthSpan = fifthDiv.children.item(1);
                // console.log(secondSpan.innerHTML);
                number = fifthSpan.innerHTML.match(regex)[0];
                // console.log(number);
                fifthSpan.innerHTML = `Visited: ${parseInt(number) + 1} times`;
                break;
            case 'Stackoverflow':
                let sixthDiv = document.getElementById("exercise").children.item(5);
                let sixthSpan = sixthDiv.children.item(1);
                // console.log(secondSpan.innerHTML);
                number = sixthSpan.innerHTML.match(regex)[0];
                // console.log(number);
                sixthSpan.innerHTML = `Visited: ${parseInt(number) + 1} times`;
                break;

        }
    };
}