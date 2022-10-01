const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const verifyPassword = document.querySelector('#verifyPassword')
const btnForm = document.querySelector('#btnForm')

btnForm.addEventListener('click', (e) => {
    e.preventDefault()
    
    validationForm()
})

function validationForm(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const verifyPasswordValue = verifyPassword.value.trim()



    if(usernameValue === ''){
        validationError(username, 'Invalid Field')
    }else{
        validationSuccess(username, 'Valid Field')        
    }

    if(!email.checkValidity()){
        validationError(email, 'Invalid Field')
        console.log('Erro')
    }else{
        validationSuccess(email, 'Valid Field')
        console.log('Sucesso')
    }

    if(passwordValue === '' || passwordValue.length <= 5){
        validationError(password, 'Invalid Field')
    }else{
        validationSuccess(password, 'Valid Field')
    }

    if(verifyPasswordValue === '' || verifyPasswordValue !== passwordValue){
        validationError(verifyPassword, 'Invalid Field')
    }else{
        validationSuccess(verifyPassword, 'Valid Field')
    }
}



function validationError(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    const span_verification = formControl.querySelector('.verification')
    span_verification.innerHTML = 'O'
    small.innerText = message

    formControl.classList = 'control-form error'
}

function validationSuccess(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = message

    formControl.classList = 'control-form success'
}