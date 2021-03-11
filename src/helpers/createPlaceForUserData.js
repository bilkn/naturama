import NoImg from '../assets/no-image.png';
import _ from 'lodash';
async function createPlaceForUserData(place) {
  const { wikipedia_extracts: wiki } = place;
  const placeText = (wiki && wiki.text) || '';

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
      name: name || '',
      location: state,
      distance,
      text: placeText,
      wikipedia,
    },
    preview,
    img,
    point,
  };
  return userPlace;
}

/* const getImgArrayBuffer = async (url) => {
  const response = await fetch(url);
  const imgBlob = await response.blob();
  const imgArrayBuffer = await blobToArrayBuffer(imgBlob);
  return imgArrayBuffer;
}; */

const createImgURLForUserData = async (place) => {
  const url = (place.preview && place.preview.source) || '';
  const preview = url ? createWikiImgURLForPlaceData(url, 350) : NoImg;

  if (url) {
    const fileName = url.split('-').slice(-1).join('');
    const attribution = await createAttributionObjectForWikiFile(fileName);
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
    const img = {
      small,
      medium,
      large,
      attribution,
    };
    return { preview, img };
  }
  return { preview, img: null };
};

const createWikiImgURLForPlaceData = (url, imageSize) => {
  return url.replace(/\d+px/, `${imageSize}px`);
};

const createAttributionObjectForWikiFile = async (fileName) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=File%3a${fileName}&format=json&origin=*`;
  const extmetadata = await extractMetadata(url);
  if (!extmetadata || extmetadata.Copyrighted.value === 'False') return null;
  const attribution = {
    artist: extmetadata.Artist?.value || '',
    licenseShort: extmetadata.LicenseShortName.value,
    licenseURL: extmetadata.LicenseUrl.value,
  };
  // !!! Fallback can be added in the future for licenses.
  return attribution;
};

const extractMetadata = async (url) => {
  const data = await fetch(url);
  const json = await data.json();
  const extmetadata = _.get(
    json,
    'query.pages["-1"].imageinfo["0"].extmetadata'
  );
  return extmetadata;
};

export default createPlaceForUserData;
