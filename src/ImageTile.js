
function ImageTile() {
  return (
    <div className="center jumbotron">
      <ul id="gallery">
        <li className="image-item" id="image-3"><img src={`${process.env.PUBLIC_URL}/logo192.png`} /></li>
        <li className="image-item" id="image-4"><img src="/cats_and_dogs/4.jpg" /></li>
      </ul>
    </div>
  );
}

export default ImageTile;
