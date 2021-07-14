
var batailleID;
if (searchForParam("id")){
    batailleID = getParamValue("id");
    batailleID = parseInt(batailleID, 10);
    if (batailleID < 0 || batailleID >= data['batailles']['bataille'].length || isNaN(batailleID) === true){
        redirect("map.html");
    }
} else {
    redirect("map.html");
}

const bataille = data['batailles']['bataille'][batailleID];
const belligerantsGroup1 = bataille.belligerants['group1']['entite'];
const belligerantsGroup2= bataille.belligerants['group2']['entite'];


if (bataille.illustration !== null){
    document.getElementById("illustration").setAttribute("src", bataille.illustration );
}
window.document.title = bataille.nom;
document.getElementById("nom").innerHTML = bataille.nom;
document.getElementById("date").innerHTML = bataille.date;
document.getElementById("date2").innerHTML = bataille.date;
document.getElementById("header").style.backgroundImage= "url('"+bataille.illustration+"')";
document.getElementById("illustration_link").setAttribute("href", bataille.illustration);
document.getElementById("lieu").innerHTML = bataille.lieu;
document.getElementById("issue").innerHTML = bataille.issue;
var b1 = document.getElementById("belligerantsGroup1");
belligerantsGroup1.forEach((item) => {
    b1.innerHTML = b1.innerHTML + "<li>"+item+"</li>";
});
var b2 = document.getElementById("belligerantsGroup2");
belligerantsGroup2.forEach((item) => {
    b2.innerHTML = b2.innerHTML + "<li>"+item+"</li>";
});

document.getElementById("texte").innerHTML = bataille.articleHtml;
