
var getWeather = function (city) {
  this.city = city;
  var baseUrl = "http://api.openweathermap.org/data/2.5/weather"
  var query =  baseUrl+"?q="+city+"&appid="+apiKey;

  $.ajax({
    method: "GET",
    url: query,
    dataType: "json",
    success: function(data) {
      console.log('success')
      result = (data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log('error');
    }
  });
}
