import NoImg from '../assets/no-img.svg';
import _ from 'lodash';
async function createPlaceForUserData(place) {
  const { wikipedia_extracts: wiki } = place;
  const placeText = (wiki && wiki.text) || '';

  const { preview, img } = await createImgURLForUserData(place);
  const {
    name = 'Unknown',
    distance = 'Unknown',
    wikipedia = '',
    point = '',
  } = place;

  const state = place.address?.state || 'Unknown';

  const userPlace = {
    xid: place.xid,
    content: {
      name,
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

async function createImgURLForUserData(place) {
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
}

function createWikiImgURLForPlaceData(url, imageSize) {
  return url.replace(/\d+px/, `${imageSize}px`);
}

async function createAttributionObjectForWikiFile(fileName) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=File%3a${fileName}&format=json&origin=*`;
  const extmetadata = await extractMetadata(url);

  if (!extmetadata || extmetadata.Copyrighted?.value === 'False' || '')
    return null;
  const artistValue = extmetadata.Artist?.value;
  const { artist, href } = artistValue
    ? extractHrefAndUsernameFromArtistValue(artistValue)
    : { artist: '', href: '' };
  const attribution = {
    artist,
    href,
    licenseShort: extmetadata.LicenseShortName?.value || '',
    licenseURL: extmetadata.LicenseUrl?.value || '',
  };


  // !!! Fallback can be added in the future for licenses.
  return attribution;
}

async function extractMetadata(url) {
  const data = await fetch(url);
  const json = await data.json();
  const extmetadata = _.get(
    json,
    'query.pages["-1"].imageinfo["0"].extmetadata'
  );
  return extmetadata;
}

function extractHrefAndUsernameFromArtistValue(value) {
  const hrefRegex = /href="(.*?)"/;
  const artistRegex = /User:(\w*?)(\W|$)/;
  const hrefMatchResult = value.match(hrefRegex);
  const artistMatchResult = value.match(artistRegex);
  const href = hrefMatchResult ? hrefMatchResult[1] : '';
  const artist = artistMatchResult ? value.match(artistRegex)[1] : 'source';
  return { href, artist };
}

export default createPlaceForUserData;
