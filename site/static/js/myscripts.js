
// ++++++++++++++++++++++++++++++++++++++++++

function myFunction(myDiv) {
  var x = document.getElementById(myDiv);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block') {
    e.style.display = 'none'
  } else {
    document.querySelectorAll('.item').forEach(function(div) {
       div.style.display = 'none';
    })
    e.style.display = 'block';
  }
}



$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

