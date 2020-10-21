function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    const words = chaine.split(" ");
    let str = "";
    for(value of words) {
        str += ucfirst(value) + " ";
    }
    return str;
}

function camelCase(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).split(" ").join("");
}

function snake_case(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    const words = chaine.split(" ");
    let str = "";
    for(value of words) {
        if(str.length > 0)
            str += "_" + value.toLowerCase();
        else
            str +=  value.toLowerCase();
    }
    return str;
}

function leet(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";

    const characterMap = { "A": "4", "E": "3", "I": "1", "O": "0", "U": "(_)", "Y": "7" };

    for(i = 0; i < chaine.length; i++) {
        if(chaine.charAt(i) in characterMap) {
            chaine = chaine.substr(0, i) + characterMap[chaine.charAt(i)] +  chaine.slice(i + 1);
        }
    }
    return chaine;
}

function prop_access(obj, path) {
    if (typeof(obj) != "object") return path;
    if (typeof(path) != "string" || path === "") return obj;
    let pathSplitted = path.split(".");
    for (let elem of pathSplitted) {
        if (typeof(obj[elem]) == "undefined") {
            return path;
        }
        obj = obj[elem];
    }
    return obj;
}
