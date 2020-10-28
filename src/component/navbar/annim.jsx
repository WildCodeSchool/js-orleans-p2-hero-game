import React from 'react'

function open() {
  const list = document.querySelector(".NAVBAR_rightDiv")
  const menuBtn= document.querySelector(".NAVBAR_burgerMenu");
  const logo = document.querySelector(".NAVBAR_logo")
  const menuBackground = document.querySelector(".NAVBAR_divLogo")

  let result = menuBackground.classList.toggle("open");
  
  if(result){
    list.classList.add('open')
    menuBtn.classList.add('open')
    menuBackground.classList.add('open')
  }else{
    list.classList.remove('open')
    menuBtn.classList.remove('open')
    menuBackground.classList.remove('open')
  }
};

export default open;