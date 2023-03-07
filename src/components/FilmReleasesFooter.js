import React from "react";

function FilmReleasesFooter() {
    const releasesLink = "https://www.imdb.com/calendar/?region=gb"
    const releasesString = "View more upcoming releases >>"
    return (
        <footer>
            <a href={releasesLink}>{releasesString}</a>
        </footer>
    );
}

export default FilmReleasesFooter;