const neededCondCarbon = 50;
const neededSulphurine = 250;

let buttonEl = document.getElementById('Evaluate');
buttonEl.onclick = evaluate;

function evaluate() {
    let result = document.getElementById('Result');
    let sulphurineCount = document.getElementById("SulphurineCount").value;
    let condCarbonCount = document.getElementById("condCarbonCount").value
    

    if (!sulphurineCount || !condCarbonCount) {
        result.innerHTML = "Please fill out how much you have of each element, even if it's 0";
    } else if (condCarbonCount >= neededCondCarbon && sulphurineCount >= neededSulphurine) {
        result.innerHTML = "You can do it!";
    } else if (sulphurineCount < neededSulphurine ) {
        result.innerHTML = "You need more sulphurine!";
    } else if ( condCarbonCount < neededCondCarbon) {
        result.innerHTML = "You need more Condensed Carbon!";
    }
}