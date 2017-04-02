/*
Specified in Stephen Grider video Lecture 109
https://www.udemy.com/react-redux/learn/v4/t/lecture/5691864?start=0
*/
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port);
console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)