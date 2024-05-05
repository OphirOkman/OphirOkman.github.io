// Function to navigate between sections
function navigateTo(sectionName) {
  var content = document.getElementById("content");
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      content.innerHTML = this.responseText;
    }
  };
  http.open("GET", sectionName + ".html", true);
  http.send();
}

// Load default content on page load
window.onload = function () {
  navigateTo("home");
};
