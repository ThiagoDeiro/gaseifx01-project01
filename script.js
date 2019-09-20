
 document.body.onload = loadImg();
  n =  new Date();
  var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  var weekday = weekday[n.getDay()];
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("date").innerHTML =  weekday + " " +  d + "/" + m + "/" + y;
 
  // function to update the image background!
  
  function loadImg(){
    var pic = document.getElementById("firstImg");
    var date = new Date();
    var hour = date.getHours();
    var hour = 8;
      if(hour >= 0 && hour < 18){ 
        pic.src = "images/landscape-1844226_1280.png";
        $(".card").css("background-color", "rgb(11, 48, 80)");
      }else{
        pic.src = "images/landscape-1844231_1280.png";
        $(".card").css("background-color", "rgb(31, 0, 38)");
  } 
}

let taksList =[];
let counter = 0;

// body animations 

$(document).ready(function(){
  $("#form").hide();
  $("#add").click(function(){
    document.getElementById("add").style.visibility = "hidden";
    $("#groupList").show("slow");
    $("#form").show("slow");
  });
})

displayList(taksList);  

//add new task

$("#submit").click(function(event){
  event.preventDefault();
  var taskName = document.getElementById("addNewItem").value;
  if(taskName && counter <= 20){
    taksList.push({
      id :'task_' + Date.now(),
      name : taskName,
      isDone : false
    });
      counter ++;
      
  } else{
    alert("Input must be filled out");
  }

  $(document).on('change', '.checkList', function(event) {
    event.preventDefault();
    taksList[$(this).parent().parent().index()].isDone = true;
    $(this).prop('checked'); 
    })
    displayList(taksList);
    $("#addNewItem").val(''); // clear add input field after submit.
})

//edit button animation

$(document).on('click', '.editTask', function(){
  $('.editNewTask').show();
})

//deleting task

$(document).on('click', ".trash", function(){
  let idToDelete = this.id;
  taksList = taksList.filter(function(obj){
  return obj.id !== idToDelete;
  })
  displayList(taksList);           
});
  
//cancel input

$("#cancelSubmit").click(function(problem){
  problem.preventDefault();
  $("#form").slideUp(1000);
  $("#addNewItem").val('');// clear input field after cancel.
  document.getElementById("add").style.visibility = "visible";
});

//display tasklist

function displayList(array){
  $('#groupList').text('');
  for(let i in array) {
    const checked = taksList[i].isDone ? 'checked' : '';
    const newData = `
    <li class='list-group-item'>
      <div>
          <input ${checked} type="checkbox" class = "checkList" />${taksList[i].name} 
      </div>
      <div class = "trashposition">
        <button class="trash"><i class="far fa-trash-alt trash" id="${taksList[i].id}"></i>
        </button>
      </div>
      <div class = "editTask">
        <button id ="edit" class="edit"><i class="fas fa-edit" /></button>
        <div class = "editNewTask" style="display: none;">
          <input class = "editInpuValue" type = "text"><button id="checKChange"><i class="fas fa-check newItem " id="edit_${taksList[i].id}"/></button>
        </div>
      </div>
    </li>
        `;
  $('#groupList').append(newData);
}
   
}


 

