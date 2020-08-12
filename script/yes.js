//Redirect
document.getElementById('yes').addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location.href="thankyou.html";
   })

  let details = [];

   

  const addDetail = (ev)=>{
      ev.preventDefault();  //to stop the form submitting
      let detail= {
        "id": document.getElementById('mobile').value,
        "name": document.getElementById('name').value,
        "age": document.getElementById('age').value,
        "mobile No": document.getElementById('mobile').value,
        "area": document.getElementById('area').value,
        "address": document.getElementById('address').value,
        "hospital": document.getElementById('hospital').value,
        "hospitalLocation": document.getElementById('hlocation').value,
        "health": document.getElementById('condition').value,
        "days": document.getElementById('days').value,
        "name 1": document.getElementById('name1').value,
        "name 2": document.getElementById('name2').value,
        "name 3": document.getElementById('name3').value,
        "name 4": document.getElementById('name4').value,
        "location 1": document.getElementById('location1').value,
        "location 2": document.getElementById('location2').value,
        "location 3": document.getElementById('location3').value,
        "location 4": document.getElementById('location4').value,
        "phone 1": document.getElementById('mobile1').value,
        "phone 2": document.getElementById('mobile2').value,
        "phone 3": document.getElementById('mobile3').value,
        "phone 4": document.getElementById('mobile4').value,
        "oustation": document.getElementById('outstation').value,
        "contact": document.getElementById('contact').value,
        "frontline worker": document.getElementById('worker').value,
        
        
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
      document.getElementById('yes').addEventListener('submit', addDetail);
  });