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

const userIngredients = {
    dioxite: 0,
    phosphorus: 0,
    paraffinium: 0,
    faecium: 0,
    cactusFlesh: 0,
    frostCrystal: 0,
    ionizedCobalt: 0,
    starBulb: 0,
    solanium: 0,
    condensedCarbon: 0,
    gammaRoot: 0,
    radon: 0,
    sulphurine: 0,
    nitrogen: 0
}

function evaluate() {
    clearBox('resultsArea'); //removes any previous results

    const modulesCapableOfCreating = [];

    //Retrieve what the user has entered
    let dioxiteCount = assignCountVariables("dioxite"),
    phosphorusCount = assignCountVariables("phosphorus"),
    paraffiniumCount = assignCountVariables("paraffinium"),
    faeciumCount = assignCountVariables("faecium"),
    cactusFleshCount = assignCountVariables("cactusFlesh"),
    frostCrystalCount = assignCountVariables("frostCrystal"),
    ionizedCobaltCount = assignCountVariables("ionizedCobalt"),
    starBulbCount = assignCountVariables("starBulb"),
    solaniumCount = assignCountVariables("solanium"),
    condensedCarbonCount = assignCountVariables("condensedCarbon"),
    gammaRootCount = assignCountVariables("gammaRoot"),
    radonCount = assignCountVariables("radon"),
    sulphurineCount = assignCountVariables("sulphurine"),
    nitrogenCount = assignCountVariables("nitrogen");

    //Assign userIngredients with the amounts entered by the user
    userIngredients.dioxite = dioxiteCount;
    userIngredients.phosphorus = phosphorusCount;
    userIngredients.paraffinium = paraffiniumCount;
    userIngredients.faecium = faeciumCount;
    userIngredients.cactusFlesh = cactusFleshCount;
    userIngredients.frostCrystal = frostCrystalCount;
    userIngredients.ionizedCobalt = ionizedCobaltCount;
    userIngredients.starBulb = starBulbCount;
    userIngredients.solanium = solaniumCount;
    userIngredients.condensedCarbon = condensedCarbonCount;
    userIngredients.gammaRoot = gammaRootCount;
    userIngredients.radon = radonCount;
    userIngredients.sulphurine = sulphurineCount;
    userIngredients.nitrogen = nitrogenCount;

    //Figure out how many stasis modules you can make per each ingredient, push to the modulesCapableOfCreating array
    modulesCapableOfCreating.push(amtOfProductsCapable("dioxite", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("phosphorus", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("paraffinium", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("faecium", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("cactusFlesh", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("frostCrystal", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("ionizedCobalt", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("starBulb", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("solanium", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("condensedCarbon", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("gammaRoot", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("radon", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("sulphurine", userIngredients, StasisModuleRecipe));
    modulesCapableOfCreating.push(amtOfProductsCapable("nitrogen", userIngredients, StasisModuleRecipe));

    let maxAmtOfModulesYouCanMake = Math.min(...modulesCapableOfCreating)
    console.log(maxAmtOfModulesYouCanMake)

    document.getElementById("resultSentence").style.display = "block";
    document.getElementById("stasisModuleNumber").textContent = `${maxAmtOfModulesYouCanMake}`
    

    for (let ingredient in userIngredients) {
        if (userIngredients[ingredient] < StasisModuleRecipe[ingredient]) {
            let resultsArea = document.getElementById('resultsArea');
console.log(`within Condition 1 for ${ingredient}`);
            const para = document.createElement("p");
            const node = document.createTextNode(`You need ${StasisModuleRecipe[ingredient] - userIngredients[ingredient]} more ${ingredient} to create a stasis module.`);
            para.appendChild(node);
 
            resultsArea.appendChild(para);
        } else if (userIngredients[ingredient] >= StasisModuleRecipe[ingredient]) {
            let resultsArea = document.getElementById('resultsArea');
console.log(`within Condition 2 for ${ingredient}`);
            const para = document.createElement("p");
            const node = document.createTextNode(`You have enough ${ingredient} for ${Math.floor(userIngredients[ingredient] / StasisModuleRecipe[ingredient])} stasis modules.`);
            para.appendChild(node);
 
            resultsArea.appendChild(para);
        }
    }
}


//ACTUALLY APPLYING THE FUNCTIONALITY
let buttonEl = document.getElementById('Evaluate');
buttonEl.onclick = evaluate;

function amtOfProductsCapable(ingredient, pantry, recipe) {
    return Math.floor(pantry[ingredient] / recipe[ingredient]);
}

function assignCountVariables(element) {
    let elementCount = document.getElementById(`${element}Count`).value; //Now I have what the user has entered
    return elementCount;
}

function clearBox(elementID) {
    document.getElementById(`${elementID}`).innerText = "";
}

/*
if (!sulphurineCount || !condCarbonCount) {
    result.innerHTML = "Please fill out how much you have of each element, even if it's 0";
} else if (userIngredients.condensedCarbon >= thermicCondensateRecipe.condensedCarbon && userIngredients.sulphurine >= thermicCondensateRecipe.sulphurine) {
    result.innerHTML = "You can do it!";
} else if (userIngredients.condensedCarbon < thermicCondensateRecipe.condensedCarbon && userIngredients.sulphurine < thermicCondensateRecipe.sulphurine){
    result.innerHTML = "You need more of both!"
} else if (userIngredients.sulphurine < thermicCondensateRecipe.sulphurine) {
    result.innerHTML = "You need more sulphurine!";
} else if (userIngredients.condensedCarbon < thermicCondensateRecipe.condensedCarbon) {
    result.innerHTML = "You need more Condensed Carbon!";
}*/