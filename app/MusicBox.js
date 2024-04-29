'use client'
import stlyes from "./style.css"
export default function MusicBox(props){//MusicBox component
    return(
        <div className="music-grid">
            <div className="image-box">
                <img src={props.source} alt="woaaaaaaahhhhhhhhhhhhhhhhhhh" className="music-image"></img>
            </div>
            <div className="music-info-box">
                <h1 className="song-name">{props.name}</h1>
                <p className="music-supp-text">on</p>
                <h1 className="album">{props.album}</h1>
                <p className="music-supp-text">by</p>
                <h1 className="artist-name">{props.artist}</h1>
                <p className="lyric">{props.lyric}</p>

            </div>
        </div>
    )
}