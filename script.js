const All = document.getElementById('All');
const registerbtn = document.getElementById('register');
const btnlogin = document.getElementById('login');
const loginform = document.getElementById('log-in form');

registerbtn.addEventListener('click',()=>{
    All.classList.add("active");
});

btnlogin.addEventListener('click',()=>{
    All.classList.remove("active");
});

loginform.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById("email-login").value;
  const password = document.getElementById("loginpassword").value;

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  
  if(email === storedEmail && password === storedPassword){
   
    window.location.href = 'index.html';
  }else{
    alert("invalid email or password");
  }


});

const registrationform = document.getElementById('registrationform');

registrationform.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById("Rname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("passwordReg").value;
  const confirmpassword = document.getElementById("passwordcon").value;

  if(password !== confirmpassword){
    alert('password does not match');
    return;
  }

  localStorage.setItem('username', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  window.location.href = 'index.html';

});


document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
      
      effect: 'coverflow', 
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      },
      
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      loop: true,   
  });
});