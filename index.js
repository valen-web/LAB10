class Serie {
  constructor(imgSrc, rating, saveBtnClass, desc, ratingbaner, name) {
    this.imgSrc = imgSrc;
    this.rating = rating;
    this.saveBtnClass = saveBtnClass;
    this.desc = desc;
    this.ratingbaner = ratingbaner;
    this.name = name
    }

    toHtml(id) {
      return `
    <div class="serie">
          <a href="#" ><img src="${this.imgSrc}" id= "item" class="imagenpeli"> <p>${this.rating}</p></a>
          <div class="guardar">${this.saveBtnClass}</div>
          </div>
          `}

      toBanner() {
            return `
              <h1 id="name">${this.name}</h1>
              <h4 id="ratingbaner">${this.ratingbaner}</h4>
              <p id="desc">${this.desc}</p>
              <button role="button" class="button" id="save"><i class="fa-solid fa-bookmark"></i> Save</button>
              <button id="play" role="button" class="button"><i class="fas fa-play"></i> Play </button>
              <p>13+</p>
            `;
          }
        }


const s1 = new Serie(
  "https://ia.tmgrup.com.tr/fe8f40/0/0/0/0/750/1089?u=https://i.tmgrup.com.tr/es/2021/04/05/friendsin-ozel-bolumu-onumuzde-hafta-cekilecek-1617631100760.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>", "describcion", "(4,5)", "Friends"
);

const s2 = new Serie(
  "https://pics.filmaffinity.com/grace_and_frankie-101831163-mmed.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>", "Grace y Frankie", "(4,6)", "Grace y Frankie"
);

const s3 = new Serie(
  "https://static.wikia.nocookie.net/drama/images/1/10/It%27s_Okay_to_Not_Be_Okay-tvN-2020-01.jpg/revision/latest/scale-to-width-down/250?cb=20200527194054&path-prefix=es", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>", "It's okay not yo be okay", "(4,0)", "it's okay not to be okay"
);

const s4 = new Serie(
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/A_Series_of_Unfortunate_Events_season_1_poster.jpg/250px-A_Series_of_Unfortunate_Events_season_1_poster.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s5 = new Serie(
  "https://pics.filmaffinity.com/The_Good_Place_Serie_de_TV-605671019-large.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s6 = new Serie(
  "https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/modern-family/modern-family-description-image.jpg/_jcr_content/renditions/original.JPEG", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s7 = new Serie(
  "https://pics.filmaffinity.com/Orgullo_y_prejuicio-197724218-large.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s8 = new Serie(
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e2640ec6f13f38927422c0841c924225.jpe", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s9 = new Serie(
  "https://img1.ak.crunchyroll.com/i/spire4/aca67c20cfebb66369acb168168d0bdc1637343068_main.png", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s10 = new Serie(
  "https://m.media-amazon.com/images/M/MV5BOGQ1YmM5OWUtY2VmOS00NWU2LWE3NzQtNjY5ZDQ3OTZiYzQyXkEyXkFqcGdeQXVyNzkyMDA5MTc@._V1_.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s11 = new Serie(
  "https://pics.filmaffinity.com/Heartstopper_Serie_de_TV-548919035-large.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s12 = new Serie(
  "https://static.wikia.nocookie.net/doblaje/images/6/6d/VE_Eternal.jpg/revision/latest?cb=20210718000733&path-prefix=es", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s13 = new Serie(
  "https://cdn.myanimelist.net/images/about_me/ranking_items/6808272-2bc59abb-5854-4c0e-aa02-1a938cc2b114.jpg?t=1672394338", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s14 = new Serie(
  "https://static.wikia.nocookie.net/studioghibli/images/b/b7/El_recuerdo_de_Marnie_ingl%C3%A9s.jpg/revision/latest/scale-to-width-down/250?cb=20200529013400&path-prefix=es", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s15 = new Serie(
  "https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);

const s16 = new Serie(
  "https://pics.filmaffinity.com/Death_Note_Serie_de_TV-660373023-large.jpg", "rating <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>", "<i class='fa-regular fa-bookmark'></i>"
);




const contenedorbaner = document.getElementById("baner")


const contenedor = document.getElementById("carrusel")
const contenedor2 = document.getElementById("carrusel2")
const series = [s1, s2, s3, s4, s5, s6, s7, s8]
const series2 = [s9, s10, s11, s12, s13, s14, s15, s16]

function showlist2() {
  for(let i = 0; i < series2.length; i++) {
    const serie = series2[i]
    contenedor2.innerHTML += serie.toHtml(i)
}
}
showlist2();

function showlist() {
  for(let i = 0; i < series.length; i++) {
    const serie = series[i]
    contenedor.innerHTML += serie.toHtml(i)
}
}

showlist();

 function setBannerInfo(name, desc, ratingbaner) {
  
  var rating = document.getElementById("ratingbaner")
  rating.innerHTML = ratingbaner

  var nameH2 = document.getElementById("name")
  nameH2.innerHTML = name

  var descP = document.getElementById("desc")
  descP.innerHTML = desc

  var contenedorbaner = document.getElementById("banner");
  contenedorbaner.style.backgroundImage = `${this.src}`
}

function setBannerInfoNew(Serie) {
  const contenedorbaner = document.getElementById("baner")
  contenedorbaner.innerHTML = Serie.toBanner()
}

function serieSelected(id) {
  const Serie = series[id]
  setBannerInfo(Serie)
}


for(let j = 0; j < series.length; j++) {
  const Serie = series[j]
  const item = document.getElementById(`item-${j}`)
  item.addEventListener("click", function() {
    serieSelected(j);
  })
}














