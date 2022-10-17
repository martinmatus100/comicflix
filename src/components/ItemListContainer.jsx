

const ItemListContainer = (props) => {
  return (
    <div className="banner__top">
        <div className="banner__top--box">
            <h3 className="banner__top--text">{props.greeting}</h3>
        </div>
    </div>
  );
};

export default ItemListContainer;