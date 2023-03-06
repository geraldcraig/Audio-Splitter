import React from "react";

const Player = () => {

    return (
        <>
            {/*<head>*/}
            {/*    <meta charset="UTF-8"/>*/}
            {/*    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>*/}
            {/*    <link rel="stylesheet" href="../css/player.css"/>*/}
            {/*    <link rel="stylesheet" href="../css/index.css"/>*/}
            {/*    <link rel="stylesheet" href="https://unpkg.com/waveform-playlist@4.2.2/styles/playlist.css"/>*/}
            {/*    <script src="https://kit.fontawesome.com/ef69927139.js" crossorigin="anonymous"/>*/}
            {/*    <title>Audio Splitter</title>*/}
            {/*</head>*/}

            <body>
            <header>
                <h1>Audio Separation Project</h1>
            </header>
            <div class="container">
                <form class="form" method="post">
                    <fieldset>
                        <legend>Audio processing options</legend>
                        <input type="radio" id="2-stems" name="stems" value="spleeter:2stems"/>
                        <label for="2-stems">2-stems: Vocal + Other</label><br/>
                        <input type="radio" id="4-stems" name="stems" value="spleeter:4stems"/>
                        <label for="4-stems">4-stems: Vocal + Drums + Bass + Other</label><br/>
                        <input type="radio" id="5-stems" name="stems" value="spleeter:5stems"/>
                        <label for="5-stems">5-stems: Vocal + Drums + Bass + Piano + Other</label>
                    </fieldset>

                    <br/><br/>

                    <fieldset>
                        <legend>Select an audio file to process</legend>
                        <label for="file">Select audio file:</label>
                        <input type="text" id="file" name="file"/>
                    </fieldset>

                    <br/><br/>

                    <fieldset>
                        <legend>Select location to save stems</legend>
                        <label for="folder">Select a location:</label>
                        <input type="text" id="folder" name="folder"/>
                    </fieldset>

                    <br/><br/>

                    <input type="submit"/>
                </form>

                <br/><br/>

            </div>

            <button type="button" id="btn-play" title="Play">
                <i class="fas fa-play"></i>
            </button>
            <button type="button" id="btn-pause" title="Pause">
                <i class="fas fa-pause"></i>
            </button>
            <div id="playlist"></div>

            <footer>
                <p>Gerald Craig &copy 2023</p>
            </footer>

            {/*<script src="https://unpkg.com/waveform-playlist@4.2.2/build/waveform-playlist.var.min.js"></script>*/}
            {/*<script>*/}
            {/*    var playlist = WaveformPlaylist.init({*/}
            {/*    container: document.getElementById("playlist"),*/}
            {/*    samplesPerPixel: 128,*/}
            {/*    zoomLevels: [128, 256, 512],*/}
            {/*    controls: {*/}
            {/*    show: true*/}
            {/*}*/}
            {/*});*/}

            {/*    playlist.load([*/}
            {/*    {*/}
            {/*        src: "../audio_example.mp3"*/}
            {/*    }*/}
            {/*    ]).then(function () {*/}
            {/*    var ee = playlist.getEventEmitter();*/}
            {/*    document.getElementById("btn-play").addEventListener("click", function () {*/}
            {/*    ee.emit("play");*/}
            {/*});*/}

            {/*    document.getElementById("btn-pause").addEventListener("click", function () {*/}
            {/*    ee.emit("pause");*/}
            {/*});*/}
            {/*});*/}
            {/*</script>*/}

            {/*<script>*/}
            {/*    const formEl = document.querySelector('.form');*/}

            {/*    formEl.addEventListener('submit', event => {*/}
            {/*    event.preventDefault();*/}

            {/*    const formData = new FormData(formEl);*/}
            {/*    const data = Object.fromEntries(formData);*/}
            {/*    console.log(data);*/}

            {/*    fetch('http://127.0.0.1:5000/library', {*/}
            {/*    method: 'POST',*/}
            {/*    headers: {*/}
            {/*    'Content-Type': 'application/json'*/}
            {/*},*/}
            {/*    body: JSON.stringify(data)*/}
            {/*}).then(response => response.json())*/}
            {/*    .then(data => console.log(data))*/}
            {/*    .catch(error => console.log(error));*/}
            {/*});*/}
            {/*</script>*/}

            </body>
        </>
    );
};

export default Player;