const express = require('express');
const app = express();

const data = [
    { "id": 1, "first_name": "Jody", "last_name": "Mirams", "email": "jmirams0@arstechnica.com", "gender": "Male", "size": "3XL" },
    { "id": 2, "first_name": "Darby", "last_name": "Wivell", "email": "dwivell1@wunderground.com", "gender": "Male", "size": "M" },
    { "id": 3, "first_name": "Deerdre", "last_name": "Litchfield", "email": "dlitchfield2@aboutads.info", "gender": "Female", "size": "S" },
    { "id": 4, "first_name": "Nicolette", "last_name": "Kinforth", "email": "nkinforth3@t-online.de", "gender": "Female", "size": "L" },
    { "id": 5, "first_name": "Oren", "last_name": "Jaquiss", "email": "ojaquiss4@tinypic.com", "gender": "Male", "size": "2XL" },
    { "id": 6, "first_name": "Jessey", "last_name": "Burrell", "email": "jburrell5@51.la", "gender": "Male", "size": "M" },
    { "id": 7, "first_name": "Margarethe", "last_name": "Pentelow", "email": "mpentelow6@cbsnews.com", "gender": "Female", "size": "M" },
    { "id": 8, "first_name": "Claiborne", "last_name": "Dunston", "email": "cdunston7@microsoft.com", "gender": "Male", "size": "L" },
    { "id": 9, "first_name": "Gerri", "last_name": "Geddis", "email": "ggeddis8@springer.com", "gender": "Male", "size": "XS" },
    { "id": 10, "first_name": "Danny", "last_name": "Wheatman", "email": "dwheatman9@altervista.org", "gender": "Male", "size": "XS" }
]
// we creating this API for get all first names
//step I = 
app.get('/data', (req, res) => {
    var names = []
    var length = data.length

    for (i = 0; i < length; i++) {
        names.push(data[i].first_name)
    }
    res.send(names)
})

app.get('/dataById', (req, res)=>{
    var id=req.query.id || "id not found"
    res.send(id)


    
})
















app.get('/', (req, res) => {
    res.send("Hello Tikya!!!");
});

app.listen(3000)