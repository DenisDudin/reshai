// import json, urllib.request;

window.onload = function (data) {
  fetch("../bd.json")
    .then((response) => response.json())
    .then((data) => {
      createProductList(data);
    })
    .then(() => filterProducts());
};

function createProductList(productsList) {
  const container = document.querySelector("#product-list .container");
  const fragment = document.createDocumentFragment();
  productsList.forEach((product) => {
    const element = createElement({
      tag: "div",
      className: "product product-list__item product-item",
      attributes: product.tags,
    });
    //image element
    const imgWrap = createElement({
      tag: "div",
      className: "product-item__img-wrapper",
    });
    const imgContainer = createElement({
      tag: "div",
      className: "product-item__img-container",
    });
    const image = createElement({
      tag: "img",
      className: "product-item__img",
      src: product.image,
      alt: "Фото",
    });
    const imgDescription = createElement({
      tag: "div",
      className: "product-item__img-description",
    });
    const imgName = createElement({
      tag: "h3",
      className: "product-item__img-title",
      text: product.imgName,
    });
    const imgText = createElement({
      tag: "p",
      className: "product-item__img-text",
      text: product.imgText,
    });

    imgContainer.appendChild(image);
    imgDescription.appendChild(imgName);
    imgDescription.appendChild(imgText);
    imgContainer.appendChild(imgDescription);
    imgWrap.appendChild(imgContainer);
    element.appendChild(imgWrap);

    //info
    const infoContainer = createElement({
      tag: "div",
      className: "product-item__info-container",
    });

    const infoUp = createElement({
      tag: "div",
      className: "product-item__info-up",
    });
    const infoTitle = createElement({
      tag: "h2",
      className: "product-item__info-title",
      text: product.name,
    });
    const infoText = createElement({
      tag: "p",
      className: "product-item__info-text",
      text: product.description,
    });
    const infoMarkers = createElement({
      tag: "div",
      className: "product-item__info-markers markers-list",
    });

    const infoDown = createElement({
      tag: "div",
      className: "product-item__info-down",
    });
    const price = createElement({
      tag: "div",
      className: "product-item__price",
      text: product.price,
    });
    const buttons = createElement({
      tag: "div",
      className: "product-item__btn-block",
    });
    const btnEnroll = createElement({
      tag: "button",
      className: "product-item__btn one-color-btn one-color-btn--main",
      text: "Записаться",
    });
    const btnMore = createElement({
      tag: "button",
      className: "product-item__btn one-color-btn",
      text: "Подробнее",
    });

    infoUp.appendChild(infoTitle);
    infoUp.appendChild(infoText);
    infoUp.appendChild(infoMarkers);
    infoDown.appendChild(price);
    buttons.appendChild(btnEnroll);
    buttons.appendChild(btnMore);
    infoDown.appendChild(buttons);
    infoContainer.appendChild(infoUp);
    infoContainer.appendChild(infoDown);
    element.appendChild(infoContainer);

    fragment.appendChild(element);
  });

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
  element.textContent = text;

  return element;
}

function filterProducts() {
  const classSelect = document.getElementById("class-select");
  const groupSelect = document.getElementById("group-select");
  const typeSelect = document.getElementById("type-select");
  const products = document.querySelectorAll(".product");

  function filterProducts() {
    const classValue = classSelect.value;
    const groupValue = groupSelect.value;
    const typeValue = typeSelect.value;

    products.forEach((product) => {
      const productClasses = product.getAttribute("data-classes").split(" ");
      const productGroups = product.getAttribute("data-groups").split(" ");
      const productTypes = product.getAttribute("data-types").split(" ");

      let showProduct = true;

      if (classValue !== "all") {
        const showClass = productClasses.includes(classValue);
        showProduct = showProduct && showClass;
      }

      if (groupValue !== "all") {
        const showGroup = productGroups.includes(groupValue);

        showProduct = showProduct && showGroup;
      }

      if (typeValue !== "all") {
        const showType = productTypes.includes(typeValue);
        showProduct = showProduct && showType;
      }

      if (showProduct) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
  }

  classSelect.addEventListener("change", filterProducts);
  groupSelect.addEventListener("change", filterProducts);
  typeSelect.addEventListener("change", filterProducts);
}
