import "./Card.css"     //Re usable wrapper component

const Card = (props) => {
    const classes = 'card' + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;