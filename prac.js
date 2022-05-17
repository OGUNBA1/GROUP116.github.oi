const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


const Username = document.getElementById('Username')
const email = document.getElementById('email')
const Phone = document.getElementById('number')
const Password = document.getElementById('Password')
const form = document.getElementById('form')
form.addEventListener('Submit', (e) => {
    let messages = []
    if (Username.value === '' || Username.value == null){
        messages.push('Username is required')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }

})