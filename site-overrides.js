(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const realPhotos = {
    bayern: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Allianz_Arena_at_night.jpg/1280px-Allianz_Arena_at_night.jpg",
      credit: "Allianz Arena photo: Masi27185 / Wikimedia Commons — CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Allianz_Arena_at_night.jpg"
    },
    chiesa: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Federico_Chiesa_04012026_%281%29.jpg/960px-Federico_Chiesa_04012026_%281%29.jpg",
      credit: "Federico Chiesa photo: Timmy96 / Wikimedia Commons — CC0",
      source: "https://commons.wikimedia.org/wiki/File:Federico_Chiesa_04012026_(1).jpg"
    },
    pio: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Francesco_Pio_Esposito_a_La_Spezia_%28cropped%29.jpg",
      credit: "Francesco Pio Esposito photo: NewMicrosoikos / Wikimedia Commons — CC0",
      source: "https://commons.wikimedia.org/wiki/File:Francesco_Pio_Esposito_a_La_Spezia_(cropped).jpg"
    },
    maradona: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Stadio_Diego_Armando_Maradona_2022_%281%29.jpg/1280px-Stadio_Diego_Armando_Maradona_2022_%281%29.jpg",
      credit: "Stadio Diego Armando Maradona photo: Joris / Wikimedia Commons — CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Stadio_Diego_Armando_Maradona_2022_(1).jpg"
    }
  };

  const articleMap = {
    "bayern-test": realPhotos.bayern,
    "chiesa-pisa": realPhotos.chiesa,
    "pio-shirt": realPhotos.pio,
    "three-nos": realPhotos.maradona
  };

  if (Array.isArray(D.articles)) {
    D.articles.forEach(article => {
      const photo = articleMap[article.id];
      if (!photo) return;
      article.image = photo.src;
      article.imageCredit = photo.credit;
      article.imageSource = photo.source;
    });
  }

  D.media = [
    { type: "image", title: "Bayern: The First Real Test", src: realPhotos.bayern.src, tag: "Matchweek", credit: realPhotos.bayern.credit, source: realPhotos.bayern.source },
    { type: "image", title: "Chiesa: 80' and Chaos Over", src: realPhotos.chiesa.src, tag: "Player Focus", credit: realPhotos.chiesa.credit, source: realPhotos.chiesa.source },
    { type: "image", title: "Pio: The Shirt Is His For Now", src: realPhotos.pio.src, tag: "No. 9 Watch", credit: realPhotos.pio.credit, source: realPhotos.pio.source },
    { type: "image", title: "Napoli Hold the Line", src: realPhotos.maradona.src, tag: "Club", credit: realPhotos.maradona.credit, source: realPhotos.maradona.source },
    { type: "video-placeholder", title: "Gameplay Archive", tag: "Video", note: "Gameplay clips, goals and hype videos will live here once footage is added." }
  ];

  D.realPhotoCredits = Object.values(realPhotos);
})();
