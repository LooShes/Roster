const fetchData = function() {
    let input = $("#input").val()

    $.get(`/teams/${input}`, function(team) {
       
        const source = $('#first-template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({team: team})
        $('#players').append(newHTML)
    })
}

fetchData()