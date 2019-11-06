myForm = document.getElementById('myForm');


myForm.addEventListener( 'submit', (e) =>{
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;

     e.preventDefault();

     //url validation
     /*if(!validateForm(siteName, siteUrl)){
        return false;
  }*/
     contact = {
         firstname:  firstname,
         lastname: lastname,
         phone: phone
     }
     if(localStorage.getItem('contacts')== null){
         
        //initialize array
         const contacts = [];
         contacts.push(contact);
         
         localStorage.setItem('contacts', JSON.stringify(contacts));

     }
     else{
         //get bookmarks from local storage
        const contacts = JSON.parse(localStorage.getItem('contacts'));

        //add the bookmark to local storage
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));

     }
     fetchcontacts();
        
}
);

const filterInput = document.getElementById('filterInput');


function filterNames(){
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    const contactlist = document.getElementById('contactlist');
    const list = document.querySelectAll('li');

    //loop through the list
     for(let i= 0; i<list.lenghth; i++){
         let li = list[i].getElementsByTagName('li')[0];

         //check for matches
         if(li.innerHTML.toUpperCase().indexOf(filterValue)>-1){
               list[i].style.display= '';
         }else{
             list[i].style.display = 'none';

         }

     }

}

function deletecontacts(id){

    //get bokmarks from local storage
    const contacts = JSON.parse(localStorage.getItem('contacts')); 

    //loop through bookmarks

    for(let i =0; i<contacts.length; i++){
        if(contacts[i].url==url){
            contacts.splice(i, 1);
        }

    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
    fetchcontacts();
}
//fetching bokmarks
function fetchcontacts(){
    const contacts = JSON.parse(localStorage.getItem('contacts')); 
    //get output results
     const contactlist = document.getElementById('contactlist');
     
     //build output
     contactlist.innerHTML = '';
     for(let i=0; i< contacts.length; i++){
         let firstname = contacts[i].firstname;
         let lastname = contacts[i].lastname;
         let phone = contacts[i].phone;

         contactlist.innerHTML += '<div class="panel panel" style= "color:black;">' + 
                                         '<ul>' +
                                        '<li>' + firstname + '</li>' +
                                        '<li>' + lastname + '</li> ' +
                                         '<li>' + phone + '</li>' +
                                         '</ul>' +
                                        
                                         '</div>'

     }
      
  }
  
//form validation
  /*function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
        alert('please fill in the blank space');
        return false;
    }
    
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert("please use a valid Url");
        return false; 
      }
      return true;

  }*/
  
