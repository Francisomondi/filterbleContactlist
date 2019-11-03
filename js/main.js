myForm = document.getElementById('myForm');

myForm.addEventListener( 'submit', (e) =>{
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteName').value;

     e.preventDefault();

     //url validation
     /*if(!validateForm(siteName, siteUrl)){
        return false;
  }*/
     bookmark = {
         name:  siteName,
         url: siteUrl
     }
     if(localStorage.getItem('bookmarks')== null){
         
        //initialize array
         const bookmarks = [];
         bookmarks.push(bookmark);
         
         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     }
     else{
         //get bookmarks from local storage
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        //add the bookmark to local storage
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     }
     fetchbookmarks();
        
}
);

function deleteBookmark(url){

    //get bokmarks from local storage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')); 

    //loop through bookmarks

    for(let i =0; i<bookmarks.length; i++){
        if(bookmarks[i].url==url){
            bookmarks.splice(i, 1);
        }

    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchbookmarks();
}
//fetching bokmarks
function fetchbookmarks(){
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')); 
    //get output results
     const bookmarkresults = document.getElementById('bookmarkResults');
     
     //build output
     bookmarkresults.innerHTML = '';
     for(let i=0; i< bookmarks.length; i++){
         let name = bookmarks[i].name;
         let url = bookmarks[i].url;

         bookmarkresults.innerHTML += '<div class="well">' + 
                                        '<h3>' + name +
                                        '<a class= "btn btn-info" target= "_blank" href = "'+ url+ '">visit</a> ' +
                                        '<a onclick="deleteBookmark(\''+url+'\')" class= "btn btn-danger" href = "#">Delete</a> ' +
                                         '</h3>' + 
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
  
