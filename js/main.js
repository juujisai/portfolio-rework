const navigation = () => {
  //hamburger
  const navText = document.querySelector('nav.mobile-nav')
  const navElipse = document.querySelector('.ellipse-nav')
  document.querySelector('.hamburger').addEventListener('click', function () {
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


    scrollValue >= svgOffsetTop[0] - scrollValue / 4 ? stackDiv[0].classList.remove('left') : stackDiv[0].classList.add('left')
    scrollValue >= svgOffsetTop[1] - scrollValue / 4 ? stackDiv[1].classList.remove('right') : stackDiv[1].classList.add('right')
    scrollValue >= svgOffsetTop[2] - scrollValue / 4 ? stackDiv[2].classList.remove('left') : stackDiv[2].classList.add('left')
    scrollValue >= svgOffsetTop[3] - scrollValue / 4 ? stackDiv[3].classList.remove('right') : stackDiv[3].classList.add('right')
    scrollValue >= svgOffsetTop[4] - scrollValue / 4 ? stackDiv[4].classList.remove('left') : stackDiv[4].classList.add('left')
    scrollValue >= svgOffsetTop[5] - scrollValue / 4 ? stackDiv[5].classList.remove('right') : stackDiv[5].classList.add('right')
    scrollValue >= svgOffsetTop[6] - scrollValue / 4 ? stackDiv[6].classList.remove('left') : stackDiv[6].classList.add('left')


    if (scrollValue >= svgOffsetTop[0] - windowHeight / 2) {
      animateSVGSOffset(1)
    }
    if (scrollValue >= svgOffsetTop[1] - windowHeight / 2) {
      animateSVGSOffset(2)
    }
    if (scrollValue >= svgOffsetTop[2] - windowHeight / 2) {
      animateSVGSOffset(3)
    }
    if (scrollValue >= svgOffsetTop[3] - windowHeight / 2) {
      animateSVGSOffset(4)
    }
    if (scrollValue >= svgOffsetTop[4] - windowHeight / 2) {
      animateSVGSOffset(5)
    }
    if (scrollValue >= svgOffsetTop[5] - windowHeight / 2) {
      animateSVGSOffset(6)
    }
    if (scrollValue >= svgOffsetTop[6] - windowHeight / 2) {
      animateSVGSOffset(7)
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


// const dualImagesAnimation = function () {

//   const dualImagesLeft = [...document.querySelectorAll('.image1')]
//   const dualImagesRight = [...document.querySelectorAll('.image2')]

//   const equalize = function (e) {
//     let index;

//     this.classList.contains('image1') ? index = dualImagesLeft.findIndex(image => image === this) : index = dualImagesRight.findIndex(image => image === this)

//     if (e.type === 'mouseover' || e.type === 'touchstart') {
//       dualImagesLeft[index].classList.add('equalize')
//       dualImagesRight[index].classList.add('equalize')
//     } else if (e.type === 'mouseout' || e.type === 'touchend') {
//       dualImagesLeft[index].classList.remove('equalize')
//       dualImagesRight[index].classList.remove('equalize')
//     }

//   }

//   dualImagesLeft.forEach((imageLeft, id) => {
//     imageLeft.addEventListener('mouseover', equalize)
//     imageLeft.addEventListener('mouseout', equalize)
//     imageLeft.addEventListener('touchstart', equalize)
//     imageLeft.addEventListener('touchend', equalize)
//   })

//   dualImagesRight.forEach((imageRight, id) => {
//     imageRight.addEventListener('mouseover', equalize)
//     imageRight.addEventListener('mouseout', equalize)
//     imageRight.addEventListener('touchstart', equalize)
//     imageRight.addEventListener('touchend', equalize)
//   })
// }



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


const showMoreInfo = () => {
  const projects = [...document.querySelectorAll('.short-project')]
  const projectsInfo = [...document.querySelectorAll('.about-project')]

  projects.forEach(item => item.addEventListener('click', function () {
    projectsInfo[projects.findIndex(item2 => item2 === item)].classList.toggle('show')
  }))

  let activePhotos = {
    geoportal: 0,
    graphs: 0,
  }

  // const photoGallery1 = document.querySelector('.geoportal-gallery')
  let project1Images = [...document.querySelectorAll('.photo-gallery.geoportal img')]
  const perProj1 = 15 / (project1Images.length - 1)

  project1Images.forEach((item, id) => {
    item.style.transform = `translate(${id * perProj1}%, ${id * perProj1}%)`
    item.style.zIndex = project1Images.length - id
  }
  )
  // const photoGallery2 = document.querySelector('.graph-gallery')
  let project2Images = [...document.querySelectorAll('.photo-gallery.graphs img')]
  const perProj2 = 15 / (project2Images.length - 1)
  // console.log(project2Images)
  project2Images.forEach((item, id) => {
    item.style.transform = `translate(${id * perProj2}%, ${id * perProj2}%)`
    item.style.zIndex = project2Images.length - id
  }
  )



  const leftArrow = [...document.querySelectorAll('.arrow-left')]



  const prevPhoto = function () {
    const parent = this.parentNode

    let gallery;

    if (parent.classList.contains('graphs')) {
      gallery = project2Images
    } else if (parent.classList.contains('geoportal')) {
      gallery = project1Images

    }

    gallery[gallery.length - 1].style.zIndex = gallery.length + 1

    gallery[gallery.length - 1].style.transform = `translate(0%, -20%)`

    leftArrow.forEach(item => item.removeEventListener('click', prevPhoto))
    let current = gallery[gallery.length - 1]
    gallery.splice(gallery.length - 1, 1)
    gallery = [current, ...gallery,]

    setTimeout(() => {
      gallery.forEach((item, id) => {
        item.style.transform = `translate(${id * perProj2}%, ${id * perProj2}%)`
        item.style.zIndex = gallery.length - id
      }
      )

      if (parent.classList.contains('graphs')) {
        project2Images = gallery
      } else if (parent.classList.contains('geoportal')) {
        project1Images = gallery

      }

      leftArrow.forEach(item => item.addEventListener('click', prevPhoto))

    }, 500)
  }



  const rightArrow = [...document.querySelectorAll('.arrow-right')]
  const nextPhoto = function () {
    const parent = this.parentNode

    let gallery;

    if (parent.classList.contains('graphs')) {
      gallery = project2Images
    } else if (parent.classList.contains('geoportal')) {
      gallery = project1Images

    }



    gallery[0].style.transform = `translate(0%, -20%)`
    rightArrow.forEach(item => item.removeEventListener('click', nextPhoto))
    let current = gallery[0]
    gallery.splice(0, 1)
    gallery = [...gallery, current]


    setTimeout(() => {
      gallery.forEach((item, id) => {
        item.style.transform = `translate(${id * perProj2}%, ${id * perProj2}%)`
        item.style.zIndex = gallery.length - id
      }
      )

      if (parent.classList.contains('graphs')) {
        project2Images = gallery
      } else if (parent.classList.contains('geoportal')) {
        project1Images = gallery

      }

      rightArrow.forEach(item => item.addEventListener('click', nextPhoto))

    }, 500)
  }

  leftArrow.forEach(item => item.addEventListener('click', prevPhoto))

  rightArrow.forEach(item => item.addEventListener('click', nextPhoto))

}


showMoreInfo()
navigation()
svgIcons()
// dualImagesAnimation()
cursorMove()
showEmailAsAlert()