import React from 'react'
import './Card.css'

const Card = (props) => {

    const classes = 'card ' + props.className

    // the following line would lead to the same result
    // return React.createElement('div', {className: classes, children: props.children})

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card