function createFileURL(file) {
  if (file instanceof File || file instanceof Blob) {
    const url = URL.createObjectURL(file);
    return url;
  } else if (
    typeof file === 'string' &&
    (file.includes('.png') || file.includes('.jpeg') || file.includes('.jpg'))
  )
    return file;
  throw Error(
    'Input must be a File, String (includes .png, .jpeg or .jpg), or Blob object.'
  );
}

export default createFileURL;
