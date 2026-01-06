const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";
function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";

    }
}



//scroll to top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Like btn
let likeBTN1 = document.querySelector("#like-1")
const like1 = ()=>{
  if(likeBTN1.classList.contains("fa-regular")){
    likeBTN1.classList.replace("fa-regular", "fa-solid")
    likeBTN1.classList.add("like-animation")
  }else{
    likeBTN1.classList.replace("fa-solid", "fa-regular")
    likeBTN1.classList.remove("like-animation")
  }
}
likeBTN1.addEventListener("click", like1)
let likeBTN2 = document.querySelector("#like-2")
const like2 = ()=>{
  if(likeBTN2.classList.contains("fa-regular")){
    likeBTN2.classList.replace("fa-regular", "fa-solid")
    likeBTN2.classList.add("like-animation")
  }else{
    likeBTN2.classList.replace("fa-solid", "fa-regular")
    likeBTN2.classList.remove("like-animation")
  }
}
likeBTN2.addEventListener("click", like2)
let likeBTN3 = document.querySelector("#like-3")
const like3 = ()=>{
  if(likeBTN3.classList.contains("fa-regular")){
    likeBTN3.classList.replace("fa-regular", "fa-solid")
    likeBTN3.classList.add("like-animation")
  }else{
    likeBTN3.classList.replace("fa-solid", "fa-regular")
    likeBTN3.classList.remove("like-animation")
  }
}
likeBTN3.addEventListener("click", like3)