function generatePassword() {
  const length = document.getElementById('length').value;
  const useSymbols = document.getElementById('symbols').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useUppercase = document.getElementById('uppercase').checked;
  const useLowercase = document.getElementById('lowercase').checked;

  let characters = '';
  if (useSymbols) {
      characters += '!@#$%^&*()_+{}:"<>?|[];\',./`~';
  }
  if (useNumbers) {
      characters += '0123456789';
  }
  if (useUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (useLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById('password').innerText = password;
}
