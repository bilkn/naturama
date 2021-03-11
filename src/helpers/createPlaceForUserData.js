import blobToArrayBuffer from './blobToArrayBuffer';

async function createPlaceForUserData(place) {
  const { wikipedia_extracts: wiki } = place;
  const placeText = (wiki && wiki.text) || '';

  console.log(place);
  const { preview, img } = await createImgURLForUserData(place);
  const {
    name,
    distance,
    wikipedia,
    point,
    address: { state },
  } = place;
  const userPlace = {
    xid: place.xid,
    content: {
      name,
      location: state,
      distance,
      text: placeText,
      wikipedia,
    },
    preview: {
      ...preview,
    },
    img,
    point,
  };
  return userPlace;
}

const getImgArrayBuffer = async (url) => {
  const response = await fetch(url);
  const imgBlob = await response.blob();
  const imgArrayBuffer = await blobToArrayBuffer(imgBlob);
  return imgArrayBuffer;
};

const createImgURLForUserData = async (place) => {
  const url = (place.preview && place.preview.source) || '';
  const preview = url
    ? await getImgArrayBuffer(createWikiImgURLForPlaceData(url, 250))
    : null;

  if (url) {
    const fileName = url.split('-').slice(-1).join('');
    console.log('filename', fileName);
    const small = {
      source: createWikiImgURLForPlaceData(url, 250),
      width: 250,
    };
    const medium = {
      source: createWikiImgURLForPlaceData(url, 500),
      width: 500,
    };
    const large = {
      source: createWikiImgURLForPlaceData(url, 1024),
      width: 1024,
    };
    const imgData = await fetch(large.source)
    console.log(imgData)
    const img = {
      small,
      medium,
      large,
      attribution: await createAttributionObjectForWikiFile(fileName),
    };
    return { preview, img };
  }
  return { preview, img: null };
};

const createWikiImgURLForPlaceData = (url, imageSize) => {
  return url.replace(/\d+px/, `${imageSize}px`);
};

const createAttributionObjectForWikiFile = async (fileName) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=File%3a${fileName}&format=json`;
  const data = await fetch(url);
  console.log(data);
};

export default createPlaceForUserData;
