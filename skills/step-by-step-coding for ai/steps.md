# Arbeitsschritte zur Erstellung einer selbständigen Software-Anwendung

> **Hinweis:** Die Schritte stehen in einer sinnvollen Grundreihenfolge. In echten Projekten werden einzelne Schritte häufig wiederholt, wenn Tests oder Rückmeldungen Verbesserungen erforderlich machen.

## 1. Idee und Problem festlegen

- Beschreibe in ein bis zwei Sätzen, welches Problem die Anwendung lösen soll.
- Lege fest, welchen konkreten Nutzen sie bietet.
- Prüfe, ob bereits ähnliche Programme existieren und was deine Anwendung anders oder einfacher machen soll.

**Ergebnis:** Eine kurze und verständliche Projektidee.

## 2. Zielgruppe bestimmen

- Lege fest, wer die Anwendung benutzen soll.
- Notiere Vorkenntnisse, Bedürfnisse und typische Aufgaben dieser Personen.
- Entscheide, ob das Programm nur für dich, für eine kleine Gruppe oder öffentlich gedacht ist.

**Ergebnis:** Eine Beschreibung der zukünftigen Benutzer.

## 3. Anforderungen sammeln

- Schreibe alle gewünschten Funktionen zunächst ungeordnet auf.
- Trenne zwischen **Muss-Funktionen** und **Kann-Funktionen**.
- Notiere auch nichtfunktionale Anforderungen, zum Beispiel Sicherheit, Geschwindigkeit, Barrierefreiheit und unterstützte Betriebssysteme.

**Ergebnis:** Eine übersichtliche Anforderungsliste.

## 4. Eine erste Version begrenzen

- Wähle nur die Funktionen aus, die für eine nutzbare erste Version unbedingt nötig sind.
- Verschiebe zusätzliche Wünsche in eine Liste für spätere Versionen.
- Formuliere ein klares Ziel, an dem du erkennst, wann die erste Version fertig ist.

**Ergebnis:** Der Umfang des MVP, also des kleinsten sinnvoll nutzbaren Produkts.

## 5. Machbarkeit und Risiken prüfen

- Prüfe, ob du das Projekt mit deinen Kenntnissen, deiner Zeit und deinem Budget umsetzen kannst.
- Untersuche schwierige Punkte frühzeitig mit kleinen Testprogrammen oder Prototypen.
- Notiere Risiken wie unbekannte Technik, kostenpflichtige Dienste, Datenschutz oder fehlende Schnittstellen.

**Ergebnis:** Eine realistische Einschätzung mit möglichen Gegenmaßnahmen.

## 6. Anwendungsart und Zielplattform wählen

- Entscheide dich beispielsweise für Desktop-, Web-, Mobil- oder Kommandozeilen-Anwendung.
- Lege unterstützte Systeme und Versionen fest, zum Beispiel Windows 11 oder aktuelle Linux-Distributionen.
- Überlege, ob die Anwendung vollständig lokal oder teilweise über einen Server arbeiten soll.

**Ergebnis:** Eine klare technische Zielumgebung.

## 7. Technik auswählen

- Wähle eine geeignete Programmiersprache und ein passendes Framework.
- Lege fest, wie Daten gespeichert werden, etwa in Dateien, SQLite oder einer Server-Datenbank.
- Bevorzuge als Anfänger eine einfache, gut dokumentierte und möglichst kostenlose Werkzeugkette.
- Prüfe vorab die Lizenzen aller Bibliotheken und Komponenten.

**Ergebnis:** Ein begründeter Technikplan.

## 8. Bedienung und Aufbau entwerfen

- Zeichne die wichtigsten Fenster, Seiten oder Eingabemasken zunächst auf Papier oder als Wireframe.
- Beschreibe, wie ein Benutzer seine wichtigsten Aufgaben Schritt für Schritt erledigt.
- Plane die Hauptbestandteile der Anwendung und ihren Datenaustausch.
- Halte das Design zunächst einfach und einheitlich.

**Ergebnis:** Oberflächenentwürfe und ein grober Architekturplan.

## 9. Projekt planen

- Zerlege die Funktionen in kleine, überprüfbare Aufgaben.
- Ordne die Aufgaben nach Abhängigkeiten und Priorität.
- Lege erreichbare Zwischenziele fest und plane Zeitreserven ein.
- Definiere für jede Aufgabe, woran ihre Fertigstellung erkennbar ist.

**Ergebnis:** Eine Aufgabenliste mit Meilensteinen.

## 10. Entwicklungsumgebung einrichten

- Installiere Editor oder Entwicklungsumgebung, Laufzeit, Compiler und benötigte Werkzeuge.
- Erstelle ein neues Projekt mit verständlicher Ordnerstruktur.
- Richte eine Versionsverwaltung mit Git ein und speichere regelmäßig kleine, nachvollziehbare Änderungen.
- Trenne geheime Zugangsdaten vom Quellcode und sichere das Repository.

**Ergebnis:** Eine funktionsfähige und abgesicherte Arbeitsumgebung.

## 11. Kleinen Prototyp erstellen

- Implementiere zuerst den wichtigsten Arbeitsablauf mit möglichst wenig Zusatzfunktionen.
- Verwende vorläufige Oberflächen oder Beispieldaten, wenn das Zeit spart.
- Prüfe früh, ob die gewählte Technik grundsätzlich funktioniert.
- Verwirf oder ändere ungeeignete Ansätze, bevor viel weiterer Code entsteht.

**Ergebnis:** Ein einfacher, noch nicht veröffentlichungsreifer Funktionsnachweis.

## 12. Anwendung schrittweise entwickeln

- Setze jeweils nur eine kleine Funktion um.
- Prüfe sie sofort und speichere anschließend einen verständlich benannten Git-Commit.
- Halte Code, Dateinamen und Ordnerstruktur einheitlich und verständlich.
- Behandle Eingabefehler und unerwartete Situationen kontrolliert.
- Aktualisiere die Aufgabenliste und technische Dokumentation während der Entwicklung.

**Ergebnis:** Eine zunehmend vollständige und nachvollziehbare Anwendung.

## 13. Tests durchführen

- Teste einzelne Funktionen automatisch, soweit dies sinnvoll möglich ist.
- Teste das Zusammenspiel der Programmteile und den vollständigen Hauptablauf.
- Prüfe falsche, leere, sehr große und ungewöhnliche Eingaben.
- Teste Installation, Start, Aktualisierung und Deinstallation auf einem sauberen Testsystem.
- Lass möglichst andere Personen die Anwendung ausprobieren und protokolliere gefundene Fehler.

**Ergebnis:** Eine Fehlerliste, Testergebnisse und eine stabilere Anwendung.

## 14. Sicherheit und Datenschutz prüfen

- Speichere Passwörter, Schlüssel und persönliche Daten nicht ungeschützt.
- Validiere alle Eingaben und beschränke Datei-, Netzwerk- und Benutzerrechte auf das notwendige Minimum.
- Aktualisiere unsichere oder veraltete Abhängigkeiten.
- Dokumentiere, welche Daten verarbeitet werden, warum sie benötigt werden und wie sie gelöscht werden können.
- Prüfe vor einer Veröffentlichung die rechtlichen Anforderungen für deinen konkreten Einsatzfall.

**Ergebnis:** Dokumentierte Schutzmaßnahmen und behobene Sicherheitsprobleme.

## 15. Dokumentation und Hilfe erstellen

- Schreibe eine kurze Installations- und Startanleitung.
- Erkläre die wichtigsten Funktionen anhand einfacher Beispiele.
- Dokumentiere Voraussetzungen, bekannte Einschränkungen und typische Fehlerlösungen.
- Ergänze für Entwickler Hinweise zu Projektaufbau, Abhängigkeiten, Build und Tests.
- Füge Lizenz, Versionsnummer und Änderungsprotokoll hinzu.

**Ergebnis:** Eine Benutzer- und Entwicklerdokumentation.

## 16. Veröffentlichung vorbereiten

- Erzeuge ein passendes Installationspaket oder eine portable Version.
- Verwende eine eindeutige Versionsnummer und erstelle Versionshinweise.
- Teste genau das Paket, das später verteilt wird.
- Prüfe Dateien möglichst automatisiert auf Schadsoftware und Manipulationen.
- Sichere die vorherige stabile Version und bereite einen Rückweg bei Problemen vor.

**Ergebnis:** Ein geprüftes Veröffentlichungspaket.

## 17. Anwendung bereitstellen

- Veröffentliche die Anwendung über einen geeigneten, vertrauenswürdigen Kanal.
- Stelle Download, Dokumentation, Prüfsumme und Kontaktmöglichkeit gemeinsam bereit.
- Beginne bei Bedarf mit wenigen Testbenutzern, bevor alle Benutzer die neue Version erhalten.
- Beobachte die ersten Installationen besonders aufmerksam.

**Ergebnis:** Eine installierbare und erreichbare erste Version.

## 18. Betrieb und Wartung organisieren

- Sammle Fehlermeldungen und Rückmeldungen an einer zentralen Stelle.
- Priorisiere Sicherheitsprobleme und schwere Fehler vor neuen Funktionen.
- Aktualisiere Abhängigkeiten, Dokumentation und Tests regelmäßig.
- Sichere wichtige Daten und teste die Wiederherstellung.
- Plane neue Versionen wieder ab Schritt 3, statt Änderungen ungeordnet einzubauen.

**Ergebnis:** Eine dauerhaft gepflegte und verbesserbare Anwendung.

## Einfache Abschluss-Checkliste

- [ ] Problem, Zielgruppe und Nutzen sind klar beschrieben.
- [ ] Die Muss-Funktionen der ersten Version sind festgelegt.
- [ ] Plattform, Technik und Datenspeicherung sind entschieden.
- [ ] Aufgaben, Risiken und Meilensteine sind dokumentiert.
- [ ] Git und eine sichere Entwicklungsumgebung sind eingerichtet.
- [ ] Der wichtigste Benutzerablauf funktioniert vollständig.
- [ ] Fehlerfälle, Installation und unterstützte Systeme wurden getestet.
- [ ] Sicherheit, Datenschutz und Lizenzen wurden geprüft.
- [ ] Benutzerhilfe und technische Dokumentation sind vorhanden.
- [ ] Das endgültige Veröffentlichungspaket wurde separat getestet.
- [ ] Fehlerannahme, Updates, Datensicherung und Wartung sind organisiert.

## Quellenbasis

Die Reihenfolge orientiert sich am üblichen Software Development Life Cycle mit Planung, Anforderungsanalyse, Entwurf, Entwicklung, Test, Bereitstellung und Wartung [web:1][web:3][web:9]. Sicherheitsanforderungen sollten nicht erst am Ende geprüft, sondern in den gesamten Entwicklungsprozess eingebunden werden [web:2][web:7].
