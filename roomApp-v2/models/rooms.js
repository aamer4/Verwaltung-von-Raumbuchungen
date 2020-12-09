/*dynamisch erzeugen */
/*war ohne buchungen ok*/
class Buchung {
  constructor(bezeichnung, startzeit, endzeit, gebuchtVon, anzahlDerTeilnehmer, beschreibung) {
      this.bezeichnung = bezeichnung;
      this.startzeit = startzeit;
      this.endzeit = endzeit;
      this.gebuchtVon = gebuchtVon;
      this.anzahlDerTeilnehmer = anzahlDerTeilnehmer;
      this.beschreibung = beschreibung;
  }
}

let buchung1 = new Buchung("Web Tech", new Date('October 09, 2019 10:15'), new Date('October 09, 2019 11:50'), "Prof. Dr. Sven Jörges", 100, "Vorlesung");
let buchung2 = new Buchung("Pk2", new Date('November 13, 2019 14:15'), new Date('November 13, 2019 15:50'), "Prof. Dr. Dirk Wiesmann", 40, "Praktikum");
let buchung3 = new Buchung("KI", new Date('November 20, 2019 12:00'), new Date('November 20, 2019 13:00'), "Prof. Dr. Sebastian Bab ", 30, "Übung");
/**A2 End*/


/**A1 */
class Raum {
  constructor(nummer, bezeichnung, gebaeude, kapazitaet,...ausstattungsmerkmale) {
      this.nummer = nummer;
      this.bezeichnung = bezeichnung;
      this.gebaeude = gebaeude;
      this.kapazitaet = kapazitaet;
      this.ausstattungsmerkmale = ausstattungsmerkmale;
      /**A3 1*/
      this.buchungen = [];
  }
  /**A3 2*/
  /*in der class darf nicht das schlüsselwort "function" geschrieben*/
  addBuchung(buchung) {
      this.buchungen.push(buchung);

      this.buchungen.sort(function (x, y) { return x.startzeit - y.startzeit; });
  };
}

let raum1 = new Raum("A.E.01", "Hoersaal", "Informatik", 300, ["3 Beamer", " 2 Tafeln"]);
let raum2 = new Raum("B.2.20", "Computerraum", "Informatik", 40, ["1 Beamer", "1 Tafeln", " 30 PCs"]);
let raum3 = new Raum("C.3.02", "Besprechungsraum", "Informationstechnik", 25, ["1 Beamer", " 1 Tafeln", " 15 Tischplätze"]);


raum1.addBuchung(buchung1);
raum1.addBuchung(buchung2);
raum1.addBuchung(buchung3);

let raeume = [raum1, raum2, raum3];

module.exports=raeume;
