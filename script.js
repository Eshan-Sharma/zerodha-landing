function calc(){
    let capital = document.getElementById("capital").value;
    let years = document.getElementById("years").value;
    let interest = (document.getElementById("interest").value)/100;
    if(document.getElementById("compound").checked){
        document.getElementById("result").value = (capital*(Math.pow(1+interest/years,years*interest)))
    }else{
        document.getElementById("result").value = (capital*(1+years*interest))
    }
    
}