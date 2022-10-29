import ItemListContainer from "../components/ItemListContainer";
import Banner from "../components/Banner";

export const Home = () => {
  return (
    <div className="home__box">
      <Banner texto="ROUND 13" fondo="banner-home.png" style={{backgroundPosition: '40% 60%'}}></Banner>
      <ItemListContainer />
    </div>
  );
};
