
    // Minha intenção é somente mostrar uma mensagem de erro se o e-mail não for válido, e não o oposto (Mostrar mensagem se o e-mail for válido) RegExp
function validar() {
    let email = document.getElementById('email').value
    let valida = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

    if (valida.test(email) === false ){
        
        document.getElementById('img-error').classList.remove('hidden')
        document.getElementById('text-error').classList.remove('hidden')
        document.getElementById('id-email').classList.add('email-error')
    } else {

        document.getElementById('img-error').classList.add('hidden')
        document.getElementById('text-error').classList.add('hidden')
        document.getElementById('id-email').classList.remove('email-error')
    }


}