let inhalt = document.getElementById("inhalt");


let p = document.createElement("p");
p.textContent = "+";
p.id="plus";
p.classList.add("Kacheln");



inhalt.append(p);

p.addEventListener('click', function () {
    let neuA = document.createElement("a");
    let neuP = document.createElement("p");
    neuP.classList.add("Kacheln");

    let titel = prompt("Bitte geben Titel ein!");
    if(titel==null){return;}
    neuP.textContent = titel;
    let link = prompt("Bitte geben Link ein!");
    if(link==null){return;}
    neuA.href ="https://" + link;
    neuA.target="_blank";

    neuA.append(neuP);
    inhalt.append(neuA);
});


//let name = prompt("Bitte geben Sie Ihren Namen ein!");


