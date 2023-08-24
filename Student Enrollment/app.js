let form = document.getElementById("form");
let nam = document.getElementById("name");
let email = document.getElementById("email");
let website = document.getElementById("website");
let Imagelink = document.getElementById("Imagelink");
let g = document.getElementsByName("gender");
let select = document.querySelectorAll("input[type='checkbox']");
let enrollstd = document.getElementById("enrollstd");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let parentitem = document.createElement("div");
    parentitem.classList.add("std");
    let item1 = document.createElement("div");
    item1.id="enroll1";
    let item2 = document.createElement("div");
    item2.id="enroll2";
        for(let i=0; i<=g.length; i++){
       try{
        if(g[i].checked){
            gender = g[i].value;
            console.log(gender);
        }
       }catch{
        console.log("error");
       }
    }
    let result="";
    select.forEach(function(check){
        if(check.checked){
            result+= check.value + " ";
            console.log(check.value);
         }
    });
    let display= nam.value +'<br>'+email.value+'<br>'+ '<a href="'+ 'https://'+website.value+'/" target="_blank">'+website.value+'</a>'+'<br>'+gender+'<br>'+result;
    item1.innerHTML = display;
    console.log(display);
    parentitem.appendChild(item1);
    let d= '<img src="'+Imagelink.value+'" height="110px" width="120px"; alt="back">';
    item2.innerHTML = d;
    parentitem.appendChild(item2);
    enrollstd.appendChild(parentitem);
    nam.value="";
    email.value="";
    website.value="";
    Imagelink.value="";
      
}); 





