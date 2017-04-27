function myFunction(){
$.ajax({
  url: 'http://acadprojects.com/py/explora/subject',
  type: 'GET',
  success: function(result){
    console.log(result);
    for(i in result.data){
       $("#sel1").append($('<option value="'+result.data[i].id+'">'+result.data[i].name+'</option>'));
      }
    }
  });
  
  $.ajax({
    url: 'http://acadprojects.com/py/explora/question?page=0&type=recent',
    type: 'GET',
    success: function(result){
      console.log(result);
      for(i in result.data){
        $("#recent").append($(' <div class="container-fluid"> <div class="row"style="border-radius:30px;background:white;padding:20px;"> <center> <div class="col-md-2"><img src='+result.data[i].image_url+' style="height:100px;width:100px;border-radius:80px;" ><br/><center><h3>'+result.data[i].posted_by_name+'</h3><h4>09 Dec,2017</h4></div></center><div class="col-md-10 "><h2 style="margin-top:4px;margin-bottom:5px;">'+result.data[i].question+'</h2><p style="font-size:20px;margin-top:22px;margin-bottom:5px;">'+result.data[i].posted_by_email+'</p><h3 style="margin:0px;">Tags:</h3><p style="font-size:22px;margin-bottom:10px;">'+result.data[i].tags+'</p><a href="answer_s.html"><button class="btn btn-default hvr-glow"style="border-color: #337ab7;border-width:2px;font-size:18px;">View Answers</button></a></div></div></div><hr/>'));
      }
      }
    });
  
  
      $.ajax({
      url: 'http://acadprojects.com/py/explora/question?page=0&type=trending',
      type: 'GET',
      success: function(result){
        console.log(result);
        for(i in result.data){
           $("#trending").append($(' <div class="container-fluid"> <div class="row"style="border-radius:30px;background:white;padding:20px;"> <center> <div class="col-md-2"><img src='+result.data[i].image_url+' style="height:100px;width:100px;border-radius:80px;" ><br/><center><h3>'+result.data[i].posted_by_name+'</h3><h4>09 Dec,2017</h4></div></center><div class="col-md-10 "><h2 style="margin-top:4px;margin-bottom:5px;">'+result.data[i].question+'</h2><p style="font-size:20px;margin-top:22px;margin-bottom:5px;">'+result.data[i].posted_by_email+'</p><h3 style="margin:0px;">Tags:</h3><p style="font-size:22px;margin-bottom:10px;">'+result.data[i].tags+'</p><a href="answer_s.html"><button class="btn btn-default hvr-glow"style="border-color: #337ab7;border-width:2px;font-size:18px;">View Answers</button></a></div></div></div><hr/>'));
		}
        }
      });
  
  
      $.ajax({
        url: 'http://acadprojects.com/py/explora/question?page=0&type=popular',
      type: 'GET',
      success: function(result){
        console.log(result);
        for(i in result.data){
           $("#popular").append($(' <div class="container-fluid"> <div class="row"style="border-radius:30px;background:white;padding:20px;"> <center> <div class="col-md-2"><img src='+result.data[i].image_url+' style="height:100px;width:100px;border-radius:80px;" ><br/><center><h3>'+result.data[i].posted_by_name+'</h3><h4>09 Dec,2017</h4></div></center><div class="col-md-10 "><h2 style="margin-top:4px;margin-bottom:5px;">'+result.data[i].question+'</h2><p style="font-size:20px;margin-top:22px;margin-bottom:5px;">'+result.data[i].posted_by_email+'</p><h3 style="margin:0px;">Tags:</h3><p style="font-size:22px;margin-bottom:10px;">'+result.data[i].tags+'</p><a href="answer_s.html"><button class="btn btn-default hvr-glow"style="border-color: #337ab7;border-width:2px;font-size:18px;">View Answers</button></a></div></div></div><hr/>'));
		}
        }
      });
  
};




function Answerpagefunction(){
 $.ajax({
    url: 'http://acadprojects.com/py/explora/question?page=0&type=recent',
    type: 'GET',
    success: function(result){
      console.log(result);
        $("#recent").append($(' <div class="container-fluid"> <div class="row"style="border-radius:30px;background:white;padding:20px;"> <center> <div class="col-md-2"><img src='+result.data[0].image_url+' style="height:100px;width:100px;border-radius:80px;" ><br/><center><h3>'+result.data[0].posted_by_name+'</h3><h4>09 Dec,2017</h4></div></center><div class="col-md-10 "><h2 style="margin-top:4px;margin-bottom:5px;">'+result.data[0].question+'</h2><p style="font-size:20px;margin-top:22px;margin-bottom:5px;">'+result.data[0].posted_by_email+'</p><h3 style="margin:0px;">Tags:</h3><p style="font-size:22px;margin-bottom:10px;">'+result.data[0].tags+'</p><button class="btn btn-default hvr-glow"id="myBtn" style="border-color: #337ab7;border-width:2px;font-size:18px;"data-toggle="modal" data-target="#myModal">Post Answer</button></div></div></div>'));
      }
    });
 

 $.ajax({
      url: 'http://acadprojects.com/py/explora/answer?question_id=2&page=0',
      type: 'GET',
      success: function(result){
        console.log(result);
        for(i in result.data){
          $("#answerpage").append($('<div class="row"><div class="bubble"><div class="container-fluid"><p style="text-align:justify; font-size:20px; line-height: 35px; margin-top: 10px;">'+result.data[i].answer+'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web.</p><div class="row"> <div class="col-md-9" style="margin-top: 15px;"><button class="hvr-grow"style="background-color:white;border-color:black;border-width: 0.5px; border-radius: 10px;margin-left:20px;"> <i class="fa fa-thumbs-o-up " aria-hidden="true"style="font-size: 42px;"></i>'+result.data[i].like_count+'</button> </div><div class="col-md-3"> <h4>Posted by: '+result.data[i].answer_by_name+'</h4> <h4>E-Mail: '+result.data[i].answer_by_email+'@xyz.com</h4> </div></div></div></div></div>'));
        }

        }

      });


};



function postfunction(){
console.log('post function called');
  var $Nametext = $('#Nametext');
  var $Emailtext = $('#Emailtext');
  var $sel1 = $('#sel1');
  var $sel2 = $('#sel2');
  var $tagstext = $('#tagstext');
  var $messagetext = $('#messagetext');
console.log($Nametext.val(),$tagstext.val());
 var FormData = {
	  posted_by_name : $Nametext.val(),
	  posted_by_email: $Emailtext.val(),
	  semester : $sel2.val(),
	  tags: [$tagstext.val()],
	  question : $messagetext.val(),
	  subject_id : $sel1.val(),
	};
console.log('form data');
console.log(JSON.stringify(FormData));
$.ajax({
  url: 'http://acadprojects.com/py/explora/question',
  type: 'POST',
  data: JSON.stringify(FormData),
  contentType: 'application/json; charset=utf-8',
  dataType: 'json',
  async: false,
  success: function(msg) {
      alert('Your Question has posted successfully!');
      location.reload();
  },
  error: function(msg){
    alert('Please Fill all the fields');
  }
});

return false;

};



function postanswer(){
console.log('post function called');
  var $Name = $('#Name');
  var $Email = $('#Email');
  var $answertext = $('#messagetext');
console.log($Name.val());
 var FormData = {
	  answer_by_name : $Name.val(),
	  answer_by_email: $Email.val(),
	  answer : $answertext.val(),
	};
console.log('form data');
console.log(JSON.stringify(FormData));
$.ajax({
  url: 'http://acadprojects.com/py/explora/answer',
  type: 'POST',
  data: JSON.stringify(FormData),
  contentType: 'application/json; charset=utf-8',
  dataType: 'json',
  async: false,
  success: function(msg) {
      alert('Your Answer has posted successfully!');
      location.reload();
  },
  error: function(msg){
    alert('Please Fill all the fields');
  }
});

return false;

};
