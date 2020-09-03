const fetchData = function () {
    let input = $("#input").val()
    console.log(input)

    $.get(`/teams/${input}`, function (teamID) {
        $("#players").append(`<div>${teamID} - ${teamID}</div>`)
        console.log(teamID)
    })
}


// const fetchData = function () {
//     let input = $("#input").val()

//     $.get(`books/${input}`, function (bookData) {
//         $("body").append(`<div>${bookData.title} - ${bookData.author}</div>`)
//         console.log(bookData)
//     })
// }

