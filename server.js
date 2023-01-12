const express = required('express');

const app = express();

app.use(express.static('./dist/weather-app'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/weather-app'})
})

app.listen(process.env.PORT || 80)