$(document).ready(function(){

  function updateCounts() {
    let total = $("#taskList li").length;
    let completed = $("#taskList li.completed").length;

    $("#totalCount").text(total);
    $("#completedCount").text(completed);
  }

  // Add Task
  $("#addBtn").click(function(){

    let taskText = $("#taskInput").val().trim();

    if(taskText === "") return;

    $("#taskList").append(
      "<li>" +
        "<span class='taskText'>" + taskText + "</span>" +
        "<button class='deleteBtn'>Delete</button>" +
      "</li>"
    );

    $("#taskInput").val("");
    updateCounts();
  });

  // Mark Complete (Event Delegation)
  $("#taskList").on("click", ".taskText", function(){
    $(this).parent().toggleClass("completed");
    updateCounts();
  });

  // Delete Task (Event Delegation)
  $("#taskList").on("click", ".deleteBtn", function(){
    $(this).parent().remove();
    updateCounts();
  });

});