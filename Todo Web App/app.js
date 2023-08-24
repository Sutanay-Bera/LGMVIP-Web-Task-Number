let inp= document.getElementById("inp");
let btnA= document.getElementById("btn");
let ul= document.querySelector("ul");

btnA.addEventListener("click", function(){
    console.log(inp.value);
    let item= document.createElement("li");
    let list= document.createElement("span");
    let delBtn= document.createElement("button");
    if(inp.value==""){
        alert("Please Enter Your Task First Than Press The Add Button");
    }
    else{
        list.innerText=inp.value;
        list.classList.add("list");
        ul.appendChild(item);
        item.appendChild(list);
        inp.value="";
        delBtn.id= "delbtn";
        delBtn.classList.add("material-symbols-outlined");
        delBtn.innerText="cancel";
        item.appendChild(delBtn);   
    }
});


ul.addEventListener("click", function(e){
    if(e.target.nodeName == 'BUTTON'){
    let listitem=e.target.parentElement;
        listitem.remove();
    }else if(e.target.nodeName == 'SPAN'){
    let litem=e.target;
        litem.style.textDecoration = "line-through white";
        litem.parentElement.style.backgroundColor = "#6387eb";
        litem.style.color = "white";
        litem.nextSibling.style.color = "white";
    }
});

