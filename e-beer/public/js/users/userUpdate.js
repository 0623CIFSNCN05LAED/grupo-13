const emailSymbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const acceptedExtensions = ['JPG', 'JPEG', 'PNG', 'GIF'];
const passVal =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const phoneno = /^\d+$/;

const validations = [
  {
    field: 'first_name',
    check: (input) => input.value.length >= 2,
    message: 'Ingresá al menos 2 caracteres',
  },
  {
    field: 'last_name',
    check: (input) => input.value.length >= 2,
    message: 'Ingresá al menos 2 caracteres',
  },
  {
    field: 'email',
    check: (input) => emailSymbols.test(input.value),
    message: 'Ingresá un correo electrónico válido',
  },
  {
    field: 'password',
    check: (input) => passVal.test(input.value),
    message:
      'Ingresá como mínimo 8 caracteres incluyendo una mayúscula, una minúscula, un número y un caracter especial',
  },
  {
    field: 'contact_number',
    check: (input) => phoneno.test(input.value),
    message: 'Ingresá un número de teléfono válido (sin guiones, ni espacios)',
  },
  {
    field: 'birth_date',
    check: (input) => validator.isDate(input.value),
    message: 'Ingresá una fecha válida',
  },
  {
    field: 'address',
    check: (input) => input.value.length >= 2,
    message: 'Ingresá al menos 2 caracteres',
  },
];

validations.forEach((validation) => {
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputErrorMsg = document.getElementById(inputId + 'Error');

  function validate() {
    console.log('input.value', input.value);
    inputValidation(validation, input, inputErrorMsg);
  }

  input.addEventListener('blur', validate);
  input.addEventListener('input', validate);
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const validationsResult = [];

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + 'Error');
    const result = inputValidation(validation, input, inputErrorMsg);
    validationsResult.push(result);
  });

  if (validationsResult.every((val) => val == true)) {
    form.submit();
  }
});

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.innerText = 'El campo no debe estar vacío';
    inputErrorMsg.classList.add('display');
    return false;
  }

  if (!validation.check(input)) {
    inputErrorMsg.innerText = validation.message;
    inputErrorMsg.classList.add('display');
    return false;
  }

  inputErrorMsg.innerText = '';
  inputErrorMsg.classList.remove('display');
  return true;
}
