const menu  = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar_menu');
const navLog = document.querySelector('.navbar_logo');


// showmobile menu

const mobileMenu = () =>{

    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


// hide mobilemenu

const hidemobileMenu = () =>{

    const menuBar = document.querySelector('.is-active');
    
    if (window.innerWidth <= 768 && menuBar) {
        
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
};
menuLink.addEventListener('click', hidemobileMenu);
navLog.addEventListener('click', hidemobileMenu);



// header changecolor
const nav = document.querySelector('nav');
const header = document.querySelector('header');

const options = {

    rooMargin: '-12px'
}

const observer = new IntersectionObserver(entries => {

	entries.forEach(entry => {

		if (entry.isIntersecting) {

			nav.classList.remove('changeColor')

		}else{

			nav.classList.add('changeColor')
		}
	})

}, options)

observer.observe(header)




// highlight menu

const highlightMenu = () => {

    const highlight = document.querySelector('.hightlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const skillsMenu = document.querySelector('#skills-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;


    // scroll highlight

    if (window.innerWidth > 960 && scrollPos < 600) {
        
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;

    }else if(window.innerWidth > 960 && scrollPos < 1400){

        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
        
    }else if(window.innerWidth > 960 && scrollPos < 2235){

        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 2800){
        
        skillsMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 3245){

        contactMenu.classList.add('highlight');
        skillsMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 3800){
        contactMenu.classList.remove('highlight');
        return;
    }  

    if ((highlight && window.innerWidth < 960 && scrollPos < 600 || highlight)) {
        
        highlight.classList.remove('highlight');
        return;
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);





// text animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Aspiring Front End Web Developer";
  }, 0);
  // setTimeout(() => {
  //   text.textContent = "Blogger";
  // }, 4000);
  // setTimeout(() => {
  //   text.textContent = "YouTuber";
  // }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);




// filter images

//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}
