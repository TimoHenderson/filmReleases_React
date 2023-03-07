import React from "react";

function FilmReleasesFooter() {
    const releasesLink = "https://www.imdb.com/calendar/?region=gb"
    const releasesString = "View more upcoming releases >>"
    return (
        <footer>
            <hr />
            <a href={releasesLink}> <h3>{releasesString}</h3></a>
        </footer>
    );
}

export default FilmReleasesFooter;