
function toCube(num) {
    return num * num * num;
}

function showResult(event) {
    event.preventDefault();
    const label = document.getElementById('answer');

    if (isNaN(+mathInput.value)) {
        label.className = 'alertText'
        label.innerText = 'Please type a number';
    } else {
       let number = +mathInput.value;
       label.classList.remove('alertText');
       label.innerText = toCube(number);
     }


}

const mathForm = document.getElementById('math-form');
const mathInput = document.getElementById('math-input');

mathForm.addEventListener('submit', showResult)


