const portfolioData = [
  {
    id: 0,
    bigImg: "./images/portfolio.jpg",
    name: 'portfolio',
    photoGalleryName: 'portfolio',
    photoGalleryImages: ['./images/portfolio1.jpg', './images/portfolio2.jpg', './images/portfolio3.jpg', './images/portfolio4.jpg'],
    photoGalleryImagesClassName: 'portfolio-gallery',
    liveLink: 'https://juujisai.github.io/portfolio-rework/',
    githubLink: 'https://github.com/juujisai/portfolio-rework',
    desc: 'Na tej stronie zebrane zostały wszystkie ciekawsze projekty, którymi chciałbym się pochwalić. Strona napisana w oparciu o JavaScript i canvy.'
  },
  {
    id: 1,
    bigImg: "./images/mclaren.jpg",
    name: 'McLaren React',
    photoGalleryName: 'mclaren',
    photoGalleryImages: ['./images/mclaren1.jpg', './images/mclaren2.jpg', './images/mclaren3.jpg', './images/mclaren4.jpg'],
    photoGalleryImagesClassName: 'mclaren-gallery',
    liveLink: 'https://mclaren-react-site.netlify.app/',
    githubLink: 'https://github.com/juujisai/McLaren-site',
    desc: 'Strona ta stworzona została za pomocą Reacta. Jest to większy projekt, który zawiera część informacyjną oraz sklep z opcją logowania - wszystko oparte o localStorage. Tematyką jest McLaren, ponieważ f1 jest jedną z moich pasji i postanowiłem połączyć przyjemne z pożytecznym. Na stronie wykorzystałem routing - react-router-dom. Do przechowywania stanu aplikacji użyto Context API'

  },
  {
    id: 2,
    bigImg: "./images/bento.jpg",
    name: 'Bento-shop',
    photoGalleryName: 'bento',
    photoGalleryImages: ['./images/bento1.jpg', './images/bento2.jpg', './images/bento3.jpg', './images/bento4.jpg'],
    photoGalleryImagesClassName: 'bento-gallery',
    liveLink: 'https://https://bento-shop.netlify.app/',
    githubLink: 'https://https://github.com/juujisai/bento-store',
    desc: 'Jest to kolejna strona stworzona za pomocą biblioteki React. W odróżnieniu od poprzedniej jednak, do przechowywania stanu użyłem Reduxa. Strona oparta jest również o localStorage i react-router.'
  },
  {
    id: 3,
    bigImg: "./images/geoportal-big.jpg",
    name: 'Geoportal miasta Szczytno',
    photoGalleryName: 'geoportal',
    photoGalleryImages: ['./images/geoportal1.jpg', './images/geoportal2.jpg', './images/geoportal3.jpg', './images/geoportal4.jpg'],
    photoGalleryImagesClassName: 'geoportal-gallery',
    liveLink: 'https://juujisai.github.io/geoportal/',
    githubLink: 'https://github.com/juujisai/geoportal',
    desc: 'W projekcie tym podjąłem się opracowania geoportalu miasta Szczytno. Dane GIS zostały sporządzone przeze mnie za pomocą oprogramowania QGIS, a programowanie odbyło się za pomocą javascriptu - głównie biblioteka OpenLayers. Jest to projekt stanowiący połączenie programowania oraz kierunku studiów, po którym uzyskałem tytuł magistra inżyniera.'
  },
  {
    id: 4,
    bigImg: "./images/cappuccino.PNG",
    name: 'Rain and Cappuccino',
    photoGalleryName: 'cappuccino',
    photoGalleryImages: ['./images/cappuccino1.jpg', './images/cappuccino2.jpg', './images/cappuccino3.jpg', './images/cappuccino4.jpg'],
    photoGalleryImagesClassName: 'cappuccino-gallery',
    liveLink: 'https://juujisai.github.io/animejs-svg-morph/',
    githubLink: 'https://github.com/juujisai/animejs-svg-morph',
    desc: 'Jest to projekt, który powstał w celu przetestowania biblioteki anime.js. Na tej stronie przeprowadziłem morphing kilku rysunków wektorowych svg. Wynik testu okazał się na tyle interesujący, że postanowiłem zamieścić go w portfolio. Jest to zwykła strona pisana w czystym JS. Strona została przygotowana tylko na wersje <strong>desktopowe</strong>'
  },
  {
    id: 5,
    bigImg: "./images/tabl-graph-big.jpg",
    name: 'Tabele i wykresy z pliku csv (mini projekt)',
    photoGalleryName: 'graphs',
    photoGalleryImages: ['./images/wykresy1.jpg', './images/wykresy2.jpg', './images/wykresy3.jpg', './images/wykresy4.jpg'],
    photoGalleryImagesClassName: 'graph-gallery',
    liveLink: 'https://juujisai.github.io/create-able-graph/',
    githubLink: 'https://github.com/juujisai/create-able-graph',
    desc: 'Celem projektu jest przedstawienie graficzne danych pochodzących z pliku csv. Do aplikacji można wczytać dowolny plik csv oddzielony średnikami i utworzyć z niego tabelę i wykres słupkowy lub kropkowy. Tabelę i wykresy można dodatkowo edytować w oparciu o kilka przykładowych opcji. Aplikacja została stworzona przy pomocy czystego JavaScriptu. Na githubie znajduje się przykładowy plik csv, który można wykorzystać do analizy projektu.'
  }

]

const targetPlace = document.getElementById('projects')


class NewElement {
  constructor({ element, className = '', id = '', content = '', source = '', alt = '' }) {
    // this.where = where
    this.element = element;
    this.className = className;
    this.id = id;
    this.content = content;
    this.parent = parent;
    this.source = source;
    this.alt = alt
  }

  create() {
    let a = document.createElement(this.element);
    a.className = this.className;
    a.id = this.id;
    a.innerHTML = this.content

    if (this.element === 'img') {
      a.src = this.source
      a.alt = this.alt
    }

    return a
  }
}


class Portfolio {
  constructor({ id, bigImg, name, photoGalleryName, photoGalleryImages, photoGalleryImagesClassName, liveLink, githubLink, desc }) {
    this.id = id;
    this.bigImg = bigImg;
    this.name = name;
    this.photoGalleryName = photoGalleryName;
    this.photoGalleryImages = photoGalleryImages;
    this.photoGalleryImagesClassName = photoGalleryImagesClassName;
    this.liveLink = liveLink;
    this.githubLink = githubLink;
    this.desc = desc;


    this.target = targetPlace
  }
  create() {
    // create div with class project - main container
    let project = new NewElement({
      element: 'div',
      className: 'project',
    }).create()

    // create div for short project window
    let shortProject = new NewElement({
      element: 'div',
      className: 'short-project',
    }).create()

    // create new element with image
    let bigScreen = new NewElement({
      element: 'div',
      className: 'big-screen',
      content: `<img src=${this.bigImg} alt=${this.name}>`,
    }).create()
    shortProject.appendChild(bigScreen)



    // create h3 with the name of a project
    let projectName = new NewElement({
      element: 'h3',
      className: 'project-name',
      content: this.name,
    }).create()
    shortProject.appendChild(projectName)



    // create div for full project info
    let aboutProject = new NewElement({
      element: 'div',
      className: 'about-project',
    }).create()

    // create p with description
    let description = new NewElement({
      element: 'p',
      className: 'project-about',
      content: this.desc,
    }).create()
    aboutProject.appendChild(description)

    // create container for images in a gallery
    let photoGallery = new NewElement({
      element: 'div',
      className: `photo-gallery ${this.photoGalleryName}`,
    }).create()

    // add images to photo Gallery

    this.photoGalleryImages.forEach(item => {
      let b = new NewElement({
        element: 'img',
        className: this.photoGalleryImagesClassName,
        alt: this.name,
        source: item
      }).create()
      photoGallery.appendChild(b)
    })

    // add span tools

    let spanToolLeft = new NewElement({
      element: 'span',
      className: 'arrow-left',
      content: '<i class="fas fa-sort-up"></i>'
    }).create()

    let spanToolRight = new NewElement({
      element: 'span',
      className: 'arrow-right',
      content: '<i class="fas fa-sort-up"></i>'
    }).create()

    photoGallery.appendChild(spanToolLeft)
    photoGallery.appendChild(spanToolRight)

    // add photoGallery to about project container

    aboutProject.appendChild(photoGallery)


    // create container for icons
    let icons = new NewElement({
      element: 'div',
      className: 'icons'
    }).create()

    // create container for icons => icon
    let iconsIcon1 = new NewElement({
      element: 'div',
      className: 'live-link',
      content: `<a href=${this.liveLink} target='_blank'><i class="fab fa-chrome"></i></a>`,
    }).create()
    icons.appendChild(iconsIcon1)


    // create container for icons => icon2
    let iconsIcon2 = new NewElement({
      element: 'div',
      className: 'github-link',
      content: `<a href=${this.githubLink} target='_blank'><i class="fab fa-chrome"></i></a>`,
    }).create()
    icons.appendChild(iconsIcon2)



    // add icons to icons container
    icons.appendChild(iconsIcon1);
    icons.appendChild(iconsIcon2);


    // add icons to about project container
    aboutProject.appendChild(icons)

    // add main containers to single project container
    project.appendChild(shortProject)
    project.appendChild(aboutProject)

    // add single project container to container for every project
    this.target.appendChild(project)
  }
}



// create projects from object data
let portfolioDataCont = portfolioData

portfolioData.forEach((item, i) => {
  new Portfolio({ ...item }).create()
})




const showMoreInfo = (portfolioDataCont) => {
  // show more info
  const projects = [...document.querySelectorAll('.short-project')]
  const projectsInfo = [...document.querySelectorAll('.about-project')]

  projects.forEach(item => item.addEventListener('click', function () {
    this.classList.toggle('show')
    projectsInfo[projects.findIndex(item2 => item2 === item)].classList.toggle('show')
  }))


  // switch images //////////////////////////////////////////////////////////////////////////////////////////////

  portfolioDataCont.forEach(item => {


    // show gallery - one higher than the other
    let allImagesFromThisProject = [...document.querySelectorAll(`.photo-gallery.${item.photoGalleryName} img`)]
    const perProj = 15 / (allImagesFromThisProject.length - 1)


    allImagesFromThisProject.forEach((item, id) => {
      item.style.transform = `translate(${id * perProj}%, ${id * perProj}%)`
      item.style.zIndex = allImagesFromThisProject.length - id
    })

    // swap left
    const leftArrow = document.querySelector(`.photo-gallery.${item.photoGalleryName} .arrow-left`)
    const prevPhoto = function () {
      let gallery = allImagesFromThisProject

      gallery[gallery.length - 1].style.zIndex = gallery.length + 1

      gallery[gallery.length - 1].style.transform = `translate(0%, -20%)`

      leftArrow.removeEventListener('click', prevPhoto)

      let current = gallery[gallery.length - 1]
      gallery.splice(gallery.length - 1, 1)
      gallery = [current, ...gallery,]

      setTimeout(() => {
        gallery.forEach((item, id) => {
          item.style.transform = `translate(${id * perProj}%, ${id * perProj}%)`
          item.style.zIndex = gallery.length - id
        }
        )
        allImagesFromThisProject = gallery
        leftArrow.addEventListener('click', prevPhoto)
      }, 500)
    }
    leftArrow.addEventListener('click', prevPhoto)


    // swap right
    const rightArrow = document.querySelector(`.photo-gallery.${item.photoGalleryName} .arrow-right`)
    const nextPhoto = function () {

      let gallery = allImagesFromThisProject;

      gallery[0].style.transform = `translate(0%, -20%)`
      rightArrow.removeEventListener('click', nextPhoto)
      let current = gallery[0]
      gallery.splice(0, 1)
      gallery = [...gallery, current]

      setTimeout(() => {
        gallery.forEach((item, id) => {
          item.style.transform = `translate(${id * perProj}%, ${id * perProj}%)`
          item.style.zIndex = gallery.length - id
        }
        )
        allImagesFromThisProject = gallery

        rightArrow.addEventListener('click', nextPhoto)

      }, 500)

    }

    rightArrow.addEventListener('click', nextPhoto)


  })
}

showMoreInfo(portfolioDataCont)