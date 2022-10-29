import ItemListContainer from "../components/ItemListContainer";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { idCategory } = useParams();

  return (
    <>
      <Banner texto={idCategory} fondo="banner-category.png"></Banner>
      <ItemListContainer />
    </>
  );
};
