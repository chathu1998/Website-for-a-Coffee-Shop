/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*function myFunction() {
  document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}
*/

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.onclick = function () {
	search.classList.toggle("active");
};