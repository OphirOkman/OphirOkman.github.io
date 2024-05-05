// Function to navigate between sections
function navigateTo(sectionName) {
  var content = document.getElementById("content");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      content.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", sectionName + ".html", true);
  xhttp.send();
}

// Load default content on page load
window.onload = function () {
  navigateTo("home");
};
