import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

//used midleware ro call html and js from from build.
app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.send('i am here');
})


app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'first joke',
            content: 'first joke content' 
        },
        {
            id: 2,
            title: 'second joke',
            content: 'second joke content' 
        },
        {
            id: 3,
            title: 'third joke',
            content: 'third joke content' 
        },
        {
            id: 4,
            title: 'forth joke',
            content: 'forth joke content' 
        },
        {
            id: 5,
            title: 'fifth joke',
            content: 'fifth joke content' 
        },
        {
            id: 6,
            title: 'sixth joke',
            content: 'sixth joke content' 
        },
        
    ]

    res.send(jokes);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})