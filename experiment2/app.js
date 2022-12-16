let i = 0;

let someInterval = setInterval(function(){
    i++;
    console.log(i);
    console.log(new Date());
    console.log("----------");
    fetch('http://worldtimeapi.org/api/timezone/Europe/Skopje').then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    }).catch(function(err){
        console.long("Something went wrong.", err);
    });
    console.log("----------");
}, 10 *1000);

function stopInterval() {
    clearInterval(someInterval);
}







