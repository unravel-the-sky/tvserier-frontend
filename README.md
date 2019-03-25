# tvserier-frontend

Here is my results for the part coding challenge. it's not 100% complete and there are a bunch of things that i'd have liked to do differently if i had more time and energy.. but i'm still happy with the results.

Frontend decisions:
- i chose vuejs to work with because i'm familiar with it and like it a lot
- there was no design guideline sent to me so i did my own sketches and design thinking for the project.
- on first load, user has to enter a username then click Enter
- it's mainly for UX perspective for the whole flow
- first time with no file, user has to click on the top button and submit the tvmaze.txt file (it's not handling if the file is not supported etc, due to time limitations i assumed user is good and the file is identical to what i had received)
- once upload is completed i receive 200 status and close the modal
- then user can click on the buttons to navigate between different views
- due to time limitations i made all the different views as 'modes', so the code got a bit messy, but if i have the idea of how to do it differently. i'd basically separate into separate pages and route them separately.
- it could be optimised by many ways as said, but so far so good.
- hope you like it!

Sadan


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```
