import React, {useState} from "react";
import axios from "axios";
import ShortedUrl from "./ShortedUrl";

function UrlShortner() {

    const SHORTNING_API_URL = "https://api.shrtco.de/v2/shorten";
    let [longUrl, setLongUrl] = useState("");
    let [shortUrlResponse, setShortUrlResponse] = useState("");

    function handleUrl(event) {
        const url = event.target.value;
        setLongUrl(url);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const params = `url=${longUrl}`;
        axios.get(SHORTNING_API_URL + "?" + params)
            .then(res => {
                setShortUrlResponse(res)
            })
            .catch(err => {
                alert(err.response.data.error)
        })
    }

    return(
        <div className="urlshortner--form">
            <form>
                <input className="urlshortner--form-input" type="url" value={longUrl} name="input-url" onChange={handleUrl} />
                <button className="urlshortner--button-submit" onClick={handleSubmit}>Short Url</button>
            </form>
            <ShortedUrl response={shortUrlResponse} />
        </div>
    );

}

export default UrlShortner;