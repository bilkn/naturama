import blobToArrayBuffer from './blobToArrayBuffer';

async function createPlaceForUserData(place) {
  const img = place.preview
    ? await getImgArrayBuffer(place.preview.source)
    : null;
  const { wikipedia_extracts: wiki } = place;
  const placeText = (wiki && wiki.text) || '';

  const preview = {
    source: img ? place.preview.source : '',
    height: img ? place.preview.height : null,
    width: img ? place.preview.width : null,
  };
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

export default createPlaceForUserData;
