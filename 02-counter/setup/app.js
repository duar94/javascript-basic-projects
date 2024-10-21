let count=0;

const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = '#333';
        }
    });
});