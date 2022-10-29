const Banner = ({ texto, fondo }) => {
  return (
    <div className="banner__top" style={{backgroundImage: `url("../images/banners/${fondo}")`}}>
      <div className="banner__top--box">
        <h3 className="banner__top--text">{texto.toUpperCase()}</h3>
      </div>
    </div>
  );
};

export default Banner;
