
 document.body.onload = loadImg();
          n =  new Date();
          y = n.getFullYear();
          m = n.getMonth() + 1;
          d = n.getDate();
          document.getElementById("date").innerHTML =  m + "/" + d + "/" + y;
 // function to update the image background!
    function loadImg(){
      var pic = document.getElementById("firstImg");
      var date = new Date();
      var hour = date.getHours();
      //var hour = 15;
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

$(document).ready(function(){
          $("#form").hide();
          $("#add").click(function(){
              $("#groupList").show("slow");
              $("#form").show("slow");
          });
})
  displayList(taksList);

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

  $(document).on('click', '.editTask', function(){
            $('.editNewTask').show();
            let newId = (this.id).replace('edit_','');
  })

  $(document).on('click', ".trash", function(){
            let idToDelete = this.id;
            taksList = taksList.filter(function(obj){
            return obj.id !== idToDelete;
      
           })
            displayList(taksList);
  });
  
  $("#cancelSubmit").click(function(problem){
            problem.preventDefault();
            $("#form").slideUp(1000);
            $("#addNewItem").val('');// clear input field after cancel.

  });
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
              <button><i class="far fa-trash-alt trash" id="${taksList[i].id}"></i>
              </button>
            </div>
            <div class = "editTask">
              <button id ="edit"><i class="fas fa-edit edit" /></button>
              <div class = "editNewTask" style="display: none;">
                <input class = "editInpuValue" type = "text"><button id="checKChange"><i class="fas fa-check newItem " id="edit_${taksList[i].id}"/></button>
              </div>
            </div>
          </li>
            `;
      $('#groupList').append(newData);
    }
}
   

 

