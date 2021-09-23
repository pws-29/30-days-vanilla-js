const inputs = document.querySelectorAll('.controls input') // returns a node-list with our inputs

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // pegando o valor de data-sizing
  // root, we could do this with getElemetById
  console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix))
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));