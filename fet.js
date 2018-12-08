function openPage(pageName, elmnt, color) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function openTab(tabName, e, color) {
    var j, tabcontent1, tablinks1;

    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (j = 0; j < tabcontent1.length; j++) {
        tabcontent1[j].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

}
document.getElementById("defaultOpen").click();