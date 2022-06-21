window.onload
//Get Location
function getLocation(){
    if("geolocation" in navigator) {
        //console.log('Location available!');
        navigator.geolocation.getCurrentPosition(function getLocation(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var location = ('Location: ' + lat + ' , ' + long);
            return location;
        });
    }
    else {
        console.log('Location unavailable.');
    }
}



//Listen for Submit
//eventForm.addEventListener('submit', function findEvent(){
    //Grab HTML Elements
    var eventForm = document.querySelector('#eventForm');
    var name = document.getElementById('name').value;
    var category = document.getElementById('category').value;
    var container = document.getElementById('container');
    var result = document.getElementById('result');

    //Validate input
    name = name.trim();
    category = category.trim();

    //Get location of user
    getLocation();

    //Query API for Events According to Category
    var url = 'https://www.eventbriteapi.com/v3/users/me/?token=KPN7WQHA5AIGVQQWMPBR';
    url = 'https://jsonplaceholder.typicode.com/users';
    //*** For loop to get category values & append to end of url ***//

    //Return only events in music category near location
    if(category.value == 'Music') {
        url = url + '';
    }
    //Return only events in entertainment category near location
    if (category.value == 'Entertainment'){
        url = url + '';
    }
    //Return only events in sports category near location
    if (category.value == 'Sports'){
        url = url + '';
    }
    //Return only events in theater category near location
    if (category.value == 'Theater'){
        url = url + '';
    }
    //Return only events in conference category near location
    if (category.value == 'Conference'){
        url = url + '';
    }

    //Get events from Eventbrite
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    .then( function appendToDiv () {
    //Return only events in category near location
    const results = res.foreach(res => {
        //return
        `   <div class="results">
                <img class="result-img" src=""/>
                <a class="links" href="">
                    <h2 class="result-title">${Array.name}</h2>
                </a>
                <h5 class="result-date">${Array.username}</h5>
                <p class="result-cost">${Array.id}</p>
            </div>`
            result.innerHTML += results;
    //});
    //Append results to div
    
    //findEvent();
//});
    })});
