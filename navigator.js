// Navigation between different pages on the website
function loadDoc(filename) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("vanubuntu-navigator-body").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "/" + filename, true);
  xhttp.send();
}
