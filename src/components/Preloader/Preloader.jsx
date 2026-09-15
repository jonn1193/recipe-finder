import "./Preloader.css";
function Preloader() {
  return (
    <div className="preloader" aria-label="Loading recipes">
      <div className="circle-preloader" />
      <p className="preloader__text">Finding recipes...</p>
    </div>
  );
}

export default Preloader;

