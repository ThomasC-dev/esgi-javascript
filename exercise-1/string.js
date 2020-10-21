function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    return chaine.split(' ').map(word => ucfirst(chaine.toLowerCase())).join(" ");
}

function camelCase(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
    return chaine.replace(/[aeiouy]/gi, function(e){
        switch(e.toLowerCase()) {
            case "a":
                return 4;
            case "e":
                return 3;
            case "i":
                return 1;
            case "o":
                return 0;
            case "u":
                return "(_)";
            case "y":
                return 7;
        }
    })
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

function verlan(chaine) {
    if (typeof(chaine) != "string" && chaine === "") return ""
    let words = chaine.split(" ");

    let str = "";
    for (let i=0;i<words.length;i++) {
        if (i>0) {
            str += " ";
        }

        let verlanWord = "";
        for (let j=words[i].length-1;j>=0;j--) {
            verlanWord += words[i].charAt(j);
        }
        str += verlanWord;
    }

    return str;
}

function yoda(string) {
    if (typeof string !== "string" && string !== "") return ""

    return string.split(" ").reverse().join(" ")
}
