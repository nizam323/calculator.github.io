function add(){ 
    let a11 = parseFloat(document.getElementById("a1").value);
    let a22 = parseFloat(document.getElementById("a2").value);
    let a33 = a11+a22;
    document.getElementById("asa").innerText=a33;
};

function mult(){
    let a11 = document.getElementById("a1").value;
    let a22 = document.getElementById("a2").value;
    let a33 = a11*a22;
    document.getElementById("asa").innerText=a33;
};

function sub(){
    let a11 = document.getElementById("a1").value;
    let a22 = document.getElementById("a2").value;
    let a33 = a11-a22;
    document.getElementById("asa").innerText=a33;
};

function divi(){
    let a11 = document.getElementById("a1").value;
    let a22 = document.getElementById("a2").value;
    let a33 = a11/a22;
    document.getElementById("asa").innerText=a33;
    if(a33==Infinity){
        document.getElementById("asa").innerText="Division Not Possibel Due To Infinite Value";
    }
};