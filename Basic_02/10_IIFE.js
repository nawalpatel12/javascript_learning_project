// Immediately Invoked Function Expressions IIFE

(function chai(){  // name IIFE
    console.log(`DB CONNECT`)
})();

( function aurcode(){
    console.log(`DB CONNECT TWO`)
})();


(  () => {       // unname IIFE
    console.log(`DB CONNECT THREE`)
})();

(  (name) => {      // parameter IIFE
    console.log(`DB CONNECT FOUR ${name}`)
})('Manav')