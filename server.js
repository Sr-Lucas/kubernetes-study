const express = require('express');

const app = express();

app.get('/healthz', healthz);

app.get('/', (req, res) => {
	res.send('Hello World');
});

function healthz(req, res) {
	res.json({
		status: 'ok',
		envs: {
			APP_NAME: process.env.APP_NAME,
			APP_VERSION: process.env.APP_VERSION
		},
		uptime: new Date()
	});
}

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});