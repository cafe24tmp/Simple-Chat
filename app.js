var app = require("express").createServer(),
    io = require("socket.io").listen(app);

var port = 80;

app.listen(port);

app.get("/", function(req, res){
    res.sendfile(__dirname + "/index.html");
});

io.sockets.on("connection", function(socket){
    socket.on("chat", function(data){
        console.log("receivedata = " + data);
        socket.broadcast.emit("chat", data);
    });
});
