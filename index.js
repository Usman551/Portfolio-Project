
      function toggleMenu(){
        let crossicon = document.querySelector('.crossicon');
        let hamburger = document.querySelector('.hamburger');
        let nav = document.querySelector('nav');
        let mylogo = document.querySelector('.mylogo');

        let menu = document.querySelector('.menu');
            if(menu.style.display === "block"){
            menu.style.display = "none";
            crossicon.style.display = "none";
            nav.style.justifyContent = 'space-between';
            hamburger.style.display = "block";
            mylogo.style.display = "block";
            }else{
            menu.style.display = "block";
            crossicon.style.display = "block";
            nav.style.justifyContent = 'flex-end';
            mylogo.style.display = "none";
            hamburger.style.display = "none";
            }   
    }