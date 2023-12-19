const acceptedExtensions = ['JPG', 'JPEG', 'PNG', 'GIF'];

const validations = [
  {
    field: 'name',
    check: (input) => input.value.length >= 2,
    message: 'Ingresá al menos dos caracteres',
  },
  {
    field: 'price',
    check: (input) => input.value.length >= 1,
    message: 'Ingresá al menos un dígito para el precio',
  },
  {
    field: 'description',
    check: (input) => input.value.length >= 5,
    message: 'Ingresá al menos 5 caracteres',
  },
  {
    field: 'image',
    check: (input) => validateImage(input),
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

function validateImage(input) {
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
