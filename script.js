 function loadImg(){
  var pic = document.getElementById("firstImg");
  var date = new Date();
  var hour = date.getHours();
  // var hour = 20;
  if(hour >= 0 && hour < 12){
    pic.src = "https://images.pexels.com/photos/2450294/pexels-photo-2450294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  }else if( hour >= 12 && hour < 18){
    pic.src = "https://images.pexels.com/photos/1813392/pexels-photo-1813392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  }else{
    pic.src = "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  }
}

let counter = 0;
let list =[];
$(document).ready(function(){
  $("#form").hide();
  $("#add").click(function(){
      $("#groupList").show("slow");
      $("#form").show("slow");
      
  });

  function displayList(array){
        $('#groupList').text('');
    for(i in array){
        $('#groupList').append(`<li class = list-group-item><button><i class="far fa-trash-alt trash" id="${i}"></i></button> ${list[i]} </li>`);
    }
  }

  displayList(list);
  
  $("#submit").click(function(event){
    event.preventDefault();
      var input = document.getElementById("addNewItem").value;
      list.push(input);
      displayList(list);
  
  })


  $(document).on('click', ".trash", function(){
    delete list[this.id];
    displayList(list);
  });

  $("#cancelSubmit").click(function(problem){
    problem.preventDefault();
    $("#form").slideUp(1000);
  });
   
})
 

