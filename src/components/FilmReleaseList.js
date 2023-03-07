import React from "react";
import FilmRelease from "./FilmRelease";

function FilmReleaseList({ filmReleases }) {
    const filmReleaseNodes = filmReleases.map(filmRelease => (
        <FilmRelease filmData={filmRelease} key={filmRelease.id} />
    ));
    return (
        <ul>
            {filmReleaseNodes}
        </ul>
    );
}
export default FilmReleaseList;