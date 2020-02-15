const axios = require('axios');
axios.get('https://fanuc-robot-http-server.herokuapp.com/') .then((res) => { console.log(res); });

//Lue löydetyt nivelarvo tekstit numeroina
const regexp = 'joint (0-9)';
let joints = [];
let matches = res.data.matchAll(regexp);
let count = 0; for (const match of matches) { count++;
    if (count > 6)
    break;
const value = parseFloat(match[1]);
joints.push(value); }


//Luo ohjelmaan luuppi, joka pyörii ikuisesti
const main_loop = () => { 
    setTimeout(() => { 
    main_loop();
 }, 10); 
}
main_loop();

//Tulosta jokaisella kierroksella aikaleima, nivelarvot lista ja pyyntöön kulunut aika

//Alla vinkkejä aikaleiman luomiseen ja viiveen laskemiseen
const time_stamp = new Date();
const delta = time_stamp - start_time_stamp;

//Lopputuloksen pitäisi näyttää alla olevan mukaiselta