const button = document.getElementById('button');
const text = document.getElementById('text');
const li = document.createElement('li');


function fet () {fetch('https://api.chucknorris.io/jokes/random')
  .then(res => res.json())
  .then(data => {li.textContent = data.value;
  text.appendChild(li);
})}

button.addEventListener("click", fet)

