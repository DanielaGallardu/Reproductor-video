// Módulo (IIFE) 
const VideoPlayerModule = (() => {
  // Función privada 
  const setVideoUrl = (url, id) => {
    document.getElementById(id).setAttribute('src', url);
  };

 
  return { 
    // Función pública que llama a la función privada
    verVideo: (url, id) => {
      setVideoUrl(url, id);
    }
  };
})();
// Clase padre 
class Multimedia {
  #url; // Propiedad privada 
  
  constructor(url) {
    this.#url = url; 
  }
  // Get para obtener la URL
  getUrl = () => this.#url;

  setInicio = () => "Este método es para realizar un cambio en la URL del video";
}

// Clase hija de multimedia
class Reproductor extends Multimedia {
  #id; 
  constructor(url, id) {
    super(url);
    this.#id = id; 
  }

  playMultimedia = () => {
    VideoPlayerModule.verVideo(this.getUrl(), this.#id);
  };

  // Método para establecer el tiempo de inicio del video
  setInicio = (tiempo) => {
    let newUrl = `${this.Url}&amp;start=${tiempo}`;
    VideoPlayerModule.setVideo(newUrl, this.#id);
  };
}


// URLs 
let musicUrl ="https://www.youtube.com/embed/naQQ7nZEAts?si=SHSuKGvNaNGVHQlz" ; 
let movieUrl = "https://www.youtube.com/embed/V4ZDKt9KICo?si=YCH4ePU6bsI4Ceio"; 
let seriesUrl = "https://www.youtube.com/embed/KPLWWIOCOOQ?si=UtoRZzkEmqHlxeFi"; 

// instancias
let musicPlayer = new Reproductor(musicUrl, "musica");
let moviePlayer = new Reproductor(movieUrl, "peliculas");
let seriesPlayer = new Reproductor(seriesUrl, "series");


musicPlayer.playMultimedia();
moviePlayer.playMultimedia();
seriesPlayer.playMultimedia();


musicPlayer.setInicio(10);
