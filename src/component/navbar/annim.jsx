import React from 'react'

function open() {
  const list = document.querySelector(".NAVBAR_rightDiv")
  const menuBtn= document.querySelector(".NAVBAR_burgerMenu");
  const logo = document.querySelector(".NAVBAR_logo")
  const menuBackground = document.querySelector(".NAVBAR_divLogo")

  let result = menuBackground.classList.toggle("open");
  console.log(result)
  
  if(result){
    list.classList.add('open')
    menuBtn.classList.add('open')
    menuBackground.classList.add('open')
  }else{
    list.classList.remove('open')
    menuBtn.classList.remove('open')
    menuBackground.classList.remove('open')
  }





  // if (menuOpen) {
  //   menuBtn.classList.toggle("open");
  //   menuOpen= false;
  //   menuBackground.style.alignItems= 'flex-start';
  //   menuBackground.animate([
  //     // keyframes
  //     { width: '80px' }, 
  //     { width: '280px' },
      
  //   ], { 
  //     // timing options
  //     duration: 500,
  //     iterations: 1,
  //   });
  //   logo.animate([
  //     // keyframes
  //     { marginTop: '10px' }, 
  //     { marginTop: '20px' },
      
  //   ], { 
  //     // timing options
  //     duration: 500,
  //     iterations: 1,
  //   });
  //   logo.style.marginTop='20px';
  //   menuBackground.animate([
  //     // keyframes
  //     {height: '10vh'},
  //     {height: '100vh'},
      
  //   ], { 
  //     // timing options
  //     duration: 500,
  //     iterations: 1,
  //   });
  //   menuBackground.style.width='280px'
  //   menuBackground.style.height='100vh'
  // } else {
  //   menuBackground.animate([
  //     // keyframes
  //     { width: '280px' }, 
  //     { width: '80px' },
      
  //   ], { 
  //     // timing options
  //     duration: 500,
  //     iterations: 1,
  //   });
  //   logo.animate([
  //     // keyframes
  //     { marginTop: '10px' }, 
  //     { marginTop: '20px' },
      
  //   ], { 
  //     // timing options
  //     duration: 500,
  //     iterations: 1,
  //   });
  //   logo.style.marginTop='20px';
  //   menuBackground.animate([
  //     // keyframes
  //     {height: '100vh'},
  //     {height: '10vh'},
      
  //   ], { 
  //     // timing options
  //     duration: 500,
  //     iterations: 1,
  //   });
  //   menuBackground.style.width='80px'
  //   menuBackground.style.height='10vh'
  //   menuOpen= true;
  // }
};

export default open;