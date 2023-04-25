// input variable that receives text string from HTML input box
// create element for search button

var input = document.getElementById("input");
var search = document.getElementById("searchbutton");


function searchClick() {
   
    // calls the YT data API
    // GET https://www.googleapis.com/youtube/v3/search


    console.log(input.value);

    /* 1) triggers YT data API
    2) returns list of links
    3) triggers lyrics API
    4) stores lyrics API
    5) triggers dynamic creation of JS search results box */
}


search.addEventListener('click', searchClick);


// feature/lyricsAPI
//linked lyrics database
var requestURL = "https://api.lyrics.ovh/v1/artist/title";



// YT data API key: AIzaSyBHj9EPuptQC5RJjuRdyrT3jmI82emkqlo

// search result	: contains info about search results

// 


// send input.text value to YT data API


/* event listener for search button...
        1) triggers YT data API
        2) returns list of links
        3) triggers lyrics API
        4) stores lyrics API
        5) triggers dynamic creation of JS search results box
        */

/* talk to YT data site via API
1) send search string
2) GET results
3) display results in new box
*/


// CODE THAT TALKS TO YT VIDEO PLAYER


// CODE THAT CREATES CONTAINER TO PLAY THE VIDEO IN


// CODE THAT RETRIEVES LYRICS FROM MUSIXMATCH

// CODE THAT CREATES LYRICS BOX