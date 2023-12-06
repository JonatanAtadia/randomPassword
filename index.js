// RANDOM PASSWORD GENERATOR

const characterSets = {
  lowercase: 'qwertyuiopasdfghjklñzxcvbnm',
  uppercase: 'QWERTYUIOPASDFGHJKLÑZXCVBNM',
  numbers: '0123456789',
  symbols: '!@#$%&()=*+-_|/?¡¿[]{}',
};

function generatePassword() {
  const passwordLength = parseInt(
    document.getElementById('passwordLength').value,
    10
  );
  const includeLowercase = document.getElementById('includeLowercase').checked;
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const passwordResult = document.getElementById('passwordResult');

  let allowedChars = '';

  allowedChars += includeLowercase ? characterSets.lowercase : '';
  allowedChars += includeUppercase ? characterSets.uppercase : '';
  allowedChars += includeNumbers ? characterSets.numbers : '';
  allowedChars += includeSymbols ? characterSets.symbols : '';

  if (passwordLength <= 0) {
    return (passwordResult.textContent = `(Password length must be at least 1)`);
  }

  if (allowedChars.length === 0) {
    return (passwordResult.textContent = `(At least 1 set of characters needs to be selected)`);
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  passwordResult.textContent = `Password: ${password}`;
}
