const result =document.getElementById('result');
const submit =document.getElementById('submit');

function bainery(event){
    event.preventDefault();

    const num =document.getElementById('number').value;
           // console.log(typeof num)
       
           if(num === ""){
               alert("Plase enter number,")
           }else{
            result.style.visibility='visible';
           }
      
 
       result.innerText =Number( num).toString(2);  
   
   
}

submit.addEventListener('click', bainery);





