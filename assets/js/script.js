const collapse = document.querySelector('#collapse');
const aside = document.querySelector('aside');
const main = document.querySelector('main');
const arrow = document.querySelector('i');
const out= document.querySelector('.out');
const navCls= document.querySelectorAll('.nav-cl');
const cnt= document.querySelectorAll('.connect-body');
collapse.addEventListener('click', () =>{
    aside.classList.toggle('expand')
    arrow.classList.contains('fa-arrow-right') ? arrow.classList.toggle('fa-arrow-left'): arrow.classList.remove('fa-arrow-left')
    out.classList.toggle('in')
    navCls.forEach((navCl) => {
    navCl.classList.toggle('in')  
    // console.log(navCl)   
    });
})

main.addEventListener('click', () =>{
    aside.classList.remove('expand')
    out.classList.remove('in')
    arrow.classList.remove('fa-arrow-left')
    navCls.forEach((navCl) => {
        navCl.classList.remove('in')  
    });

})

wcnt.addEventListener('click', () =>{
    aside.classList.remove('expand')
    out.classList.remove('in')
    arrow.classList.remove('fa-arrow-left')
    navCls.forEach((navCl) => {
        navCl.classList.remove('in')  
    });

})



