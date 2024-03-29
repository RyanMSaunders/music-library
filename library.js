const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
       printPlaylists: function() {
              // let playlistName = library.playlists.playlistCode
              for(let playlistCode in this.playlists){
                     let playlistName = this.playlists[playlistCode];
                     let numOfTracks = playlistName.tracks.length;
                     console.log(`${playlistCode}: ${playlistName.name}- ${numOfTracks} tracks`);
              }
       },
       printTracks: function() {
              for(let trackCode in this.tracks){
                     let trackObject = this.tracks[trackCode];
                     console.log(`${trackObject.id}: ${trackObject.name} by ${trackObject.artist} (${trackObject.album})`);
              }
       },
       printPlaylist: function(playlistId) {
              let playlistsKeys = Object.keys(this.playlists);
              let tracksKeys = Object.keys(this.tracks);
              
              
       
              if(playlistsKeys.includes(playlistId)){
                     let playlistName = this.playlists[playlistId];
                     let numOfTracks = playlistName.tracks.length;
                     console.log(`${playlistId}: ${playlistName.name}- ${numOfTracks} tracks`);
              }
              
              
       
              let trackValue = Object.values(this.playlists[playlistId].tracks);
              
              for(let i in trackValue){
                     let trackId = this.tracks[trackValue[i]].id;
                     let trackName = this.tracks[trackValue[i]].name;
                     let trackArtist = this.tracks[trackValue[i]].artist;
                     let trackAlbum = this.tracks[trackValue[i]].album;
       
                     console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
                     
              }
              
       },
       addTrackToPlaylist: function(trackId, playlistId) {
              let tracksArray = this.playlists[playlistId].tracks;
              tracksArray.push(trackId);
       },
       
       
       
       generateUid: function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            },
       addTrack: function(name, artist, album) {
              const newTrackId = this.generateUid();
              
              this.tracks[newTrackId] = {};
              this.tracks[newTrackId].id = newTrackId;
              this.tracks[newTrackId].name = name;
              this.tracks[newTrackId].artist = artist;
              this.tracks[newTrackId].album = album;
       
       },
       addPlaylist: function(name) {
              const newPlaylistId = this.generateUid();
              
              this.playlists[newPlaylistId] = {};
              this.playlists[newPlaylistId].id = newPlaylistId;
              this.playlists[newPlaylistId].name = name;
              this.playlists[newPlaylistId].tracks = [];
       
       },
       printSearchResults: function(query) {
              let tracksKeys = Object.keys(this.tracks);
              let tracksValues = Object.values(this.tracks);
       
              for(let i in tracksKeys){
                     let trackArr = [];
       
                     trackArr.push(this.tracks[tracksKeys[i]].id);
                     trackArr.push(this.tracks[tracksKeys[i]].name);
                     trackArr.push(this.tracks[tracksKeys[i]].artist);
                     trackArr.push(this.tracks[tracksKeys[i]].album);
                     for(let index in trackArr){
                            if(trackArr[index].search("tri") !== -1){
                                   console.log(this.tracks[tracksKeys[i]].name);
                            }
                     }
       
              }
              
       }
};

/*
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


const printPlaylists = function() {
       // let playlistName = library.playlists.playlistCode
       for(let playlistCode in library.playlists){
              let playlistName = library.playlists[playlistCode];
              let numOfTracks = playlistName.tracks.length;
             console.log(`${playlistCode}: ${playlistName.name}- ${numOfTracks} tracks`);
       }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for(let trackCode in library.tracks){
              let trackObject = library.tracks[trackCode];
              console.log(`${trackObject.id}: ${trackObject.name} by ${trackObject.artist} (${trackObject.album})`);
       }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let playlistsKeys = Object.keys(library.playlists);
       let tracksKeys = Object.keys(library.tracks);
       
       

       if(playlistsKeys.includes(playlistId)){
              let playlistName = library.playlists[playlistId];
              let numOfTracks = playlistName.tracks.length;
              console.log(`${playlistId}: ${playlistName.name}- ${numOfTracks} tracks`);
       }
       
       

       let trackValue = Object.values(library.playlists[playlistId].tracks);
       
       for(let i in trackValue){
              let trackId = library.tracks[trackValue[i]].id;
              let trackName = library.tracks[trackValue[i]].name;
              let trackArtist = library.tracks[trackValue[i]].artist;
              let trackAlbum = library.tracks[trackValue[i]].album;

              console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
              
       }
       
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       let tracksArray = library.playlists[playlistId].tracks;
       tracksArray.push(trackId);
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       const newTrackId = generateUid();
       
       library.tracks[newTrackId] = {};
       library.tracks[newTrackId].id = newTrackId;
       library.tracks[newTrackId].name = name;
       library.tracks[newTrackId].artist = artist;
       library.tracks[newTrackId].album = album;

}


// adds a playlist to the library
const addPlaylist = function(name) {
       const newPlaylistId = generateUid();
       
       library.playlists[newPlaylistId] = {};
       library.playlists[newPlaylistId].id = newPlaylistId;
       library.playlists[newPlaylistId].name = name;
       library.playlists[newPlaylistId].tracks = [];

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
       let tracksKeys = Object.keys(library.tracks);
       let tracksValues = Object.values(library.tracks);

       for(let i in tracksKeys){
              let trackArr = [];

              trackArr.push(library.tracks[tracksKeys[i]].id);
              trackArr.push(library.tracks[tracksKeys[i]].name);
              trackArr.push(library.tracks[tracksKeys[i]].artist);
              trackArr.push(library.tracks[tracksKeys[i]].album);
              for(let index in trackArr){
                     if(trackArr[index].search("tri") !== -1){
                            console.log(library.tracks[tracksKeys[i]].name);
                     }
              }

       }
       
}

// printPlaylists()
// printTracks()
// printPlaylist("p02")
// printPlaylist("p02")


addTrackToPlaylist("t01", "p02")
//TESTING ADDTRACK printPlaylist("p02")
// console.log(generateUid())

addTrack("Let it Be", "The Beatles", "Let It Be (1970)")

addPlaylist("My playlist")

printSearchResults("string string")

*/

// library.printPlaylists()
// library.printTracks()
// library.printPlaylist("p02")
// library.printPlaylist("p02")


library.addTrackToPlaylist("t01", "p02")
//TESTING ADDTRACK printPlaylist("p02")
// console.log(generateUid())

library.addTrack("Let it Be", "The Beatles", "Let It Be (1970)")

library.addPlaylist("My playlist")
library.printPlaylists()

library.printSearchResults("string string")