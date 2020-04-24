let tabs = document.querySelectorAll(".tabs >li button");
console.log(tabs);
let contents = document.querySelectorAll(".content>li");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((node) => {
      node.classList.remove("active");
    });
    console.log(tab);
    tab.classList.add("active");
    let index = [].indexOf.call(tabs, tab);
    console.log(index);
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    contents[index].classList.add("active");
  });
});
