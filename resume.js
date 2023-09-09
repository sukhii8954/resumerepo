// console.log("testing page");
// alert('ok');

function addnewWEField(){
    // console.log("adding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder",'Enter here' );
    
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addnewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder",'Enter here' );

    let AQOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton"); 

    AQOb.insertBefore(newNode,aqAddButtonOb);
    

}



// generating cv form 

function generateCV(){
    let nameField=document.getElementById("namefield").value;
    let nameT1=document.getElementById("nameT1");


    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    // contact 
    document.getElementById("contactT").innerHTML=document.getElementById("ContactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    
    
    //  socials
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    
    
    // objective
     document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
     
    //  work exp

     let weobj=document.getElementsByClassName("weField");
     
     let str=" ";

     for (let e of weobj) {
        str=str+ `<li> ${e.value} </li>`;
        
     }
     document.getElementById("weT").innerHTML=str;

    //  academic qualification

    let aqobj =document.getElementsByClassName("eqField");

    let str2=" ";

    for (let it of aqobj) {
        str2=str2+ `<li> ${it.value} </li>`;
        
    }
    document.getElementById("aqT").innerHTML=str2;


    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';

}  


// print your cv 
function printCV() {
    window.print();
}