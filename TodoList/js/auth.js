authForm.onsubmit = function (event) {
  event.preventDefault()
  const { email, password } = authForm

  if (authForm.submitAuthForm.innerHTML === 'Acessar') {

    firebase.auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(function (user) {
        console.log('Acessou com sucesso')
        console.log(user)
      })
      .catch(function (error) {
        console.log('Falha no acesso')
        console.log(error)
      })

  } else {

    firebase.auth().
      createUserWithEmailAndPassword(email.value, password.value)
      .then(function (user) {
        console.log('Cadastrou com sucesso')
        console.log(user)
      })
      .catch(function (error) {
        console.log('Falha no cadastro')
        console.log(error)
      })

  }
}