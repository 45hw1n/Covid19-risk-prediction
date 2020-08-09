document.getElementById('form1').addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location = (document.getElementById('test').value);
   })
let details = [];

const addDetail = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let detail= {
        id: Date.now(),
        name: document.getElementById('name').value,
        area: document.getElementById('area').value,
        address: document.getElementById('address').value,
        covidPositive: document.getElementById('test').value,
        
    }
    details.push(detail);
    document.forms[0].reset(); 
    // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {details} );
    

    //saving to localStorage
    localStorage.setItem('details', JSON.stringify(details) );
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('form1').addEventListener('submit', addDetail);
});
 