import React, { useState } from "react";
import FilmReleaseList from "../components/FilmReleaseList";
import FilmReleasesFooter from "../components/FilmReleasesFooter";
import FilmReleasesHeader from "../components/FilmReleasesHeader";

function FilmReleasesBox() {
    return (
        <>
            <FilmReleasesHeader />
            <FilmReleaseList />
            <FilmReleasesFooter />
        </>
    );
}

export default FilmReleasesBox;