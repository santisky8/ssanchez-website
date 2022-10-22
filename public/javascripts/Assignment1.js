//global variables
var bmr = 0;
//calculate BMR
function calBMR() {
    var unit = document.getElementById("imperialTab").className;
    var gender = document.getElementsByName("gender");
    var age = document.getElementsByName("age");
    if (unit == "tablinksactive") {
        age = parseInt(age[0].value);
        var inches = parseInt(document.getElementById("inches").value);
        var pounds = parseInt(document.getElementById("pounds").value);
        if (gender[0].value === "Male") {
            bmr = (4.535 * pounds) + (15.875 * inches) - (5 * age) + 5;
        }
        else {
            bmr = (4.535 * pounds) + (15.875 * inches) - (5 * age) - 161;
        }
        document.getElementById("description").innerHTML = "This is the calculation for a " + gender[0].value.toLowerCase() + " of " + age + " years with a height of " +
           inches + " inches and a weight of " + pounds + " pounds."; 
    }
    else {
        age = parseInt(age[1].value);
        var weight = parseInt(document.getElementById("kg").value);
        var height = parseInt(document.getElementById("cm").value);
        if (gender[1].value === "Male") {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        }
        else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
        document.getElementById("description").innerHTML = "This is the calculation for a " + gender[1].value.toLowerCase() + " of " + age + " years with a height of " +
            height + " cm and a weight of " + weight + " kg."; 
    }
    bmr = bmr.toFixed(0);
    document.getElementById("bmr").innerHTML = bmr;    
    displayResult();
    calCaloricR();
}
//calculate Caloric Requirements
function calCaloricR() {
    var radios = document.getElementsByName("activityLvl");
    var activityLvl = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            activityLvl = radios[i].value;
            console.log(activityLvl);
            break;
        }
    }
    switch (activityLvl) {
        case "little": bmr *= 1.2; break;
        case "light": bmr *= 1.375; break;
        case "moderate": bmr *= 1.55; break;
        case "hard": bmr *= 1.725; break;
        default: bmr *= 1.9; break;
    }
    document.getElementById("caloricR").innerHTML = bmr.toFixed(0);
}
// sets all form field values to defaults
function resetForm() {
    //entry
    document.getElementsByName("gender")[0].value = "";
    document.getElementsByName("gender")[1].value = "";
    document.getElementsByName("age")[0].value = "";
    document.getElementsByName("age")[1].value = ""; 
    document.getElementById("inches").value = ""; 
    document.getElementById("pounds").value = "";
    document.getElementById("result").style.display = "none";
}
//change tab function
function chUnit(event, unitName) {
    //Declare all variables
    var i, tabcontent, tablinks;
    //Get all elements with class'"tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    //Get all elements with class="tablinksactive" and change to "tablinks"
    tablinks = document.getElementsByClassName("tablinksactive");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = "tablinks";
    }
    //Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(unitName).style.display = "block";
    event.currentTarget.className = "tablinksactive";
}
// Result
function displayResult() {
    var result = document.getElementById("result");
    result.style.display = "block";
}
window.addEventListener("load", resetForm, false);