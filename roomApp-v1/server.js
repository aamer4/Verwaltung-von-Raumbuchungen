const fs = require("fs");

const http = require("http");
const erro = "public/404.html";
//createServer() Erstellt einen neuen HTTP-Server in Form eines Server-Objekts

http.createServer(function (request, response) {

  let url = request.url;
  let method = request.method;
  if (url === "/") {
    response.writeHead(200);
    fs.readFile("public/dashboard.html", function (err, data) {
      response.end(data);
    });
  }

  else if (method === "GET") {
    if (url === "/RaeumeListe.html") {
      response.writeHead(200);
      response.end(createWebsite(createList()));
    }

    else {
      fs.readFile("./public" + url, function (err, data) {
        if (err) {
          response.writeHead(404);
          fs.readFile("public/404.html", function (err, data) {
            response.end(data);
          });
        }
        else {
          response.writeHead(200);
          response.end(data);
        }
      });
    }
  }

}).listen(8020);





/*dynamisch erzeugen */

class Raum {
  constructor(nummer, bezeichnung, gebaeude, kapazitaet, ...ausstattungsmerkmale) {
    this.nummer = nummer;
    this.bezeichnung = bezeichnung;
    this.gebaeude = gebaeude;
    this.kapazitaet = kapazitaet;
    this.ausstattungsmerkmale = ausstattungsmerkmale;
  }
}

let raum1 = new Raum("A.E.01", "Hoersaal", "Informatik", 300, ["3 Beamer", " 2 Tafeln"]);
let raum2 = new Raum("B.2.20", "Computerraum", "Informatik", 40, ["1 Beamer", "1 Tafeln", " 30 PCs"]);
let raum3 = new Raum("C.3.02", "Besprechungsraum", "Informationstechnik", 25, ["1 Beamer", " 1 Tafeln", " 15 Tischplätze"]);
let raeume = [raum1, raum2, raum3];

function createList() {
  let inhalt="";
  for (let ite of raeume) {
    inhalt += `<li>
                  <a href="Raumdetails.html">Raum: ${ite.nummer}</a>
                  <ul>
                      <li>Bezeichnung: ${ite.bezeichnung}</li>
                      <li>Gebaeude: ${ite.gebaeude}</li>
                      <li>Kapazitaet: ${ite.kapazitaet}</li>
                      <li>Ausstattungsmerkmale: ${ite.ausstattungsmerkmale}</li>
                  </ul>
              </li>`;
  }
  return inhalt;
}

function createWebsite(inhalt) {
  return `<!DOCTYPE html>
    <html lang="de">
    
    <head>
      <title>Liste der verfügbaren Räume</title>
      <meta charset="utf-8" />
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <link rel="stylesheet" type="text/css" href="css/flexbox.css">
      <link rel="shortcut icon" type="image/x-icon" href="img/logo.png" />
    </head>
    
    <body id="ContainerRED">
        <header>
          <div id="TitelAndLogo">
            <figure>
              <a href="Dashboard.html">
                <img src="img/logo.png" alt="FH Dortmund logo" width="40" />
              </a>
            </figure>
            <h1>Liste der verfügbaren Räume</h1>
          </div>
        </header>
    
        <nav>
          <ul>
            <li><a href="Raumdetails.html">Raumdetails</a></li>
            <li> | </li>
            <li><a href="Buchungsdetails.html">Buchungsdetails</a></li>
            <li> | </li>
            <li><a href="Seminar_Anlegen.html">Anlegen eines Seminars</a></li>
          </ul>
          <hr />
        </nav>
    
        <div id="ContainerGREEN">
            <main id="ContainerBLUE">
              <form action="https://labs.inf.fh-dortmund.de/roomReservationService/testRoomSearch.php" method="GET">
                <fieldset>
                  <legend>Suchen nach Räumen</legend>
                  <label for="raeumeSuche"></label>
                  <input id="raeumeSuche" list="dataRaeumeSuche" name="roomno" pattern="[A-Z][\.]([E1-3])[\.]{1}[0-9]{2}" />
                  <datalist id="dataRaeumeSuche">
                    <option value="A.E.01">
                    <option value="B.2.20">
                    <option value="C.3.02">
                  </datalist>
    
                  <input type="submit" value="finden" />
                </fieldset>
              </form>
    
              <ol>${inhalt}</ol>
            
            </main>
    
          <aside>
            <h4>Zusatzinformationen</h4>
            <ul>
              <li>
                <a href="https://www.fh-dortmund.de/de/index.php">FH Dortmund Homepage</a>
              </li>
              <li>Support</li>
              <li>zuletzt geändert am: 30.11.2019</li>
            </ul>
          </aside>
    
        </div>
    
        <footer>
          <small>&copy; Aamer</small>
        </footer>
    </body>
    
    </html>`
}