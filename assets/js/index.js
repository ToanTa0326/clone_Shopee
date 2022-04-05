const backBtn = document.querySelectorAll('.btn-back');
const modal = document.querySelector('.modal');
const openBtn = document.querySelectorAll('.header_nav-item--strong');
const modalInner = document.querySelector('.modalinner');
const register = document.querySelector('.formRegister');
const login = document.querySelector('.formLogin');
const switchBtn = document.querySelectorAll('.authForm__switch-btn');
const searchBtn = document.querySelector('.header__mobile-search')
const headerSearch = document.querySelector('.header__search');
const headerSearchInput = document.querySelector('.header__search-input')
const headerCart = document.querySelector('.header__cart');
const listCart = document.querySelector('.header__cart-list')
const searchSelect = document.querySelector('.header__search-select')
const searchOption = document.querySelector('.header__search-option')

switchBtn.forEach((btn,id) => {
    btn.addEventListener('click', () => {
        modal.style.display='flex';
        if(!id){
            register.style.display='none';
            login.style.display='block'
        }
        else{
            login.style.display='none';
            register.style.display='block'
        }
    })
})


backBtn.forEach(item => item.addEventListener('click', () => {
    modal.style.display='none';
}))

openBtn.forEach((btn,id) => {
    btn.addEventListener('click', () => {
        modal.style.display='flex';
        if(id){
            register.style.display='none';
            login.style.display='block'
        }
        else{
            login.style.display='none';
            register.style.display='block'
        }
    })
})

modal.addEventListener('click', () => {
    modal.style.display='none'
})

modalInner.addEventListener('click', (e) => {
    e.stopPropagation()
})

searchBtn.addEventListener('click', () => {
    headerSearch.classList.toggle('open');
})

headerSearchInput.addEventListener('blur', () => {
    headerSearch.classList.remove('open')
})

headerCart.addEventListener('click', () => {
    listCart.classList.toggle('open')
})

searchSelect.addEventListener('click', () => {
    searchOption.classList.toggle('open')
})