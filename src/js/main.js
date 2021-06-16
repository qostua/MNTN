let paginationItems = document.querySelectorAll('.pagination-right__item');
let mainPageArticles = document.querySelectorAll('.main-page-article');

let articlesCoordinate = function (i) {
  let y = mainPageArticles[i].getBoundingClientRect().top + window.pageYOffset;
  return y;
}

let articlesWindowCoordinate = function (i) {
  let y = mainPageArticles[i].getBoundingClientRect().top;
  return y;
}

let articlesHeight = function (i) {
  let h = mainPageArticles[i].getBoundingClientRect().height;
  return h;
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

let paginationScroll = function (item, i) {
  window.addEventListener('scroll', function () {
    if (i == 0) {
      if (window.pageYOffset >= articlesCoordinate(i) - 100) {
        item.classList.remove('pagination-right__item--active')
      } else {
        item.classList.add('pagination-right__item--active')
      }
    } else {
      if (articlesWindowCoordinate(i - 1) <= 100 && articlesWindowCoordinate(i - 1) > - articlesHeight(i - 1) - 100) {
        item.classList.add('pagination-right__item--active')
      } else {
        item.classList.remove('pagination-right__item--active')
      }
    }
  });
}


for (let i = 0; i < paginationItems.length; i++) {
  paginationClick(paginationItems[i], i);
  paginationScroll(paginationItems[i], i);
}
