function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    if(principal<0){
        alert("Valid only Positive Amount");
        document.getElementById("principal").focus();
        document.getElementById("principal").click();
    }
    else{
   
    var message = "If you deposit <b>" + principal + "</b><br/> at an interest rate of <b>" + rate + "</b>%." + "<br/>You will recieve an amount of <b>"
                    + rate + "</b>%." + "<br/>You will recieve an amount of <b>" + interest + "</b>,<br/>in the year <b/>"+ year;
            
    document.getElementById("result").innerHTML = message; 
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    rateval = rateval + "%";
    document.getElementById("rate_val").innerText=rateval;
}
        
