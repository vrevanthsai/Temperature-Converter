const p = document.getElementById("choose1");
const q = document.getElementById("choose2");
const a = document.getElementById("a");
const c = document.getElementById("c");
// const v1=document.getElementsByClassName("value1");

// Convertion 
function convert() {
    // when types are same
    if ((p.value === q.value) && a.value != "" && p.value != "Choose a Type" && q.value != "Choose a Type") {
        document.getElementById("c").value = a.value;
        // final result message
        document.getElementById("value1").innerHTML = a.value;
        document.getElementById("value3").innerHTML = a.value;
        document.getElementById("value2").innerHTML = p.value;
        document.getElementById("value4").innerHTML = q.value;
    }
    // Terperature convertion from Fahrenheit to Celcius
    if ((p.value == "Fahrenheit") && (q.value == "Celcius") && a.value != "") {
        d = parseFloat((a.value - 32) / 1.8).toFixed(2);
        document.getElementById("c").value = d;
         // final result message
        document.getElementById("value1").innerHTML = a.value;
        document.getElementById("value3").innerHTML = d;
        document.getElementById("value2").innerHTML = p.value;
        document.getElementById("value4").innerHTML = q.value;
    }
    // Terperature convertion from Fahrenheit to Kelvin
    if ((p.value == "Fahrenheit") && (q.value == "Kelvin") && a.value != "") {
        d = parseFloat(((a.value - 32) / 1.8) + 273.15).toFixed(2);
        document.getElementById("c").value = d;
         // final result message
        document.getElementById("value1").innerHTML = a.value;
        document.getElementById("value3").innerHTML = d;
        document.getElementById("value2").innerHTML = p.value;
        document.getElementById("value4").innerHTML = q.value;
    }
    // Terperature convertion from Celcius to Fahrenheit
    if ((p.value == "Celcius") && (q.value == "Fahrenheit") && a.value != "") {
        d = parseFloat((a.value * 1.8) + 32).toFixed(2);
        document.getElementById("c").value = d;
         // final result message
        document.getElementById("value1").innerHTML = a.value;
        document.getElementById("value3").innerHTML = d;
        document.getElementById("value2").innerHTML = p.value;
        document.getElementById("value4").innerHTML = q.value;
    }
    // Terperature convertion from Celcius to Kelvin
    if ((p.value == "Celcius") && (q.value == "Kelvin") && a.value != "") {
        d = (parseFloat(a.value) + 273.15).toFixed(2);
        document.getElementById("c").value = d;
         // final result message
        document.getElementById("value1").innerHTML = a.value;
        document.getElementById("value3").innerHTML = d;
        document.getElementById("value2").innerHTML = p.value;
        document.getElementById("value4").innerHTML = q.value;
    }
    // Terperature convertion from Kelvin to Fahrenheit
    if ((p.value == "Kelvin") && (q.value == "Fahrenheit") && a.value != "") {
        d = parseFloat(((a.value - 273.15) * 1.8) + 32).toFixed(2);
        document.getElementById("c").value = d;
         // final result message
        document.getElementById("value1").innerHTML = a.value;
        document.getElementById("value3").innerHTML = d;
        document.getElementById("value2").innerHTML = p.value;
        document.getElementById("value4").innerHTML = q.value;
    }
    // Terperature convertion from Kelvin to Celcius
    if ((p.value == "Kelvin") && (q.value == "Celcius") && a.value != "") {
        d = parseFloat(a.value - 273.15).toFixed(2);
        document.getElementById("c").value = d;
         // final result message
        document.getElementById("value1").innerHTML = a.value;
        document.getElementById("value3").innerHTML = d;
        document.getElementById("value2").innerHTML = p.value;
        document.getElementById("value4").innerHTML = q.value;
    }
}
