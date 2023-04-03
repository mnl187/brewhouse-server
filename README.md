# Brewhouse
Aplikacja Piwowarska

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Opis

Brewhouse to aplikacja piwowarska, która pomaga tworzyć i zarządzać przepisami na piwo. Umożliwia użytkownikom dodawanie składników, ustalanie stylu piwa oraz przechowywanie wszystkich informacji w jednym miejscu.

# Funkcje

- Tworzenie i edycja przepisów na piwo
- Zarządzanie składnikami, takimi jak słód, chmiel, drożdże i dodatki
- Wyszukiwanie przepisów po stylu lub nazwie
- Usuwanie przepisów

## Wymagania
- React 18.x
- Node.js 18.x
- MongoDB 6.x

Alikacja backendowa znajduje się pod [linkiem](https://github.com/mnl187/brewhouse-server).

Alikacja frontendowa znajduje się pod [linkiem](https://github.com/mnl187/brewhouse-spa)

## Instalacja Backend + MongoDB

1. Sklonuj repozytorium na lokalnym komputerze:

```bash
 git clone https://github.com/mnl187/brewhouse-server.git
 ```
2. Zainstaluj zależności:

```bash
   cd brewhouse-server
   npm install
```

4. Zainstaluj bazę danych MongoDB

- Pobierz instalkę z tego [linku](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.5-signed.msi)
- Utwórz baze danych 'brewhouse'
- Utwórz w niej dokument 'beers'
- W pliku [package-lock.json](package-lock.json) skonfiguruj skrypt uruchamiający bazę danych, przykład:
```bash
"start-mongo": "cd /d C:/Program Files/MongoDB/Server/6.0/bin&&mongod.exe" 
```

3. Uruchom serwer i bazę danych:
```bash
   npm start
   npm run start-mongo 
```

## Instalacja Frontend

1. Sklonuj repozytorium na lokalnym komputerze:

```bash
 git clone https://github.com/mnl187/brewhouse-spa.git
 ```
2. Zainstaluj zależności:

```bash
   cd brewhouse-spa
   npm install
```
3. Uruchom aplikację:
```bash
   npm start
```
4. Otwórz przeglądarkę i przejdź do http://localhost:3000.


5. Zaloguj się używając poniższych danych

- Nazwa użytkownika:
```bash
username
```
- Hasło
```bash
password
```

## Licencja

Ten projekt jest objęty licencją MIT. Więcej informacji można znaleźć w pliku [LICENSE](LICENSE).