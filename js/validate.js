var mark1=0;
var mark2=0;
var mark3=0;
var message="";

function validateText(){
    var temp=document.getElementById("fname").value;
    if (temp==""){
        document.getElementById("s1").innerHTML=("first name is required");
    }
    else{
        document.getElementById("s1").innerHTML=("*");
    }
    temp=document.getElementById("lname").value;
    if (temp==""){
        document.getElementById("s2").innerHTML=("last name is required");
    }
    else{
        document.getElementById("s2").innerHTML=("*");
    }
    temp=document.getElementById("m1").value;
    if (temp==""){
        document.getElementById("s3").innerHTML=("mark is required");
    }
    else{
        document.getElementById("s3").innerHTML=("*");
    }
    temp=document.getElementById("m2").value;
    if (temp==""){
        document.getElementById("s4").innerHTML=("mark is required");
    }
    else{
        document.getElementById("s4").innerHTML=("*");
    }
    temp=document.getElementById("m3").value;
    if (temp==""){
        document.getElementById("s5").innerHTML=("mark is required");
    }
    else{
        document.getElementById("s5").innerHTML=("*");
    }
    
    mark1=parseInt(document.getElementById("m1").value);
    mark2=parseInt(document.getElementById("m2").value);
    mark3=parseInt(document.getElementById("m3").value);
    
    console.log(message);
    if(document.getElementById("m1").value == "") {
        message += "Web Design Mark ";
        
    }else if (isNaN(mark1)) {
        message += "Web Design Mark ";
    }
    console.log(message);
    if(document.getElementById("m2").value == "") {
        message += "Database Mark ";
        
    }else if (isNaN(mark2)) {
        message += "Database Mark ";
    }
    console.log(message);
    if(document.getElementById("m3").value == "") {
        message += "Java Mark ";
        
    }else if (isNaN(mark3)) {
        message += "Java Mark ";
    }
    console.log(message);
    if(mark1==""||mark2==""||mark3==""){
        document.getElementById("s6").innerHTML=(message += "need to be inputted");
    }else if(isNaN(mark1)||isNaN(mark2)||isNaN(mark3)){
        document.getElementById("s6").innerHTML=(message += "needs to be number input");
    }else{
        document.getElementById("s6").innerHTML=((mark1+mark2+mark3)/3);
    }
    message="";
}