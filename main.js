const container = document.querySelector('.container')
container.addEventListener('mousemove', function (event) {
  let char = getChars()
  let span = document.createElement('span')
  span.textContent = char
  span.style.left = event.clientX + 'px'
  span.style.top = event.clientY + 'px'
  container.appendChild(span)
  span.style.fontSize = Math.random() * 100 + 'px'
  setTimeout(function () {
    span.remove()
  }, 5000)
})

function getChars() {
  let chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  return chars.split('')[Math.floor(Math.random() * chars.length)]
}
