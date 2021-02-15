import blobToArrayBuffer from './blobToArrayBuffer';

async function createPlaceForUserData(place) {
  const img = place.preview
    ? await getImgArrayBuffer(place.preview.source)
    : null;
  const placeText = place.wikipedia_extracts.text;
  const userPlace = {
    xid: place.xid,
    content: {
      name: place.name,
      location: place.address.state,
      distance: place.distance,
      text: placeText,
    },
    img: img,
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
