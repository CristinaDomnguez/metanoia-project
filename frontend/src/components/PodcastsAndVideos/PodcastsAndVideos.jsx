import React from 'react';
import "./PodcastsAndVideos.css";

export default function PodcastsAndVideos() {
    return (
        <>
            {/* Sección de Vídeos */}
            <section id="videos-section" className="videos-section layout-box">
                <h3>Vídeos</h3>
                <div className="videos-container">
                    <div className="videos">Vídeo 1</div>
                    <div className="videos">Vídeo 2</div>
                    <div className="videos">Vídeo 3</div>
                    <div className="videos">Vídeo 4</div>
                    <div className="videos">Vídeo 5</div>
                    <div className="videos">Vídeo 6</div>
                    <div className="videos">Vídeo 6</div>
                    <div className="videos">Vídeo 6</div>
                    <div className="videos">Vídeo 6</div>
                    <div className="videos">Vídeo 6</div>
                    <div className="videos">Vídeo 6</div>
                    <div className="videos">Vídeo 6</div>
                </div>
            </section>

            {/* Sección de Podcasts */}
            <section id="podcasts-section" className="podcasts-section layout-box">
                <h3>Podcasts</h3>
                <div className="podcasts-container">
                    <div className="podcast">Podcast 1</div>
                    <div className="podcast">Podcast 2</div>
                    <div className="podcast">Podcast 3</div>
                    <div className="podcast">Podcast 4</div>
                    <div className="podcast">Podcast 5</div>
                    <div className="podcast">Podcast 6</div>
                    <div className="podcast">Podcast 7</div>
                    <div className="podcast">Podcast 8</div>
                    <div className="podcast">Podcast 9</div>
                    <div className="podcast">Podcast 9</div>
                    <div className="podcast">Podcast 9</div>
                    <div className="podcast">Podcast 9</div>
                    <div className="podcast">Podcast 9</div>
                    <div className="podcast">Podcast 9</div>
                </div>
            </section>
        </>
    );
}
