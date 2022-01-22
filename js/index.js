function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.alert(this);
    }
  };
  xmlhttp.open("GET", "../candidats.xml", true);
  xmlhttp.send();
}
