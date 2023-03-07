import React from "react";
import FilmRelease from "./FilmRelease";

function FilmReleaseList({ filmReleases }) {
    const filmReleaseNodes = filmReleases.map(filmRelease => (
        <FilmRelease key={filmRelease.id} filmData={filmRelease} />
    ));
    return (
        <ul>
            {filmReleaseNodes}
        </ul>
    );
}
export default FilmReleaseList;