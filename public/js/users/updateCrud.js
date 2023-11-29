const emailSymbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const acceptedExtensions = ['JPG', 'JPEG', 'PNG', 'GIF'];
const phoneno = /^\d+$/;

const validations = [
  {
    field: 'first_name',
    check: (input) => input.value.length >= 2,
    message: 'Ingresá al menos dos caracteres',
  },
  {
    field: 'last_name',
    check: (input) => input.value.length >= 2,
    message: 'Ingresá al menos dos caracteres',
  },
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
  {
    field: 'contact_number',
    check: (input) => phoneno.test(input.value),
    message: 'Ingresá un número de teléfono válido (sin guiones, ni espacios)',
  },
  {
    field: 'birth_date',
    check: (input) =>
      new Date(input.value) !== 'Invalid Date' && !isNaN(new Date(input.value)),
    message: 'Ingresá tu fecha de nacimiento',
  },
  {
    field: 'address',
    check: (input) => input.value.length > 0,
    message: 'Ingresá tu dirección',
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
  return acceptedExtensions.includes(fileExtension);
}

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.innerText = 'Este campo es obligatorio';
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
