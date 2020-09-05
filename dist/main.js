const fetchData = function () {
        let input = $("#input").val()
        console.log(input)

        $.get(`/teams/${input}`, function(team) {
                console.log(team)
                const source = $('#first-template').html()
                const template = Handlebars.compile(source)
                
                let index = Handlebars.registerHelper("inc", function(value=0, options)
                {
                    let index = parseInt(value) + 1
                    return ("i"+index).toString()
                })

                let newHTML = template({team: team})
                $('#players').append(newHTML)
        })
} 
    

// class DataManager {
//     constructor(){ 
//         this.renderData()
//     }

//     fetchData = function(){
//         this.input = $("#input").val()
//         console.log(this.input)

//         $.get(`/teams/${this.input}`, function(team){
//             this.team = team
//             console.log(this.team)
        
//             this.rendererData(this.team)
//         })
//     }

//     renderData(team){
//         const source = $('#first-template').html()
//         const template = Handlebars.compile(source)
//         const newHTML = template({team: team})
//         $("#players").empty()
//         $('#players').append(this.newHTML)
//     }
// }

//let manager = new DataManager()