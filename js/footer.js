document.addEventListener('DOMContentLoaded', init);

function loadTemplate(fileName, id, callback) {

    fetch(fileName).then((res) => {
        return res.text();
    }).then((text) => {
        document.getElementById(id).innerHTML = text;
        //console.log(text)

        if(callback){
            callback();
        }
    })
}


function init() {
    loadTemplate('./showEventInformation.html', 'footer');
    
    /**loadTemplate('./sidebar_links.html', 'links',addMovies);**/
}

