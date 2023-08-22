const express = require("express");
const { urlencoded, json } = require("express");
const https = require('https');
const cors = require('cors');
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.get("/", (req,res) => {
	res.send("Hello");
});

app.post('/api', (req, res) => {
	try {
		const query = req.body.userData;
		const apiKey = "1533a067069e9baf8f0955e004133efb";
		const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;
		console.log(url);
		get(url, (response) => {
		let data = '';
		response.on('data', (chunk) => {
			data += chunk;
		});

		response.on('end', () => {
			const convertedData = JSON.parse(data)
			res.json(convertedData);
		});
	});
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: "Internal server error" });
	}
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`))
