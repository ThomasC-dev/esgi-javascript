function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            str += " ";
        }
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}

function camelCase(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";

    let str = "";
    let string = chaine.replace('_',' ');
    let words = string.split(" ");
    for(let i=0;i<words.length;i++) {
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}

function snake_case(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
    if (typeof string !== "string" && string !== "") return "";
    const toCrypt = {
        A: 4,
        E: 3,
        I: 1,
        O: "0",
        U: "(_)",
        Y: 7
    }

    for (let key in toCrypt) {
        chaine = chaine.replace(new RegExp(key, 'g'), toCrypt[key]);
        chaine = chaine.replace(new RegExp(key.toLowerCase(), 'g'), toCrypt[key]);
    }
    return chaine;
}

function prop_access(object, path) {
  if (typeof path != "string") {
    return object;
  }

  if (typeof object != "object" || object == null) {
    console.log(path + " not exist");
    return;
  }
  if (path === "") {
    return object;
  }

  const props = path.split(".");
  let property = object;
  props.forEach(function (prop) {
    if (!property.hasOwnProperty(prop)) {
      console.log(path + " not exist");
      return;
    }
    property = property[prop];
  });
  return property;
}

function verlan(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    return chaine.split(" ").map((word) => {
        return word.split("").reverse().join("")
    }).join(" ")
}

function yoda(string) {
    if (typeof string !== "string" && string !== "") return ""
    return string.split(" ").reverse().join(" ")
}
