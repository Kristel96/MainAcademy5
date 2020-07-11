
// додати перевірку на те чи (форма з чекбоксами)
// 2 світить сонце (якщо так то взяти сонцезахисні окуляри)
//  3 падає дощ  (якщо так то взяти парасольку)
// 4 холодно  (якщо так то взяти верхній одяг)
// 1 день  (див нижче) вирішити чи потрібні окуляри =)
// 5 вихідний (якщо день і вихідний - то піти на пікнік,
//  якщо ніч і вихфдний то в кафе, якщо не вихідний і дент
// - на роботу, якщо не вихідний і ніч - до дому спати )

let day;
let sunny;
let rainy;
let cold;
let weekend;
function analyzeWeather() {
    let output = "";
    day = document.getElementById("check1").checked;
    sunny = document.getElementById("check2").checked;
    rainy = document.getElementById("check3").checked;
    cold = document.getElementById("check4").checked;
    weekend = document.getElementById("check5").checked;


    if(day===true){
    if(sunny===true){
        output = "Take your sun glasses."
    }
    if (rainy===true){
        output += "Take your umbrella"
    }
    if (cold ===true){
        output += "Take your coat"
    }
    if (weekend ===true){
        output += "And finally go to pikinick"
    }else{
        output += "And finally go to your work"
    }
    }else{
        if (rainy===true){
            output += "Take your umbrella"
        }
        if (cold ===true){
            output += "Take your coat"
        }
        if (weekend ===true){
            output += "And finally go to caffee"
        }else{
            output += "And finally go home and take some slip"
        }

    }

    alert( output);
}
