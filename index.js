console.log('Welcome to index.js')

const input = document.querySelector('input')

function addingEventListener() {
    input.addEventListener('click', function(event) {
      alert('I was clicked!');
    });
};

addingEventListener()
