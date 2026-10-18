# Interview: Von der Idee zum Projektplan (`plan.md`)

Englische Version: [steps.md](steps.md)

Dieses Dokument ist eine Interview-Anleitung. Ein KI-Assistent führt damit ein Gespräch mit dem Benutzer und schreibt die Antworten am Ende in die Datei `plan.md`.

> **Hinweis:** Die Schritte folgen dem üblichen Software Development Life Cycle. In echten Projekten werden einzelne Schritte wiederholt, wenn Tests oder Rückmeldungen Verbesserungen erforderlich machen.

## Regeln für den Assistenten

1. Stelle **eine Frage nach der anderen** (bei Rückfragen im Chat mit dem Werkzeug `ask_user`) und warte auf die Antwort.
2. Gib, wenn möglich, Antwortvorschläge zur Auswahl vor. Markiere die empfohlene Option mit „(Empfohlen)“. Der Benutzer kann immer frei antworten.
3. Frage nach, wenn eine Antwort zu vage ist. Triff keine stillen Annahmen.
4. Antwortet der Benutzer „weiß ich nicht“, schlage eine einfache Standardlösung vor und notiere sie als **Annahme** in `plan.md`.
5. Gib nach jedem Abschnitt in einem Satz wieder, was du verstanden hast.
6. Schreibe Geheimnisse (Passwörter, Schlüssel) niemals in `plan.md` und niemals in `.gitignore`. Notiere nur die **Namen** der Variablen, zum Beispiel `OLLAMA_API_KEY`, nie die Werte.
7. Schreibe `plan.md` erst nach dem letzten Abschnitt. Zeige sie dem Benutzer und frage, ob etwas fehlt oder geändert werden soll.

## Fragen

### 1. Idee und Problem

- Welches Problem soll die Anwendung lösen? (ein bis zwei Sätze)
- Welchen konkreten Nutzen bietet sie?
- Gibt es ähnliche Programme? Was soll deine Anwendung anders oder einfacher machen?

### 2. Zielgruppe

- Wer soll die Anwendung benutzen?
- Welche Vorkenntnisse haben diese Personen, und welche typischen Aufgaben erledigen sie?
- Ist das Programm nur für dich, für eine kleine Gruppe oder öffentlich gedacht?

### 3. Anforderungen

- Welche Funktionen wünschst du dir? (zunächst ungeordnet)
- Welche davon sind **Muss-Funktionen**, welche **Kann-Funktionen**?
- Welche Anforderungen gibt es an Sicherheit, Geschwindigkeit, Barrierefreiheit und unterstützte Betriebssysteme?

### 4. Erste Version (MVP)

- Welche Funktionen braucht die erste nutzbare Version unbedingt?
- Welche Wünsche verschieben wir auf spätere Versionen?
- Woran erkennst du, dass die erste Version fertig ist?

### 5. Machbarkeit und Risiken

- Wie viel Zeit und Budget stehen zur Verfügung, und welche Kenntnisse bringst du mit?
- Welche Punkte sind unbekannt oder schwierig (neue Technik, kostenpflichtige Dienste, Datenschutz, fehlende Schnittstellen)?
- Was könnte man früh mit einem kleinen Test ausprobieren?

### 6. Anwendungsart und Zielplattform

- Soll es eine Desktop-, Web-, Mobil- oder Kommandozeilen-Anwendung werden?
- Welche Systeme und Versionen sollen unterstützt werden?
- Soll alles lokal laufen oder teilweise über einen Server?

### 7. Technik

- Gibt es eine bevorzugte Programmiersprache oder ein Framework? Sonst schlage eine einfache, gut dokumentierte, kostenlose Lösung vor.
- Wie sollen Daten gespeichert werden (Dateien, SQLite, Server-Datenbank)?
- Gibt es Vorgaben zu Lizenzen von Bibliotheken?

### 8. Bedienung und Aufbau

- Welche Fenster, Seiten oder Eingabemasken braucht die Anwendung?
- Wie erledigt ein Benutzer seine wichtigste Aufgabe Schritt für Schritt?
- Welche Hauptbestandteile hat die Anwendung, und welche Daten tauschen sie aus?

### 9. Projektplanung

- In welche kleinen, überprüfbaren Aufgaben lassen sich die Funktionen zerlegen?
- Welche Aufgaben hängen voneinander ab, und was hat Priorität?
- Welche Zwischenziele (Meilensteine) sind sinnvoll, und woran erkennt man jeweils die Fertigstellung?

### 10. Entwicklungsumgebung

- Welche Werkzeuge (Editor, Laufzeit, Compiler) sind schon installiert, welche fehlen?
- Soll das Projekt mit Git versioniert werden, und wo liegt das Repository?
- Wie werden geheime Zugangsdaten vom Quellcode getrennt?
  - Empfohlenes Vorgehen: Die Werte stehen nur in einer lokalen `.env`-Datei. Diese Datei steht in `.gitignore`, damit Git sie nicht erfasst. Im Repository liegt eine `.env.example` mit leeren Platzhaltern.
  - Wichtig: `.gitignore` ist selbst öffentlich und versteckt **keine** Werte. Sie schützt nur Dateien, die noch nicht von Git erfasst wurden. Wurde ein Geheimnis bereits committet, bleibt es im Verlauf. Dann muss der Schlüssel sofort erneuert werden.

### 11. Prototyp

- Welcher Arbeitsablauf soll im Prototyp als Erstes funktionieren?
- Welche Beispieldaten oder vorläufigen Oberflächen dürfen verwendet werden?
- Was soll der Prototyp beweisen?

### 12. Schrittweise Entwicklung

- Wie sollen Code, Dateinamen und Ordner benannt und strukturiert werden?
- Wie sollen Eingabefehler und unerwartete Situationen behandelt werden?
- Wie oft soll committet werden, und wie wird die Aufgabenliste aktuell gehalten?

### 13. Tests

- Was soll automatisch getestet werden?
- Welche Fehl-, Leer- und Extremeingaben sollen geprüft werden?
- Wer probiert die Anwendung aus, und auf welchem sauberen Testsystem werden Installation und Deinstallation getestet?

### 14. Sicherheit und Datenschutz

- Welche Daten werden verarbeitet, warum, und wie können sie gelöscht werden?
- Welche Rechte (Dateien, Netzwerk, Benutzer) braucht die Anwendung höchstens?
- Gibt es rechtliche Anforderungen für den konkreten Einsatzfall?

### 15. Dokumentation

- Welche Anleitungen brauchen Benutzer (Installation, Start, Beispiele, Fehlerlösungen)?
- Welche Hinweise brauchen Entwickler (Aufbau, Abhängigkeiten, Build, Tests)?
- Welche Lizenz, Versionsnummer und welches Änderungsprotokoll sollen verwendet werden?

### 16. Veröffentlichung vorbereiten

- Welches Paketformat soll es sein (Installer, portable Version, Container)?
- Wie wird das Paket vor der Verteilung getestet und auf Manipulation geprüft?
- Wie sieht der Rückweg zur vorherigen stabilen Version aus?

### 17. Bereitstellung

- Über welchen vertrauenswürdigen Kanal soll veröffentlicht werden?
- Sollen zuerst wenige Testbenutzer die Anwendung bekommen?
- Wie können Benutzer Kontakt aufnehmen, und wo gibt es Prüfsumme und Dokumentation?

### 18. Betrieb und Wartung

- Wo werden Fehlermeldungen und Rückmeldungen gesammelt?
- Wie werden Sicherheitsprobleme und Abhängigkeits-Updates priorisiert?
- Wie werden Daten gesichert, und wie wird die Wiederherstellung getestet?

## Ergebnis: `plan.md`

Lege `plan.md` im Projektordner an. Verwende pro Abschnitt eine Überschrift mit der Nummer und dem Namen oben, darunter die Antworten des Benutzers in kurzen Stichpunkten. Ergänze am Anfang:

- **Zusammenfassung** in zwei bis drei Sätzen.
- **Annahmen**: alles, was der Assistent vorgeschlagen hat, weil der Benutzer es nicht wusste.
- **Offene Fragen**: alles, was noch geklärt werden muss.

Füge am Ende eine **Aufgabenliste** mit den Meilensteinen aus Abschnitt 9 als Checkboxen hinzu.

## Abschluss-Checkliste

- [ ] Problem, Zielgruppe und Nutzen sind klar beschrieben.
- [ ] Die Muss-Funktionen der ersten Version sind festgelegt.
- [ ] Plattform, Technik und Datenspeicherung sind entschieden.
- [ ] Aufgaben, Risiken und Meilensteine sind dokumentiert.
- [ ] Git und eine sichere Entwicklungsumgebung sind geplant.
- [ ] Der wichtigste Benutzerablauf ist beschrieben.
- [ ] Tests, Installation und unterstützte Systeme sind geplant.
- [ ] Sicherheit, Datenschutz und Lizenzen sind geklärt.
- [ ] Benutzerhilfe und technische Dokumentation sind geplant.
- [ ] Veröffentlichung und Wartung sind organisiert.
- [ ] Der Benutzer hat `plan.md` gelesen und freigegeben.

## Ideen für weitere Trainingsmodule

Die Abschnitte eignen sich als Vorlage für neue Module im Ordner `training/`:

- **Modul „Projektplanung mit KI“**: Ein Projekt mit diesem Interview planen (Abschnitte 1–9).
- **Modul „Sicher entwickeln“**: Abschnitte 10 und 14 mit Geheimnissen, Abhängigkeiten und Datenschutz vertiefen.
- **Modul „Testen und Veröffentlichen“**: Abschnitte 13, 16 und 17 mit automatischen Tests und Release-Paketen üben.
- **Modul „Betrieb und Wartung“**: Abschnitt 18 mit Fehlererfassung, Updates und Datensicherung behandeln.

## Quellenbasis

Die Reihenfolge orientiert sich am üblichen Software Development Life Cycle mit Planung, Anforderungsanalyse, Entwurf, Entwicklung, Test, Bereitstellung und Wartung [web:1][web:3][web:9]. Sicherheitsanforderungen sollten nicht erst am Ende geprüft, sondern in den gesamten Entwicklungsprozess eingebunden werden [web:2][web:7].
