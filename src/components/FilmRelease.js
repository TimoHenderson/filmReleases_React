import React from "react";

function FilmRelease(props) {
    const { name, url } = props.filmData;
    return (
        <li >
            <a href={url}>{name}</a>
        </li>
    );
}
export default FilmRelease;