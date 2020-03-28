// 1. Select the section with an id of container without using querySelector.
const container = document.getElementById('container');
console.log(container);

// 2. Select the section with an id of container using querySelector.
// const container = document.querySelector('#container');
// console.log(container);

// 3. Select all of the list items with a class of “second”.
// const secondLis = document.querySelectorAll('.second');
// console.log(secondLis);

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
// const olThirdLi = document.querySelector('ol .third');
// console.log(olThirdLi);

// 5. Give the section with an id of container the text “Hello!”.
// const sectionContainer = document.querySelector('#container');
// sectionContainer.innerText = 'Hello!';

// 6. Add the class main to the div with a class of footer.
// const footer = document.querySelector('.footer');
// footer.classList.add('main');
// console.log(footer);
// 7. Remove the class main on the div with a class of footer.
// setTimeout(function() {
//   footer.classList.remove('main');
//   console.log(footer);
// }, 500);

// 8. Create a new li element.
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// console.log(li);
// 9. Give the li the text “four”.
// setTimeout(function() {
//   li.innerText = 'four';
//   console.log(li);
//   // 10. Append the li to the ul element.
//   ul.append(li);
// }, 500);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
// const olListItems = document.querySelectorAll('ol li');
// for (li of olListItems) {
//   li.style.backgroundColor = 'green';
// }

// 12. Remove the div with a class of footer
// const footer = document.querySelector('.footer');
// footer.remove();