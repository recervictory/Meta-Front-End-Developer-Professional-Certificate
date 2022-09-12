const Card = (props) => {
    const CardStyle = {
        textAlign: 'center',
        backgroundColor: props.backgroundColor,
        padding: '10px',
        border: '1px solid',
        margin: '10px'

    }

    return (
        <div className="card" style={CardStyle}>
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
        </div>
    );
}

export default Card;