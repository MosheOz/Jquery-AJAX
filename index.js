"use strict";

(function(){
    
    $(function(){

        // Get the data from the API and Display it inside the Div
        $("#getCountries").click(function(){
            $.ajax({

                method: "GET" ,
                url : "https://restcountries.eu/rest/v2/all" ,  

                success : function(response){

                   $(".div").empty();

                    for (var i = 0; i < response.length; i++){
                        var flag = "<img src='" + response[i].flag + "'>";
                        var name = "<p> <b>Name: </b>" + response[i].name + "</p>";
                        var top= "<p> <b>Top Level Domain:</b> " + response[i].topLevelDomain + "</p>";
                        var capital = "<p> <b>Capital: </b>" + response[i].capital + "</p>";
                        var currencies = "<p> --- Currencies: ---" + "<br> <b>code:</b> " +response[i].currencies[0].code 
                                                            + " <br> <b>name:</b> " + response[i].currencies[0].name + 
                                                            " <br> <b>symbol:</b> "+ response[i].currencies[0].symbol + "</p>";
                        var countries = "<div class='myDiv col'>"+ flag+"<div class='dataDiv'>" + name+ "<br>" + top+ "<br>" + capital+ "<br>" + currencies + "</div>" + "<br>" + "</div>";
                        
                        if(response[i].currencies[0].symbol === null){
                            response[i].currencies[0].symbol === "unavailable";
                        }
                        
                        $(".div").append(countries) + "<div class='col'><br></div>";
                    }
                },
                error: function(err) {
                    alert("Error: " + err.status);
                }
                })
            })


        // Get the specific data from the input and Display it with the AJAX request
        $("#getCountriesByNameButton").click(function(){

            // Get the specific data from the input
            var getCountriesByName = document.getElementById("getCountriesByName").value;
            
            $.ajax({
                method: "GET" ,
                url : "https://restcountries.eu/rest/v2/name/" + getCountriesByName , 

                success : function(response){
                   
                    $(".div").empty();

                    for (var i = 0; i < response.length; i++){
                        var flag = "<img src='" + response[i].flag + "'>";
                        var name = "<p> <b>Name: </b>" + response[i].name + "</p>";
                        var top= "<p> <b>Top Level Domain:</b> " + response[i].topLevelDomain + "</p>";
                        var capital = "<p> <b>Capital: </b>" + response[i].capital + "</p>";
                        var currencies = "<p> --- Currencies: ---" + "<br> <b>code:</b> " +response[i].currencies[0].code 
                                                            + " <br> <b>name:</b> " + response[i].currencies[0].name + 
                                                            " <br> <b>symbol:</b> "+ response[i].currencies[0].symbol + "</p>";
                        var countries = "<div class='myDiv col'>"+ flag+"<div class='dataDiv'>" + name+ "<br>" + top+ "<br>" + capital+ "<br>" + currencies + "</div>" + "<br>" + "</div>";
                        $(".div").append(countries) + "<br><br>";
                    }
                },
                error: function(err) {
                    alert("The country does not exist..");
                }
            })
        })

    })
})();

    




