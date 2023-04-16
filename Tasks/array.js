function QueueSimulation(){
   var numbers = [1 , 2 , 3 , 4 , 5];
   let items=0;
   if(items!=""){
      numbers.push(items);
   }
   else{
      numbers.pop(numbers);
   }
   console.log(numbers);
   for (let i=0; i<numbers.length;i++){
   }
   for(let key in numbers){
      console.log(key,numbers[key]);
   }
}
console.log(QueueSimulation());