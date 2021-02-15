function arrayBufferToBlob(buffer, type) {
  return new Blob([buffer], { type: type });
}

export default arrayBufferToBlob;