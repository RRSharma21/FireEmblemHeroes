
$(document).on('click', '#linkVideo', function(e)
{
  $('#feLoadVid').show();
  $('#linkVideo').hide();
  $('#feVid').attr("src","http://www.youtube.com/embed/"+$(this).data('vid')+"?autoplay=1");
});
