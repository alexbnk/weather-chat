var compileTemplate = function(postId,pcity,weather_and_time,comments,time) {

   //console.log(postId,pcity,weather_and_time);
    source = $('#post').html();
    template = Handlebars.compile(source);
    newHTML = template(
      {
        pid: postId,
        city:pcity,
        weather_at_time : weather_and_time,
        ptime:time,

       comments : comments
      });

  return newHTML;
}
