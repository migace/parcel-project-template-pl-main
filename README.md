Hi!

We have graduated HTML/CSS course and we have developed this project in order to consolidate
knowledge in practice.

Project created by:

👨‍🎓 Team Lead & Front-end developer: Kinga Mikołajczyk <br> 👨‍🎓 Scrum master & Front-end developer:
Mateusz Bajsarowicz <br> 👨‍🎓 Front-end developer: Aleksandra Zabłocka <br> 👨‍🎓 Front-end developer:
Ania Pisarek <br> 👨‍🎓 Front-end developer: Julia Gelij <br> 👨‍🎓 Front-end developer: Joanna Safarian
<br> 👨‍🎓 Front-end developer: Rafał Pelc <br> 👨‍🎓 Front-end developer: Szymon Skrzypczak <br> 👨‍🎓
Front-end developer: Tomasz Borek <br> 👨‍🎓 Front-end developer: Michał Bartkowski <br> 👨‍🎓 Front-end
developer: Szymon Piesiura <br> 👨‍🎓 Front-end developer: Mateusz Ćwir <br> 👨‍🎓 Front-end developer:
Marcin Marszałkowski <br>

Designers prepared for us 3 Versions of team project layout: mobile, tablet, desktop. <br> GoIT
academy prepared technical tasks 📖

Gaining teamwork skills:

- working with the Parcel picker program;
- cooperation in integration and work with Git;
- project branching and merging branch;
- problem solving after doubts;
- scheduling and assigning tasks;
- working with Trello (https://trello.com/);
- working as a team leader
- working in scrum
- presentation of projects.

---

# parcel-project-template

## Zalezności

Na komputerze musi być zainstalowana LTS-wersja [Node.js](https://nodejs.org/en/).

## Przed rozpoczęciem pracy

Jeden raz na projekt zainstalować wszystkie zalezności.

```shell
npm ci
```

### Praca

Włączyć tryp pracy.

```shell
npm run dev
```

W przeglądarce przejść na [http://localhost:1234](http://localhost:1234).

### Deploy

Kod będzie automatycznie się zbierać i robić deploy aktualnej wersji projektu na GitHub Pages, w
gałąź `gh-pages`, za kazdym razem jeśli zostaną wprowadzone zmiany w `main`. Na przykład, po
bezpośrenim push lub po przyjęciu pull-request. Aby to działało musimy w pliku `package.json`
zmienić pole `homepage` i skrypt `build`, zmieniając `nazwe_uzytkownika` i `nazwe_repozytorium` na
swoje.

```json
"homepage": "https://nazwa_uzytkownika.github.io/nazwa_repozytorium",
"scripts": {
  "build": "parcel build src/*.html --public-url /nazwa_repozytorium/"
},
```

Po jakimś czasie stronę mozna będzie zobaczyć na zywo pod adresem który jest wpisany w poprawione
właściwości `homepage`.

## Pliki i folderzy

- Wszystkie partials plików styłów powinny być w folderze `src/sass` i importować się w
  `src/sass/main.scss`
- Zdjęcia dodawajcie w folder `src/images`, przed tym zoptymizujcie te zdjęcia które dodajecie.
  Program po prostu kopiuje wykorzystane zdjęcia aby system nie musiał optymizować je, bo na słabych
  komputerach to moze zająć duzo czasu.
