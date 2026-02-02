//Put the year in the footer
let dateBox = document.getElementById("year");
if (dateBox != null) {
    let year = new Date().getFullYear();
    dateBox.innerHTML = "&copy;" + year.toString();
}