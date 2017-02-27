
var getWeather = function (city) {
  this.city = city;
  var baseUrl = "http://api.openweathermap.org/data/2.5/weather"
   query =  baseUrl+"?q="+city+"&units=metric&appid="+apiKey;

  $.ajax({
    method: "GET",
    url: query,
    dataType: "json",
    success: function(data) {
      console.log('success')
      result = (data);
      weatherChat.addPost("Alex",result.name,result.main.temp);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log('error');
    }
  });
return result;
}
