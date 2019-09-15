 
 document.body.onload = loadImg();
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("date").innerHTML =  m + "/" + d + "/" + y;
 
 function loadImg(){
  var pic = document.getElementById("firstImg");
  var date = new Date();
  var hour = date.getHours();
  //var hour = 20;
  if(hour >= 0 && hour < 12){
    pic.src = "images/landscape-1844229_1280.png";
    $(".card").css("background-color", "rgb(89, 128, 48)");
  }else if( hour >= 12 && hour < 18){
    pic.src = "images/landscape-1844226_1280.png";
    $(".card").css("background-color", "rgb(11, 48, 80)");
  }else{
    pic.src = "images/landscape-1844231_1280.png";
    $(".card").css("background-color", "rgb(15, 21, 32)");
  }
}


let list =[];

$(document).ready(function(){
  $("#form").hide();
  $("#add").click(function(){
      $("#groupList").show("slow");
      $("#form").show("slow");
      
  });

  function displayList(array){
    $('#groupList').text('');
    for(let i in array){
      const insertNewData = `<li class = list-group-item>
        <button><i class="far fa-trash-alt trash" id="${list[i].id}"></i>
        </button> ${list[i].name} 
        </li>
        <hr>`;
      $('#groupList').append(insertNewData);
    }
  }

  displayList(list);
  
  $("#submit").click(function(event){
    event.preventDefault();
      var input = document.getElementById("addNewItem").value;
      list.push({
        id :'task_' + Date.now(),
        name : input,
        // isDone : false
      });
      displayList(list);
      $("#addNewItem").val(''); // clear input field after submit.
  
  })


  $(document).on('click', ".trash", function(){
    let idToDelete = this.id;
    list = list.filter(function(obj){
      return obj.id !== idToDelete;
      
    })
    displayList(list);
  });

  $("#cancelSubmit").click(function(problem){
    problem.preventDefault();
    $("#form").slideUp(1000);
    $("#addNewItem").val('');// clear input field after cancel.

  });
   
})
 

