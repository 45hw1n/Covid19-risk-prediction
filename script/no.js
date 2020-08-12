document.getElementById('no').addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location.href="safe.html";   
   })
  
    function myFunction(){
            
         var  x  =(document.getElementById('cold').checked ? parseInt(document.getElementById('cold').value) : 0)+

         (document.getElementById('cough').checked ? parseInt(document.getElementById('cough').value) : 0)+
         (document.getElementById('fever').checked ? parseInt(document.getElementById('fever').value) : 0)+
         (document.getElementById('breathlessness').checked ? parseInt(document.getElementById('breathlessness').value) : 0)+
         (document.getElementById('loss of senses').checked ? parseInt(document.getElementById('loss of senses').value) : 0)+
         (document.getElementById('sore throat').checked ? parseInt(document.getElementById('sore throat').value) : 0)+
         (document.getElementById('none').checked ? parseInt(document.getElementById('none').value) : 0)+
         (document.getElementById('diabeties').checked ? parseInt(document.getElementById('diabeties').value) : 0)+
         (document.getElementById('heart disorder').checked ? parseInt(document.getElementById('heart disorder').value) : 0)+
         (document.getElementById('lung disorder').checked ? parseInt(document.getElementById('lung disorder').value) : 0)+
         (document.getElementById('kidney disorder').checked ? parseInt(document.getElementById('kidney disorder').value) : 0)+
         (document.getElementById('hypertension').checked ? parseInt(document.getElementById('hypertension').value) : 0)  + 
         (document.getElementById('no disorder').checked ? parseInt(document.getElementById('no disorder').value) : 0);
        // parseInt(document.getElementById('out').value)+
        // parseInt(document.getElementById('contact').value) +
        // parseInt(document.getElementById('worker').value)   ;
              console.log(x)
        
        if (x==0) {
            document.getElementById('result').innerText = "No Risk";
        
        } else if(x>0 & x<=3) {
            document.getElementById('result').innerText = "Low Risk";
        } else if(x>3 & x<6) {
            document.getElementById('result').innerText = "Medium Risk"; 
        }else {
            document.getElementById('result').innerText = "High Risk";       
    }}
    document.getElementById('analyse').addEventListener('click',(e)=>{
    e.preventDefault();
   }) 

let details = [];

const addDetail = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let detail= {
        "id":  document.getElementById('mobile').value,
        "name": document.getElementById('name').value,
        "age": document.getElementById('age').value,
        "mobileNo": document.getElementById('mobile').value,
        "area": document.getElementById('area').value,
        "address": document.getElementById('address').value,
        "oustation": document.getElementById('out').value,
        "contact": document.getElementById('contact').value,
        "worker": document.getElementById('worker').value,
        
        "cold": document.getElementById('cold').checked,
        "cough": document.getElementById('cough').checked,
        "breathelessness": document.getElementById('breathlessness').checked,
        "fever": document.getElementById('fever').checked,
        "loss of senses": document.getElementById('loss of senses').checked,
        "sorethroat": document.getElementById('sore throat').checked,
        "none": document.getElementById('none').checked,
        "diabeties": document.getElementById('diabeties').checked,
        "lungDisorder": document.getElementById('lung disorder').checked,
        "kidneyDisorder": document.getElementById('heart disorder').checked,
        "heartDisorder": document.getElementById('kidney disorder').checked,
        "hypertension": document.getElementById('hypertension').checked,
        "none": document.getElementById('no disorder').checked,
        
    }
    details.push(detail);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {details} );
    

    //saving to localStorage
    localStorage.setItem('details', JSON.stringify(details) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('no').addEventListener('submit', addDetail);
});