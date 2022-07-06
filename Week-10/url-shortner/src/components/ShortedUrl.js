import React, { useRef } from "react";

function ShortedUrl(props) {

    const data = props.response.data;
    const statusCode = props.response.status;
    const shortenedUrlRef = useRef(null);


    function copyToClipBoard(event) {
        shortenedUrlRef.current.select();
        document.execCommand('copy')
        event.target.focus();
        alert(`${data.result.full_short_link} short url is copied!`)
    }

    return (
        <div className="urlshortner--output">
            <input type='text' value={statusCode === 201 ? data.result.full_short_link : ''} ref={shortenedUrlRef} onClick={copyToClipBoard}/>
        </div>
    )
}

export default ShortedUrl;