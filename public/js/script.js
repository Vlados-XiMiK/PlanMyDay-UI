function togglePassword(id) {
  const passwordField = document.getElementById(id)
  const icon = passwordField.nextElementSibling // Иконка рядом с полем

  if (passwordField.type === 'password') {
    passwordField.type = 'text'
    icon.textContent = 'lock_open' // Меняем иконку
  } else {
    passwordField.type = 'password'
    icon.textContent = 'lock' // Возвращаем обратно иконку
  }
}
