const express = require('express');
const whiskey = require('./whiskey');

//console.log(whiskey.whiskeys[0]);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HOME
app.get('/', (req, res) => {
    res.json('Welcome to the Whisk(e)y API');
});

//Get Routes

//GET - by category
app.get('/category/:category/:sub?', (req, res) => {
    const { category, sub } = req.params;
    let result;

    if (category === 'all') {
        return res.json(whiskey.whiskeys);
    } else if (sub) {
        result = whiskey.whiskeys.filter(w => {

            if (w.category.general.toLowerCase() === category.toLowerCase()
                && w.category.sub.toLowerCase() === sub.toLowerCase()) {
                console.log(w);
                return w;
            }
        })
    } else {
        result = whiskey.whiskeys.filter(w => {

            if (w.category.general.toLowerCase() === category.toLowerCase()) {
                console.log(w);
                return w;
            }
        })
    }

    res.json(result);
});

//GET - by name
app.get('/:name', (req, res) => {
    const { name } = req.params;

    const result = whiskey.whiskeys.filter(w => {
        if (w.name.toLowerCase() === name.toLowerCase()) {
            console.log(w);
            return w;
        }
    })

    res.json(result);
});

//Post routes
//Add a whiskey
app.post('/add', (req, res) => {
    const { name,
        general,
        sub,
        region,
        distillery,
        age,
        abv,
        proof,
        caskstrength } = req.body;

        const newWhiskey = {
            id: 13,
            name: name,
            category:{
                general: general,
                sub: sub
            },
            region: region,
            distillery: distillery,
            age: age,
            abv: abv,
            proof: proof,
            caskstrength: caskstrength
        }

        whiskey.whiskeys.push(newWhiskey);
        res.json(newWhiskey);
});

//Put Routes
app.put('/update/:name', (req, res) => {
    const { name,
        general,
        sub,
        region,
        distillery,
        age,
        abv,
        proof,
        caskstrength } = req.body;

        const searchName = req.params.name;
        console.log('name ', name);

        let whiskeyToUpdate = whiskey.whiskeys.filter(w=>{
            return (w.name.toLowerCase() === searchName.toLowerCase());
        })        

        if(name){whiskeyToUpdate[0].name = name}
        if(general){whiskeyToUpdate[0].category.general = general}
        if(sub){whiskeyToUpdate[0].category.sub = sub}
        if(region){whiskeyToUpdate[0].region = region}
        if(distillery){whiskeyToUpdate[0].distillery = distillery}
        if(age){whiskeyToUpdate.age = age}
        if(abv){whiskeyToUpdate[0].abv = abv}
        if(proof){whiskeyToUpdate[0].proof = proof}
        if(caskstrength){whiskeyToUpdate[0].caskstrength = caskstrength}

        console.log(whiskeyToUpdate);

        res.json('updating');
});

app.listen(3000, () => {
    console.log('listening on 3000');
});