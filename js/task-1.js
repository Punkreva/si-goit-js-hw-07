const list = document.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);
const titles = document.querySelectorAll("h2");
titles.forEach(title =>
    console.log(`Category: ${title.textContent}\nElements: ${title.parentElement.querySelectorAll("ul > li").length}`));
