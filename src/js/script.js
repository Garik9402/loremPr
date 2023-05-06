const selectBtn = document.querySelector('.select-btn')
const selectListItem = document.querySelectorAll('.select-list-item')
const selectName = document.querySelector('.select-name')

// работа с кастомным селектом
selectBtn.addEventListener('click', () => {
   selectBtn.closest('.main__form-select-box').classList.toggle('main__form-select-box--js-open')
})

selectListItem.forEach(el => {
   el.addEventListener('click', () => {
      selectName.textContent = el.textContent
      el.closest('.main__form-select-box').classList.remove('main__form-select-box--js-open')
   })
})

// input[type='range']

const rangeNode = document.querySelector('.range')
const percentNode = document.querySelector('.percent')
rangeNode.addEventListener('input', function () {
   percentNode.innerHTML = this.value + ' ' + '%'
})
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.btn-close');
const hiddenBox = document.querySelector('.hidden-box');
const hiddenBlock = document.querySelector('.hidden-box__inner');
const menuListItem = document.querySelectorAll('.menu-list-item')
const $body = document.body
//burger - menu открытие и закрытие
burger.addEventListener('click', () => {
   hiddenBox.classList.add('hidden-box--js-open-box')
   $body.style.overflow = 'hidden';
});
burgerClose.addEventListener('click', () => {
   hiddenBox.classList.remove('hidden-box--js-open-box')
   $body.style.overflow = 'visible';
});


hiddenBox.addEventListener('click', (e) => {
   if (e.target === hiddenBox) {
      hiddenBox.classList.remove('hidden-box--js-open-box')
      $body.style.overflow = 'visible';
   }
});

menuListItem.forEach(el => {
   el.addEventListener('click', () => {
      hiddenBox.classList.remove('hidden-box--js-open-box')
      $body.style.overflow = 'visible';
   })
})

