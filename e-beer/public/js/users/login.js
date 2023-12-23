const emailSymbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const acceptedExtensions = ['JPG', 'JPEG', 'PNG', 'GIF']
const phoneno = /^\d+$/

const validations = [
  {
    field: 'email',
    check: (input) => emailSymbols.test(input.value),
    message: 'Ingresá un correo electrónico válido',
  },
  {
    field: 'password',
    check: (input) => input.value.length >= 8,
    message: 'La contraseña debe tener al menos 8 caracteres',
  },
]

validations.forEach((validation) => {
  const inputId = validation.field
  const input = document.getElementById(inputId)
  const inputErrorMsg = document.getElementById(inputId + 'Error')

  function validate() {
    inputValidation(validation, input, inputErrorMsg)
  }

  input.addEventListener('blur', validate)
  input.addEventListener('input', validate)
})

const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const validationsResult = []

  validations.forEach((validation) => {
    const inputId = validation.field
    const input = document.getElementById(inputId)
    const inputErrorMsg = document.getElementById(inputId + 'Error')
    const result = inputValidation(validation, input, inputErrorMsg)
    validationsResult.push(result)
  })

  if (validationsResult.every((val) => val == true)) {
    form.submit()
  }
})

function validateProfilePicture(input) {
  const fileExtension = input.value.toUpperCase().split('.').pop()
  return acceptedExtensions.includes(fileExtension)
}

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.innerText = 'Este campo es obligatorio'
    inputErrorMsg.classList.add('display')
    return false
  }

  if (!validation.check(input)) {
    inputErrorMsg.innerText = validation.message
    inputErrorMsg.classList.add('display')
    return false
  }

  inputErrorMsg.innerText = ''
  inputErrorMsg.classList.remove('display')
  return true
}
