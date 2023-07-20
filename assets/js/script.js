const collapse = document.querySelector('#collapse');
const aside = document.querySelector('aside');
const main = document.querySelector('main');
const arrow = document.querySelector('i');
const out= document.querySelector('.out');
const navCls= document.querySelectorAll('.nav-cl');
collapse.addEventListener('click', () =>{
    aside.classList.toggle('expand')
    arrow.classList.contains('fa-arrow-right') ? arrow.classList.toggle('fa-arrow-left'): arrow.classList.remove('fa-arrow-left')
    out.classList.toggle('in')
    navCls.forEach((navCl) => {
    navCl.classList.toggle('in')  
    console.log(navCl)   
    });
})
main.addEventListener('click', () =>{
    aside.classList.remove('expand')
    out.classList.remove('in')
    arrow.classList.remove('fa-arrow-left')
    navCls.forEach((navCl) => {
        navCl.classList.remove('in')  
        console.log(navCl)   
    });

})

document.addEventListener("DOMContentLoaded", function() {
    var currentPathElement = document.getElementById("currentPath");
    var currentPath = window.location.href;
    currentPathElement.textContent = "Current URL: " + currentPath;
  
    var dataJsonPath = getCurrentPath() + "data.json";
    console.log("Path to data.json:", dataJsonPath);
  
    // Fetch data.json using the calculated path...
  });
  
  function getCurrentPath() {
    var pathArray = window.location.href.split("/");
    var protocol = pathArray[0];
    var host = pathArray[2];
    var path = pathArray.slice(3, -1).join("/");
    return protocol + "//" + host + "/" + path + "/";
  }
  