// Add your JavaScript code here
// You can use a library like Leaflet.js to create the map
// Here's an example of how to create a map using Leaflet.js:
var map = L.map("map").setView([ 20.296059,  85.824539], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
// Add event listeners to the buttons in the title bar
document
  .querySelector(".button-container button:nth-child(1)")
  .addEventListener("click", function () {
    // Add your code here
  });
document
  .querySelector(".button-container button:nth-child(2)")
  .addEventListener("click", function () {
    // Add your code here
  });
document
  .querySelector(".button-container button:nth-child(3)")
  .addEventListener("click", function () {
    // Add your code here
  });

// Get the modal
var modal = document.getElementById("user-modal");

// Get the button that opens the modal
var btn = document.getElementById("settings");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  const user = json[2];
  document.getElementById("name").value = user['name'];
  document.getElementById("username").value = user['username'];
  document.getElementById("email").value = user['email'];
  document.getElementById("phone").value = user['phone'];
  // user['geo']['latitude']

})();
