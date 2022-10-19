// A Component for Education and Experience Bullets
import React from "react";

const EdExBullet = (props) => {
    const { name, sub, location, start, end, description } = props;

    return (
        <div>
            <h2>{name}</h2>
            <h4>{sub} || {location}</h4>
            <p>{start} - {end}</p>
            <p>{description}</p>
        </div>
    )
}

export default EdExBullet;