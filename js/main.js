const navigation = () => {
  //hamburger
  const navText = document.querySelector('nav.mobile-nav')
  const navElipse = document.querySelector('.ellipse-nav')
  document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.hamburger').classList.toggle('animate')
    navText.classList.toggle('hidden')
    navElipse.classList.toggle('hidden')
  })

  //nav

  let navArray = [...document.querySelectorAll('.mob-nav')]

  navArray.forEach(nav => {
    nav.addEventListener('click', function () {
      navText.classList.add('hidden')
      navElipse.classList.add('hidden')

    })
  })

  let navElementsArray = document.getElementById('header')
  let navSectionsArray = [...document.querySelectorAll('section')]
  navElementsArray = [navElementsArray, ...navSectionsArray]
  let navElementsOffsetArray = []

  navElementsArray.forEach(element => { navElementsOffsetArray.push(element.offsetTop) })

  window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY

    navElementsArray.forEach((item, id) => {
      if (item.offsetTop <= scrollValue + 20) {
        navArray.forEach(item => item.classList.remove('active'))
        navArray[id].classList.add('active')
      }
    })

  })

}







const svgIcons = () => {

  const svgDestiny = [...document.querySelectorAll('.cart .svg')]
  const svgCartCont = [...document.querySelectorAll('.cart-cont')]

  const svgOffsetTop = []


  svgDestiny.forEach((svg, id) => {
    svg.innerHTML = svgCart[id]
    svgOffsetTop.push(svgCartCont[id].offsetTop)
  })

  window.addEventListener('scroll', function (e) {

    let scrollValue = window.scrollY
    let windowHeight = window.innerHeight
    let stackDiv = [...document.querySelectorAll('.cart-cont .cart')]


    for (let i = 0; i < svgOffsetTop.length; i++) {
      if (i % 2 === 0) {
        scrollValue >= svgOffsetTop[i] - scrollValue / 4 ? stackDiv[i].classList.remove('left') : stackDiv[i].classList.add('left')
      } else {
        scrollValue >= svgOffsetTop[i] - scrollValue / 4 ? stackDiv[i].classList.remove('right') : stackDiv[i].classList.add('right')
      }


      if (scrollValue >= svgOffsetTop[i] - windowHeight / 2) {
        animateSVGSOffset(i + 1)
      }

    }

  })

  const animateSVGSOffset = (number) => {
    let clickedSVG = [...document.querySelectorAll(`.cart-cont:nth-of-type(${number}) .cart svg path`)]
    let svgLength = []

    clickedSVG.forEach(svg => {
      svgLength.push(svg.getTotalLength())
    })

    for (let i = 0; i < clickedSVG.length; i++) {
      clickedSVG[i].style.strokeDasharray = svgLength[i]
      clickedSVG[i].style.strokeDashoffset = svgLength[i]

      clickedSVG[i].style.animation = `svgAnimate 5s ease both`
    }
  }

}


const cursorMove = () => {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  document.body.appendChild(circle)

  const fCircle = document.querySelector('.circle')

  window.addEventListener('mousemove', function (e) {

    fCircle.style.left = `${e.clientX}px`
    fCircle.style.top = `${e.clientY}px`


  })


  let allIMGS = [...document.querySelectorAll('img')]
  let allAs = [...document.querySelectorAll('a')]
  allIMGS = [...allIMGS, ...allAs]




  allIMGS.forEach(one => {
    one.addEventListener('mouseover', function () {
      fCircle.style.width = `${150}px`
      fCircle.style.height = `${150}px`

    })
  })

  allIMGS.forEach(one => {
    one.addEventListener('mouseout', function () {
      fCircle.style.width = `${100}px`
      fCircle.style.height = `${100}px`
    })
  })



}



const showEmailAsAlert = () => {
  document.getElementById('email').addEventListener('click', function () {
    alert('Mój adres email to: bartosz.cylwik94@gmail.com')
  })
}



navigation()
svgIcons()
// dualImagesAnimation()
cursorMove()
showEmailAsAlert()