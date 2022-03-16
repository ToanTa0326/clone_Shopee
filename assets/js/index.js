const backBtn = document.querySelectorAll('.btn-back');
const modal = document.querySelector('.modal');
const openBtn = document.querySelectorAll('.header_nav-item--strong');
const modalInner = document.querySelector('.modalinner');
const register = document.querySelector('.formRegister');
const login = document.querySelector('.formLogin');
const switchBtn = document.querySelectorAll('.authForm__switch-btn');

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