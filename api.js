callback = function(){

    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, res) {

    const parseRes = JSON.parse(res.toString())
    data = parseRes.league.standard
    console.log(data[0])
})
}



