<script id="post" type="text/x-handlebars-template">
  <div class=" post" data-id={{ pid }}>
    <h3>{{ city }}</h3>
    <h4>{{ weather_at_time }}</h4>
    <div class="comments" data-id=data-id={{ pid }}>
    </div>
    <div class="postComment">
      <input type="text" class="form-control comment_input" placeholder="Comment about the weather in {{ city }} ">
      <span class="input-group-btn">
        <button class="btn btn-success btn_comment" type="button">Get Temp</button>
      </span>
    </div>
  <div >
</script>
