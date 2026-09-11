# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

[Desktop](./readme%20img/mobile-simulator-1789024029786.png)
[Mobile](./readme%20img/mobile-simulator-1789023978301.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Vanilla Js

### What I learned

first time using async and await function and i learned how to handle error states i also did display the error. i previously used disabled:true on the AdviceButton. but that would be a headace for screen reader who depend on the focus state to click a button. disabled:true removes the focus on the button to the document body. rather i used aria-disabled ="true" that anounce that the button should be disable and on my js i wrote a check state to check if its annouced the disable state if so then do not run the codes that request for a new advice making the button unactive.

### Continued development

i would love to improve my knowledge on making api and async and await. handling errors;

### Useful resources

### AI Collaboration

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@codewithsuccess](https://x.com/codewithsuccess?s=21)
