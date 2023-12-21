const emailSymbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const acceptedExtensions = ['JPG', 'JPEG', 'PNG', 'GIF'];
const passVal =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var phoneno = /^\d{11}$/;

const validations = [
  {
    field: 'fist_name',
    check: (input) => input.value.length >= 2,
    message: 'Ingresar al menos dos caracteres',
  },
  {
    field: 'last_name',
    check: (input) => input.value.length >= 2,
    message: 'Ingresar al menos dos caracteres',
  },
  {
    field: 'email',
    check: (input) => emailSymbols.test(input.value),
    message: 'Ingresar un correo electrónico válido',
  },
  {
    field: 'password',
    check: (input) => passVal(input.value),
    message:
      'Ingresar un mínimo de ocho caracteres que contengan al menos una mayúscula, una minúscula, un número y un caractér especial',
  },
  {
    field: 'contact_number',
    check: (input) => phoneno(input.value),
    message: 'Ingresar un número de teléfono válido con al menos 11 caracteres',
  },
  {
    field: 'birth_date',
    check: (input) => validator.isDate(input.value),
    message: 'Ingresar una fecha válida',
  },
  {
    field: 'address',
    check: (input) => input.value.length >= 2,
    message: 'Ingresar al menos dos caracteres',
  },
  {
    field: 'profile_picture',
    check: (input) => validateProfilePicture(input),
    message: `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
      ', '
    )}`,
  },
];

validations.forEach((validation) => {
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputErrorMsg = document.getElementById(inputId + 'Error');

  function validate() {
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

function validateProfilePicture(input) {
  const fileExtension = input.value.toUpperCase().split('.').pop();
  if (!acceptedExtensions.includes(fileExtension)) {
    return `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
      ', '
    )}`;
  }
}

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
