function register() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let regex = "(.+)@(.+).(com|bg)";
    let test = email.value.search(regex);
    // console.log(test);


    // function f() {
        // console.log("Success");
       
        
    // }
    let result = document.getElementById("result");
    let h1 = document.createElement('h1');

    if (username.value.length != '' && password.value.length != '' && test === 0) {
        // setTimeout(f, 5000);

        h1.innerHTML = "Successful Registration!";
        result.appendChild(h1);


        let pass = [];
        for (let i = 0; i < password.value.length; i++) {
            pass += "*";
        }
        result.innerHTML += `Username: ${username.value}\<br>` +
            `Email: ${email.value}\<br>` +
            `Password: ${pass}`;

    }
    
    setTimeout(function () {
        if (h1.innerHTML != ""){
            h1.remove();
            result.innerHTML = "";
        }
    }, 5000);
}




