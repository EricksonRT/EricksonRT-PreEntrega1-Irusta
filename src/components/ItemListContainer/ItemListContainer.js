export const ItemListContainer = (props) => {
    const { texto, descripcion } = props;
    return (
        <div className="container">
            <h3>{texto}</h3>
            <h5>{descripcion}</h5>
        </div>
    );
}