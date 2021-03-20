$(document).ready(function(){
    var url = 'https://randomuser.me/api/?results=20'

    $.getJSON(url, function(res){
        for(var i=0; i<=20; i++){
            $('#userData').append(`
                <tr>
                    <td>${res.results[i].name.first} ${res.results[i].name.last}</td>
                    <td>${res.results[i].dob.age}</td>
                    <td>${res.results[i].location.street.number} ${res.results[i].location.street.name}</td>
                    <td>${res.results[i].email}</td>
                </tr>
            `)
        }
    })
})
