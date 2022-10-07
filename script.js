
AOS.init();


//COMEÇO NAVBAR RESPONSIVA --> 

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
}




animateLinks() {
this.navLinks.forEach((link, index) => {
link.style.animation
? (link.style.animation = "")
: (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`);
});
}




    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
 
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobileMenu",
    ".containerNav1",
    ".containerNav1 a",
);
mobileNavbar.init(); 

//FIM NAVBAR RESPONSIVA --> 





//COMEÇO SCROLL SUAVE -->

$(document).ready(function(){

    

    $("a").on('click', function(event) {
  
      
      
      if (this.hash !== "") {
        
        event.preventDefault();
  
        
        var hash = this.hash;
  
        
      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          
          window.location.hash = hash;
        });
      } 
    });
  });
  
  //FIM SCROLL SUAVE -->






  //COMEÇO HOVER CARDAPIO//

  
  var textHidden = document.getElementById("explain")
  var background3 = document.querySelector(".hoverImgCD");

  function onOver1(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroClassico.png')";
  }

  function onOver2(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroNesquik.png')";
  }

  function onOver5(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroGourmet.png')";
  }

  function onOver6(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroMaracuja.png')";
  }

  function onOver7(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroLimao.png')";
  }

  function onOver8(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroNinho.png')";
  }


  function onOver9(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroPacoca.png')";
  }

  function onOver10(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroChurros.png')";
  }

  function onOver11(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroOreo.png')";
  }


  function onOver12(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroUva.png')";
  }

  function onOver13(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/redVelvet.png')";
  }

  function onOver14(){
  
    textHidden.style.display = "none";
    background3.style.backgroundImage = "url('assets/brigadeiroBanoffe.png')";
  }



  function onOut(){
  

    textHidden.style.display = "inline-block";
    background3.style.backgroundImage = "none";

  }

 
  //FIM HOVER CARDAPIO//



  //começo abrir imagem//


 var zoomImg = document.querySelector('.img')

  function onClick1(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroClassico.png')";
  }

  function onClick2(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroNesquik.png')";
  }

  function onClick5(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroGourmet.png')";
  }

  function onClick6(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroMaracuja.png')";
  }

  function onClick7(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroLimao.png')";
  }

  function onClick9(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroNinho.png')";
  }

  function onClick9(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroPacoca.png')";
  }

  function onClick10(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroChurros.png')";
  }

  function onClick11(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroOreo.png')";
  }

  function onClick12(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroUva.png')";
  }

  function onClick13(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/redVelvet.png')";
  }

  function onClick14(){
    document.querySelector('.popupImages').style.display = 'block';
    zoomImg.style.backgroundImage = "url('assets/brigadeiroBanoffe.png')";
  }
  









  document.querySelector('.popupImages span').onclick = () =>{
    document.querySelector('.popupImages').style.display = 'none';
  }


  //FIM abrir imagem//
