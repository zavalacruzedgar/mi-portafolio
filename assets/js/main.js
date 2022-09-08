
const container = document.querySelector('.nav_menu')
const menu = document.getElementById('menu')

// document.body.addEventListener('click', function(e){
//     console.log('click ', e.target)
//   })
  
console.log(menu)
container.addEventListener('click', function (e) {
  if(e.target.matches('.menu--open')) {
    console.log('click ', e.target)
    menu.classList.add('show--menu')
  }

  if(e.target.matches('.menu--close')) {
    menu.classList.remove('show--menu')
    menu.classList.remove('nav_close')
  }

  if (e.target.matches('.menu__link')) {
    menu.classList.remove('show--menu')
  }
})