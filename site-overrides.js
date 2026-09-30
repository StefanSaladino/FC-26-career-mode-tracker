(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const media = {
    bayern: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Allianz_Arena_at_night.jpg/1280px-Allianz_Arena_at_night.jpg",
      credit: "Allianz Arena photo: Masi27185 / Wikimedia Commons — CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Allianz_Arena_at_night.jpg",
      objectPosition: "50% 58%",
      objectFit: "cover"
    },
    chiesa: {
      src: "assets/chiesa-napoli.webp",
      credit: "Season Room composite — fictional Napoli-kit visualization for this FC 26 save.",
      source: null,
      objectPosition: "50% 34%",
      objectFit: "cover"
    },
    pio: {
      src: "assets/pio-napoli.webp",
      credit: "Season Room composite — fictional Napoli-kit visualization for this FC 26 save.",
      source: null,
      objectPosition: "50% 31%",
      objectFit: "cover"
    },
    maradona: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Stadio_Diego_Armando_Maradona_2022_%281%29.jpg/1280px-Stadio_Diego_Armando_Maradona_2022_%281%29.jpg",
      credit: "Stadio Diego Armando Maradona photo: Joris / Wikimedia Commons — CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Stadio_Diego_Armando_Maradona_2022_(1).jpg",
      objectPosition: "50% 55%",
      objectFit: "cover"
    }
  };

  const articleMap = {
    "bayern-test": media.bayern,
    "chiesa-pisa": media.chiesa,
    "pio-shirt": media.pio,
    "three-nos": media.maradona
  };

  if (Array.isArray(D.articles)) {
    D.articles.forEach(article => {
      const image = articleMap[article.id];
      if (!image) return;
      article.image = image.src;
      article.imageCredit = image.credit;
      article.imageSource = image.source;
      article.objectPosition = image.objectPosition;
      article.objectFit = image.objectFit;
    });
  }

  D.media = [
    { type: "image", title: "Bayern: The First Real Test", src: media.bayern.src, tag: "Matchweek", credit: media.bayern.credit, source: media.bayern.source, objectPosition: media.bayern.objectPosition, objectFit: media.bayern.objectFit },
    { type: "image", title: "Chiesa: 80' and Chaos Over", src: media.chiesa.src, tag: "Player Focus", credit: media.chiesa.credit, source: media.chiesa.source, objectPosition: media.chiesa.objectPosition, objectFit: media.chiesa.objectFit },
    { type: "image", title: "Pio: The Shirt Is His For Now", src: media.pio.src, tag: "No. 9 Watch", credit: media.pio.credit, source: media.pio.source, objectPosition: media.pio.objectPosition, objectFit: media.pio.objectFit },
    { type: "image", title: "Napoli Hold the Line", src: media.maradona.src, tag: "Club", credit: media.maradona.credit, source: media.maradona.source, objectPosition: media.maradona.objectPosition, objectFit: media.maradona.objectFit },
    { type: "video-placeholder", title: "Gameplay Archive", tag: "Video", note: "Gameplay clips, goals and hype videos will live here once footage is added." }
  ];

  D.realPhotoCredits = [media.bayern, media.maradona];
})();
