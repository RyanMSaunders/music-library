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
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       // let playlistName = library.playlists.playlistCode
       for(let playlistCode in library.playlists){
              // console.log(playlistCode)
              let playlistName = library.playlists[playlistCode]
              // console.log(playlistName)
              // console.log(playlistName.name)
              let numOfTracks = playlistName.tracks.length
       
       
             console.log(`${playlistCode}: ${playlistName.name}- ${numOfTracks} tracks`)
       }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for(let trackCode in library.tracks){
              let trackObject = library.tracks[trackCode]
              console.log(`${trackObject.id}: ${trackObject.name} by ${trackObject.artist} (${trackObject.album})`)
       }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let playlistsKeys = Object.keys(library.playlists)
       let tracksKeys = Object.keys(library.tracks)
       
       

       if(playlistsKeys.includes(playlistId)){
              let playlistName = library.playlists[playlistId]
              let numOfTracks = playlistName.tracks.length
              console.log(`${playlistId}: ${playlistName.name}- ${numOfTracks} tracks`)
       }
       
       

       let trackValue = Object.values(library.playlists[playlistId].tracks)
       
       for(let i in trackValue){
              let trackId = library.tracks[trackValue[i]].id
              let trackName = library.tracks[trackValue[i]].name
              let trackArtist = library.tracks[trackValue[i]].artist
              let trackAlbum = library.tracks[trackValue[i]].album

              console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`)
              
       }
       
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       let tracksArray = library.playlists[playlistId].tracks
       tracksArray.push(trackId)
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       const newTrackId = generateUid()
       
       library.tracks[newTrackId] = {}
       library.tracks[newTrackId].id = newTrackId
       library.tracks[newTrackId].name = name
       library.tracks[newTrackId].artist = artist
       library.tracks[newTrackId].album = album




}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}

// printPlaylists()
// printTracks()
// printPlaylist("p02")
// printPlaylist("p02")


addTrackToPlaylist("t01", "p02")
//TESTING ADDTRACK printPlaylist("p02")
// console.log(generateUid())

addTrack("Let it Be", "The Beatles", "Let It Be (1970)")
