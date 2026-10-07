# DORI – dein Fitness-Hund

Ein Tamagotchi-Spiel fürs iPhone: 30 Minuten Training füttern Dori, dein Morgengewicht gibt ihm Wasser,
und deine Energiebilanz sieht man an seiner Figur: Essen macht ihn runder, Sport wieder schlanker.

**App öffnen:** https://daksikanoffice-boop.github.io/doridori/

## Auf den Home-Bildschirm

1. Den Link oben in Safari öffnen.
2. Auf **Teilen** tippen (bei neuem Safari zuerst unten auf **•••**).
3. **Zum Home-Bildschirm** → **Hinzufügen**.

DORI startet dann im Vollbild wie eine App und funktioniert auch offline.

## Essen tracken

Unter **Essen** scannst du den Strichcode deiner Lebensmittel oder tippst die Artikelnummer ein.
Die Nährwerte kommen von [Open Food Facts](https://world.openfoodfacts.org), der offenen Lebensmittel-Datenbank.

Doris Figur folgt deiner Energiebilanz: **Gegessen − Grundbedarf − Sport**.
Isst du mehr, als du verbrauchst, wird Dori sofort runder. Training verbrennt Kalorien und macht ihn wieder schlanker.
Isst du über längere Zeit zu wenig, wird er dünn.

## Strava verbinden

Unter **Einstellungen → Strava** verbindest du DORI mit deinem Strava-Konto. Danach kommen deine Aktivitäten
von selbst: die Dauer zählt fürs Futter, die verbrannten Kalorien für Doris Figur.

1. Auf [strava.com/settings/api](https://www.strava.com/settings/api) eine eigene API-App anlegen
   (Name: DORI, Website `https://daksikanoffice-boop.github.io/doridori/`,
   Authorization Callback Domain `daksikanoffice-boop.github.io`).
2. Client-ID und Client Secret in DORI eintragen und **Mit Strava verbinden** tippen.

Für eigene API-Apps verlangt Strava seit Juni 2026 ein Strava-Abo. Client Secret und Zugang bleiben nur auf
deinem iPhone und kommen nicht ins Backup.

## Deine Daten

Trainings, Gewichte und Fortschritt werden nur auf deinem iPhone gespeichert, nicht in diesem Repository.
Unter Einstellungen → Speicher kannst du ein Backup sichern und wieder laden.

Der Barcode-Scanner nutzt [ZXing](https://github.com/zxing-js/library) (Apache-2.0, siehe `zxing-LICENSE.txt`).
