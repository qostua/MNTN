let paginationItems = document.querySelectorAll('.pagination-right__item');
let mainPageArticles = document.querySelectorAll('.main-page-article');

let articlesCoordinate = function (i) {
  let y = mainPageArticles[i].getBoundingClientRect().top + window.pageYOffset;
  return y;
}
let paginationClick = function (item, i) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (i > 0) {
      window.scrollTo({
          top: articlesCoordinate(i - 1) - 100,
          behavior: "smooth"
      });
    } else {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    }
  });
}
for (let i = 0; i < paginationItems.length; i++) {
  paginationClick(paginationItems[i], i);
}
