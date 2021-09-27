function myFunction() {
  const squares = document.querySelectorAll(".result div")
  squares.forEach(div => {
    return div.className = "square"
  })
}