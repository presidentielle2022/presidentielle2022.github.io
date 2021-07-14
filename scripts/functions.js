const showSmallMenu = () => {
    var x = document.getElementById("small_menu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

const ajouteLigne = (table , texte) => {
    var refTable = table;
    var nouvelleLigne = refTable.insertRow();
    var nouvelleCellule = nouvelleLigne.insertCell();
    nouvelleCellule.innerHTML = texte;
};

const searchForParam = (param) => {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.has(param);
};

const getParamValue = (param) => {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
};

const redirect = (url) => {
    document.location.href = url;
};

//génére un nombre entre 0 et max (max exclu)
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
