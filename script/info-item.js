window.onload = function (data) {
  const product = JSON.parse(sessionStorage.getItem("product"));

  createProductInfo(product);
};

function createProductInfo(product) {
  const container = document.querySelector("#info-item-container");
  const fragment = document.createDocumentFragment();

  const productTitle = createElement({
    tag: "h1",
    className: "item-title",
    text: product.miniName,
  });
  fragment.appendChild(productTitle);

  const productMarkers = createElement({
    tag: "div",
    className: "item-markers",
  });
  product.nameTags.forEach((tag) => {
    let productMarker = createElement({
      tag: "div",
      className: "item-markers__marker select-block",
      text: tag,
    });
    productMarkers.appendChild(productMarker);
  });
  fragment.appendChild(productMarkers);

  const productInfoWrapper = createElement({
    tag: "div",
    className: "info-product-wrapper",
  });
  const productInfo = createElement({
    tag: "div",
    className: "info-product",
  });
  const productInfoTitle = createElement({
    tag: "h2",
    className: "info-product__title",
    text: "Программа:",
  });
  const productInfoText = createElement({
    tag: "p",
    className: "info-product__text",
    text: product.productInfo,
  });
  const productButtons = createElement({
    tag: "div",
    className: "info-product__buttons",
  });
  const productBtnInv = createElement({
    tag: "a",
    className: "btn-neo btn-neo--main-color",
    text: "Записаться",
  });
  const productBtnFree = createElement({
    tag: "a",
    className: "link-underline",
    text: "Попробовать бесплатно",
  });
  const productImgContainer = createElement({
    tag: "div",
    className: "img-product",
  });
  const productImg = createElement({
    tag: "img",
    className: "img-product",
    alt: "Картинка продукта",
    src: "../img/arts/teacher-and-board.png",
  });
  productButtons.appendChild(productBtnInv);
  productButtons.appendChild(productBtnFree);
  productImgContainer.appendChild(productImg);
  productInfo.appendChild(productInfoTitle);
  productInfo.appendChild(productInfoText);
  productInfo.appendChild(productButtons);
  productInfoWrapper.appendChild(productInfo);
  productInfoWrapper.appendChild(productImgContainer);
  fragment.appendChild(productInfoWrapper);

  const lessonList = createElement({
    tag: "div",
    className: "lesson-list",
  });
  product.calendar.forEach((lesson) => {
    const lessonStcker = createElement({
      tag: "div",
      className: "lesson-stcker",
    });
    const lessonDate = createElement({
      tag: "div",
      className: "lesson-stcker__left",
    });
    const lessonDay = createElement({
      tag: "div",
      className: "lesson-stcker__day",
      text: lesson.day,
    });
    const lessonTime = createElement({
      tag: "div",
      className: "lesson-stcker__time",
      text: lesson.time,
    });
    const lessonText = createElement({
      tag: "div",
      className: "lesson-stcker__right",
    });
    const lessonName = createElement({
      tag: "div",
      className: "lesson-stcker__name",
      text: product.miniName,
    });
    const lessonInfo = createElement({
      tag: "div",
      className: "lesson-stcker__info",
      text: [...product.nameTags],
    });
    lessonDate.appendChild(lessonDay);
    lessonDate.appendChild(lessonTime);
    lessonText.appendChild(lessonName);
    lessonText.appendChild(lessonInfo);
    lessonStcker.appendChild(lessonDate);
    lessonStcker.appendChild(lessonText);
    lessonList.appendChild(lessonStcker);
  });
  fragment.appendChild(lessonList);

  container.appendChild(fragment);
}

function createElement(item) {
  const { tag, className, text, attributes, alt, src } = { ...item };

  const element = document.createElement(tag);
  className.split(" ").forEach((nameClass) => {
    element.classList.add(`${nameClass}`);
  });
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (alt) element.alt = alt;
  if (src) element.src = src;

  if (typeof text === "string") {
    element.innerHTML = text;
  } else {
    element.textContent = text;
  }
  return element;
}
