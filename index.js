function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', clickAlert);
}

// addingEventListener(); 

function clickAlert() {
    alert('I was clicked!');
}