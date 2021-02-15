import arrayBufferToBlob from "./arrayBufferToBlob";
function createFileURL(file) {
  if (file instanceof File || file instanceof Blob || file instanceof ArrayBuffer) 
  {
    const fileClone = file instanceof ArrayBuffer ? arrayBufferToBlob(file) : file;
    const url = URL.createObjectURL(fileClone);
    return url;
  } else if (
    typeof file === 'string' &&
    (file.includes('.png') || file.includes('.jpeg') || file.includes('.jpg'))
  )
    return file;
  throw Error(
    'Input must be a File, String (includes .png, .jpeg or .jpg), Blob or ArrayBuffer object.'
  );
}





export default createFileURL;
