module.exports = function(app, db, user) {
    /*app.post('/notes', (req, res) => {
        console.log(req.body);
        res.send('Hello!');
    })*/
    const collection = db.collection("users");
    collection.insertMany(user, function (err, result) {
        if(err){
            return console.log(err);
        }
        console.log(result.ops);
    })
};
