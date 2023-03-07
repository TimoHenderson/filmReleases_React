import React from "react";
import FilmRelease from "./FilmRelease";

function FilmReleaseList({ filmReleases }) {
    const filmReleaseNodes = filmReleases.map(filmData => (
        <FilmRelease key={filmData.id} filmData={filmData} />
    ));
    return (
        <ul>
            {filmReleaseNodes}
        </ul>
    );
}
export default FilmReleaseList;