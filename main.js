const showHiddenPass = (inputOverlay, inputPass, inputIcon) => {
     const overlay = document.getElementById(inputOverlay),
          input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon);
     
     iconEye.addEventListener('click', () => {
          //Change pass to text
          if(input.type === 'password'){
               //switch to text
               input.type = 'text';
               //changed icon
               iconEye.classList.remove('bx-show');
               iconEye.classList.add('bx-hide');
          }else{
               input.type = 'password';
               iconEye.classList.remove('bx-hide');
               iconEye.classList.add('bx-show');
          }

          //Toggle the Overlay
          overlay.classList.toggle('overlay-content');
     })
}

showHiddenPass('input-overlay','input-password','input-icon');
