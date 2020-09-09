window.addEventListener('load', () => {
    let long;
    let lat;
    let tempdesc = document.querySelector('.temprature-description');
    let tempDegree = document.querySelector('.temprature-degree');
    let timezone = document.querySelector('.location-timezone');
    var nameCountry = prompt('Enter the region');
    let degree = document.querySelector('.degree-section');
    let degreeSpan = document.querySelector('.degree-section span');
    //let icon = document.querySelector('.icons');
    //var skycons = new Skycons({"color": "white"});
    // console.log(name);
    const api = `http://api.weatherstack.com/current?access_key=0e0d08c073cc777900144d013d0e3fba&query=${nameCountry}`;
    fetch(api)
    .then(response => {
        return response.json();
    }).then(data => {

        const {temperature, weather_descriptions} = data.current;
        const {localtime} = data.location;
        var statename = data.location.name;
        var countryname = data.location.country;
        // const {} = data.current['weather_descriptions']
        tempDegree.textContent = temperature;
        tempdesc.textContent = weather_descriptions
        timezone.textContent = countryname+' / '+statename;
        // icon.textContent = weather_icons;
        // set icons 
        // setIcon(icons, document.querySelector('.icon'));
        // skycons.add(icon, Skycons.PARTLY_CLOUDY_DAY);
        // skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
        // skycons.play();

        // setting the temprature
        degree.addEventListener('click', () =>{
            if(degreeSpan.textContent === 'F'){
                degreeSpan.textContent = 'C';
            }else{
                degreeSpan.textContent = 'F';
            }
        })
    });
/*
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position)
            fetch(api)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                // const {temp} = data.main;
                // const {description} = data.weather[0];

                // setting dom element from the api

                // tempDegree.textContent = temp;
                // tempdesc.textContent = description;
            });
        });
    }else{
        h1.textContent = 'Please press yes to pop of location or something went worng';
    }
});
*/

// function setIcon(icon, iconid){
//     const skycons = Skycons({'color': 'white'});
//     const currentIcon = icon.toUpperCase();
//     skycons.play();
//     return skycons.set(iconid, Skycons['currentIcon'])
// }

});

// let textfield = extractFun();
// console.log(textfield);

function extractFun(){
    var textValue = document.getElementById('textSubmit').value;
    return textValue;
}