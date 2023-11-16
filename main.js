const username =document.getElementById('username');
const Email= document.getElementById('Email') ;
const messages= document.getElementById('messages') ;
const submit= document.getElementById('submit');
const form= document.getElementById('form');
const error= document.getElementById('error');

form.addEventListener('submit',e =>{
    
   let message=[]
   if(Email.value===''||Email==null){
    message.push('email is required')
   }

   if(message.length>0){
    e.preventDefault();
    error.innerText=message.join(',')
   }
  
});
