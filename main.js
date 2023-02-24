function oddOrEven(array) {
   let sum = 0;
   for( let i = 0; i < array.length; i++){
    if( array[i] === []){
        array[i] = 0
    }
        sum = sum + array[i];
   }
   if(sum % 2 === 0){
    return "even";
   }
    return "odd";
}