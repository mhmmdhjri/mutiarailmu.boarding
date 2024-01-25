// nav fix

// button
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
    
 navMenu.classList.toggle('hidden');
  
})

// dm
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
});
darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    darkToggle.checked = true
  } else {
    document.documentElement.classList.remove('dark')
    darkToggle.checked = false
  }


