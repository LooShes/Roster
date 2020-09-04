const express = require('express')
const path = require('path')
const urllib = require('urllib')
const bodyParser = require('body-parser')
const { response } = require('express')
const http = require('http')
if (process.pid) {
    console.log('This process is your pid ' + process.pid);
}

const app = express()

// app.get('', function(req, res) {
//     urllib.request('', function(err, data) {
//         console.log('b');
//         res.send(data)
//     })
//     console.log('a');
// })
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get('/teams/:teamName', function (request, response) {
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data) {

        let teamName = request.params.teamName
        teamID = teamToIDs[teamName]

        let result = JSON.parse(data.toString())
        result = result.league.standard
 
        result = result.filter(item => /*item.teamId === teamID && */item.isActive)
        result = result.map(item => {
            return { 
                firstName: item.firstName,
                lastName: item.lastName,
                img: `https:nba-players.herokuapp.com/players/${item.lastName}/${item.firstName}`
                    }
                       })
        

        console.log(result)
        response.send(result)
    })
})



