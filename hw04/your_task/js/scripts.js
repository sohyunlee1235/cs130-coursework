const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const play_the_music = (ev) => {
    const elem = ev.currentTarget;
    const previewURL = elem.dataset.previewTrack;
    if (previewURL !== null) {
        audioPlayer.setAudioFile(previewURL);
        audioPlayer.play();
        document.querySelector("footer .track-item").setAttribute('data-preview-track', `${previewURL}`);
    } else {
        console.log('No preview available.');
    };
    document.querySelector("footer .track-item").innerHTML = elem.innerHTML;    
}

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    const track_search_term = term;
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${track_search_term}&limit=5`;
    fetch(url)
        .then((result) => {
                return result.json()
            }
        ).then((tracks) => {
                if (tracks.length == 0 ){
                    document.querySelector("#tracks").innerHTML=`
                        <section class="track-item preview" data-preview-track="">
                            <img src="">
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h3> </h3>
                                <p>
                                    No tracks found that match your search criteria.
                                </p>
                            </div>
                        </section>`
                } else {
                    let i=0
                    document.querySelector('#tracks').innerHTML=""
                    for (track of tracks) {
                        track_name = tracks[i].name;
                        track_artist= tracks[i].artist.name;
                        track_image = tracks[i].album.image_url;
                        track_preview = tracks[i].preview_url;
                        i += 1
                        document.querySelector('#tracks').innerHTML += `
                            <section class="track-item preview" data-preview-track="${track_preview}" onclick="play_the_music(event);">
                                <img src="${track_image}">
                                <i class="fas play-track fa-play" aria-hidden="true"></i>
                                <div class="label">
                                    <h3>${track_name}</h3>
                                    <p>
                                        ${track_artist}
                                    </p>
                                </div>
                            </section>`
                    }                    
                }
            }
        );
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
    const album_search_term = term;
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${album_search_term}`;
    fetch(url)
        .then((result) => {
                return result.json()
            }
        ).then((albums) => {
            if (albums.length == 0 ){
                document.querySelector("#albums").innerHTML=`
                <p>No albums were returned.`
            } else {
                let i=0
                document.querySelector('#albums').innerHTML=""
                for (album of albums) {
                    album_name = albums[i].name;
                    album_id= albums[i].id;
                    album_image = albums[i].image_url;
                    album_link = albums[i].spotify_url;
                    i += 1
                    document.querySelector('#albums').innerHTML += `
                    <section class="album-card" id="${album_id}">
                        <div>
                            <img src="${album_image}">
                            <h3>${album_name}</h3>
                            <div class="footer">
                                <a href="${album_link}" target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>`
                    }                
                }
            }
        );
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    const artist_search_term = term;
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${artist_search_term}&limit=1`;
    fetch(url)
        .then((result) => {
                return result.json()
            }
        ).then((artists) => {
                if (artists.length == 0 ){
                    document.querySelector(".artist-card h3").innerHTML = "";
                    document.querySelector(".artist-card").id = "";
                    document.querySelector(".artist-card img").src = "";
                    document.querySelector(".artist-card a").href = "";
                    document.querySelector(".artist-card a").innerHTML = "No artist has been returned.";

                } else {
                    artist_name = artists[0].name;
                    artist_id= artists[0].id;
                    artist_image = artists[0].image_url;
                    artist_link = artists[0].spotify_url;
                    document.querySelector(".artist-card h3").innerHTML = artist_name;
                    document.querySelector(".artist-card").id = artist_id;
                    document.querySelector(".artist-card img").src = artist_image;
                    document.querySelector(".artist-card a").href = artist_link;
                    document.querySelector(".artist-card a").innerHTML = "view on Spotify";
                }
            }
        );
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    // console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};