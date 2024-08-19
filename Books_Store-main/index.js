var siteInput=document.getElementById('siteinput');
var urlInput=document.getElementById('urlinput');
var storedata=[];
// var header=document.getElementById('header');
var error1=document.getElementById('error1');
var error2=document.getElementById('error2');
var message=document.getElementById('message');
if(localStorage.getItem("storedata")!=null){
storedata=JSON.parse(localStorage.getItem("storedata"));
displayalldata();}

function removevalidation(){
    if(urlInput.classList.contains('is-valid')){
        urlInput.classList.remove('is-valid');
    }
    if(siteInput.classList.contains('is-valid')){
        siteInput.classList.remove('is-valid');
    }

}

function add(){
    
    if(validationname()&& validation_url()){

                 if( message.classList.contains('d-block')){
                message.classList.replace('d-block','d-none');
               }


    
    var object={
        sitename:siteInput.value,
        siteurl:urlInput.value
    }
    // if(!validationform()){
    //     return false;
    // }

    storedata.push(object);
 
    localStorage.setItem('storedata',JSON.stringify(storedata));
    console.log(storedata);
    displaylastindex();
    clearform();
    removevalidation();
}

else{
        if(message.classList.contains('d-none')){
        message.classList.replace('d-none','d-block');
        // alert('Invalid Input try again')
        }
  
}

}
function clearform(){
    siteInput.value=null;
    urlInput.value=null;
}




function displaylastindex(){
    var lastindex=storedata.length-1;
    var container='';
    container=` <tr>
    <td>${lastindex+1}</td>
    <td>${storedata[lastindex].sitename}</td>
    <td><button class="button2" ><i class="fa-regular fa-eye text-light "></i><a href="${storedata[lastindex].siteurl}" class="px-1">Visit</a></button></td>
    <td><button  onclick='Delete(${lastindex+1});'  class="button3" ><i class="fa-regular fa-trash-can text-light"></i><a href="" class="px-1">Delete</a></button></td>
</tr>`

document.getElementById('tbody').innerHTML+=container;
}



function displayalldata(){
    var container='';
    for(var i=0;i<storedata.length;i++){
    container+=` <tr>
    <td>${i+1}</td>
    <td>${storedata[i].sitename}</td>
    <td><button class="button2" ><i class="fa-regular fa-eye text-light "></i><a href="${storedata[i].siteurl}" class="px-1">Visit</a></button></td>
    <td><button onclick='Delete(${i});' class="button3" ><i class="fa-regular fa-trash-can text-light"></i><a href="" class="px-1">Delete</a></button></td>
</tr>`}

document.getElementById('tbody').innerHTML=container;
}




function Delete(index){

    storedata.splice(index,1);
    localStorage.setItem('storedata',JSON.stringify(storedata));
    displayalldata();

}




function validationname(){
     var redex=/^.{3,}$/i;
    if(redex.test(siteInput.value)){
        if(siteInput.classList.contains('is-invalid')){
            siteInput.classList.remove('is-invalid');
        }
       
        if(error1.classList.contains('d-block')){
            error1.classList.replace('d-block','d-none');
        }
        siteInput.classList.add('is-valid');
        
        return true;
    }
   
    else{
        if(siteInput.classList.contains('is-valid')){
            siteInput.classList.remove('is-valid');
        }
        siteInput.classList.add('is-invalid');
        error1.classList.replace('d-none','d-block');
        
        return false;
    }
}


function validation_url(){
    var result=urlInput.value;
    var validateURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(result);
   
    if(validateURL){
        if(urlInput.classList.contains('is-invalid')){
            urlInput.classList.remove('is-invalid');
        }
       
        if(error2.classList.contains('d-block')){
            error2.classList.replace('d-block','d-none');
        }
        urlInput.classList.add('is-valid');
        return true;
    }
    else{
        if(urlInput.classList.contains('is-valid')){
            urlInput.classList.remove('is-valid');
        }
        urlInput.classList.add('is-invalid');
        error2.classList.replace('d-none','d-block');
        return false;
    }
}






