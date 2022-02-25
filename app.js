let weight=document.getElementById("weight")
let officeTopickUp = document.getElementById("officeTopickup")
let pickupTodestination = document.getElementById("pickupTodestination")
let destination = document.getElementById("destination")
let option_from;
destination.addEventListener("change",myResult)
option_from = destination.value;
function myResult(){
    option_from = destination.value;
    if (option_from==="None"){
        totalCharge.value = 0 +" BDT"
    }
    if (option_from==="Mirpur"){
        totalCharge.value = 100 +" BDT"
    }
    if (option_from==="Uttara"){
        totalCharge.value = 140 +" BDT"
    }
    if (option_from==="Dhanmondi"){
        totalCharge.value = 120 +" BDT"
    }
    if (option_from==="Agargaon"){
        totalCharge.value = 110 +" BDT"
    }
    if (option_from==="Tejgaon"){
        totalCharge.value = 130 +" BDT"
    }
    if (option_from==="Nadda"){
        totalCharge.value = 150 +" BDT"
    }
}
let weight_from;
weight.addEventListener("keyup",extraCharge);
weight_from = weight.value;
pick_distance = officeTopickUp.value;
desti_distance = pickupTodestination.value;
function extraCharge(){
    weight_from = weight.value;
    pick_distance = officeTopickUp.value;
    desti_distance = pickupTodestination.value;
    if (weight_from<=2){
        extracharge.value=0 + " BDT"
    }
    if (weight_from>=2){
        extracharge.value= (weight_from - 2)*10 + " BDT"
    }

}








