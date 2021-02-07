import './PersonImgContainer.scss';
function PersonImgContainer({ createFileURL, currentPicture, nameContainer }) {
  return (
    <div className="person-img-container">
      <img
        className="person-img-container__img"
        src={createFileURL(currentPicture)}
        alt={nameContainer.current.value}
      />
    </div>
  );
}

export default PersonImgContainer;
