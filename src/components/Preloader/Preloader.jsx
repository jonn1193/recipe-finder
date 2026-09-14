function Preloader() {
  return (
    <div className="preloader" aria-label="Loading recipes">
      <span className="preloader__circle" />
      <p className="preloader__text">Finding recipes...</p>
    </div>
  );
}

export default Preloader;
