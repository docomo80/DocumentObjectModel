function solve() {
    let profiles = document.getElementsByClassName('profile');
    let buttons = document.getElementsByTagName('button');
    // console.log(profiles);
    // console.log(buttons);

    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click', clickedBtn);
    });

    function clickedBtn(element) {
        let btn = element.target;
        let profile = btn.parentNode;
        let unlocked = profile.children[4];
        let locked = profile.children[2];
        console.log(unlocked);
        console.log(locked);
        let hiddenField = profile.getElementsByTagName('div')[1];
        if (unlocked.checked && (btn.innerHTML == 'Show more')) {

            // hiddenField = profile.getElementsByTagName('div')[1];
            // console.log(hiddenField);
            // let userHiddenFieldsValue = document.getElementById(hiddenField).value;
            hiddenField.style.display = 'block';
            btn.innerHTML = 'Hide it';

        } else if (unlocked.checked && (btn.innerHTML == 'Hide it')) {
            hiddenField.style.display = 'none';
            btn.innerHTML = 'Show more';
        }
    }
}