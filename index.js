const express = require('express');
const app = express();
const port = 8080;



app.use((req, res, next) => {
    console.log('Hello from middleware 1');
    req.userName = 'manishDev';
    // return res.json({
    //     message :'Here, Ending the request and response cycle.'
    // })
    next();
});


app.use((req, res, next) => {
    console.log('Hello from middleware 2', req.userName);
    // return res.json({
    //     message :'Here, Ending the request and response cycle.'
    // })
    // return res.end('Hey');
    next();
});




app.get('/', (req, res) => {
    return res.json({
        message :'We are getting the response from the above middleware.'
    })
})




app.listen(port, function(err){
    if(err){
        console.log('error', err);
        return;
    }
    console.log(`Server is listening on ${port}`);
})