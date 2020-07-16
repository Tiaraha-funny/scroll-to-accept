console.log('it works');

const terms = document.querySelector('.terms-and-conditions');
// const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

const obCallback = payload => {
    //when the HR  is 100% on the screen, remove the disable at the
   if (payload[0].intersectionRatio === 1) {
       //make the accept button clickable!
       button.disabled = false;
       //stop observing the button
       ob.unobserve(terms.lastElementChild);
    }
};
//createthe observe and give it an action
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});
//this will look for the HR element
ob.observe(terms.lastElementChild);
