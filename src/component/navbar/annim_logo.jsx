import React from 'react';

const fondLogo = document.querySelector(".NAVBAR_divLogo");
const loogo = document.querySelector(".NAVBAR_logo");
const titleLogo = document.querySelector(".NAVBAR_mysuprheros");

function AnnimLogo(loogo, fondLogo) {
    loogo.addEventListener('mouseenter', function(e){
        fondLogo.animate([
            { width: '80px' }, 
            { width: '120px' }
          ], { 
            duration: 500,
            iterations: 1,
          });
    })
    loogo.addEventListener('mouseleave', function(e){
        fondLogo.animate([
            { width: '120px' }, 
            { width: '80px' }
          ], { 
            duration: 500,
            iterations: 1,
          });
    })
}

AnnimLogo(loogo, fondLogo);