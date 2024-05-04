//Put the year in the footer
let dateBox = document.getElementById("fecha");
if (dateBox != null) {
    let year = new Date().getFullYear();
    dateBox.innerHTML = "&copy;" + year.toString();
}