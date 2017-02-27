
// posts array here
//var posts =[];
var result= "No City";
var showMe = function () {
$('#chat').empty();
for (var i=0; i<weatherChat.posts.length; i++) {
  var thisPost = weatherChat.posts[i];
$('#chat').append(compileTemplate(thisPost.pid,thisPost.pcity,thisPost.ptemp,thisPost.pcomments, thisPost.ptime))


}
// COMMENT ON POST EVENT

$('.post').find('.post-comment').on('click', function() {
postToAddCommentTo = $(this).closest('.post').data('id');
commentToAddToThisPost = $(this).closest('.post').find('.add-comment-input').val();
console.log(postToAddCommentTo,commentToAddToThisPost);
weatherChat.addComment(postToAddCommentTo,commentToAddToThisPost);
});


// DELETE POST BUTTON EVENT

$('.post').find('.glyphicon-trash').on('click', function() {
postToDelete = $(this).closest('.post').data('id');
  console.log("Delete post#"+postToDelete);
  weatherChat.deletePost(postToDelete);
});





}



var weatherChat = {
 posts : [{pid:0,puser: "Alex", pcity:"Raanana", ptemp:22,ptime:"00:00:00",pcomments: ["just a comment","comment 3"]}],
 getPosts : function () {
   return this.posts;
 },
 addPost  : function(user,city,temp) {
   newPid = this.posts.length ;
   var newPost = {pid : newPid,puser:user , pcity: city, ptemp:temp, ptime: Date(), pcomments:[]};
   this.posts.push(newPost);
   showMe();
 },
 addComment : function(commentToPost, commentText) {
   console.log(commentToPost);
   this.posts[commentToPost].pcomments.push(commentText);
   showMe();

 },

 deletePost : function(postToDelete) {
   this.posts.splice(postToDelete,1);
   showMe();
 }
 };
//




// Page events
<!-- Page Events  -->

$('.search').on('click', function(){
  userInput = $('#search').val();
  if ($('#search').val().length >3) {
  getWeather(userInput);
  showMe();
  }
});
showMe();
