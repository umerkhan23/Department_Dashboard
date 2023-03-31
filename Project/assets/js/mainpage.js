$(document).ready(()=>{
    var cor=[];
 
$(".btn").on('click',()=>{
  var un= $("#username").val();
  var pw=$("#pasword").val();
  var flag=0;

  $.getJSON("js/student.json", (data)=>{
      $.each(data, (key,value)=>{

          if(un===value.id && pw===value.pswd){
              flag=1;
              window.location = "/index";
              //Storing JSON in local Storage
              window.localStorage.setItem('obj', JSON.stringify(value) );
          }

      })
      if(flag==0){
        alert('Incorrect username or password');
                location.reload();
    }
  })
})
  

var d=JSON.parse(window.localStorage.getItem('obj'));
console.log(d);

$("#stname").text(d.name);
$('#sem').text(d.semester);
$("#yr").text(d.year);
$("#gpa").text(d.cgpa);
$("#std").text(d.academic_standings);

   
for(i=0;i<d.courses.length;i++){
cor[i]=d.courses[i].name;
$('.cr'+i+' >h4').text(d.courses[i].name);
$('.td1'+i).text(d.courses[i].instructor);
$('.td2'+i).text(d.courses[i].cr+".00");
$('.bar'+i).text(d.courses[i].progress);
$('.bar'+i).css('width',d.courses[i].progress )

}



  var ctxB = document.getElementById("bar-chart");
  var myBarChart = new Chart(ctxB, {
      type: 'bar',
      data: {
          labels: cor,
          datasets: [{
              data: d.attendance,
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
              
          }]
      },
      options: {
          legend: { display: false },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }],
              xAxes: [
                  {
                        barThickness: 30 
                    }
                  ]
          }
      }
  });

})