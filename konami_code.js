const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // Write your JavaScript code inside the init() function	  
  let index = 0;


   document.body.addEventListener('keydown', function(e) {
    const key = e.key;

     if (codes[index] === key) {
      index++;

       if (index === codes.length - 1) {
        alert('Congratulations!');

         index = 0;
      }
    } else {
      index = 0;
    }
  });
} 