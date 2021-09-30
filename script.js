const thermicCondensateRecipe = {
    condensedCarbon: 50,
    sulphurine: 250
}

const userIngredients = {
    condensedCarbon: 0,
    sulphurine: 0
}

function evaluate() {
    let result = document.getElementById('Result');
    let sulphurineCount = document.getElementById("SulphurineCount").value;
    let condCarbonCount = document.getElementById("condCarbonCount").value
    
    userIngredients.sulphurine = sulphurineCount;
    userIngredients.condensedCarbon = condCarbonCount;

    if (!sulphurineCount || !condCarbonCount) {
        result.innerHTML = "Please fill out how much you have of each element, even if it's 0";
    } else if (userIngredients.condensedCarbon >= thermicCondensateRecipe.condensedCarbon && userIngredients.sulphurine >= thermicCondensateRecipe.sulphurine) {
        result.innerHTML = "You can do it!";
    } else if (userIngredients.condensedCarbon < thermicCondensateRecipe.condensedCarbon && userIngredients.sulphurine < thermicCondensateRecipe.sulphurine) {
        result.innerHTML = "You need more of both!"
    } else if (userIngredients.sulphurine < thermicCondensateRecipe.sulphurine) {
        result.innerHTML = "You need more sulphurine!";
    } else if (userIngredients.condensedCarbon < thermicCondensateRecipe.condensedCarbon) {
        result.innerHTML = "You need more Condensed Carbon!";
    }
}

let buttonEl = document.getElementById('Evaluate');
buttonEl.onclick = evaluate;


const StasisModuleRecipe = {
    dioxite: 50,
    phosphorus: 50,
    paraffinium: 50,
    faecium: 50,
    cactusFlesh: 100,
    frostCrystal: 140,
    ionizedCobalt: 150,
    starBulb: 200,
    solanium: 200,
    condensedCarbon: 300,
    gammaRoot: 400,
    radon: 500,
    sulphurine: 500,
    nitrogen: 500
}
