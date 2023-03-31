$(document).ready(function () {

    $.getJSON("js/dashboard.json", function (data) {
     
        $(".totalst").text(data.total_std);
         $(".newst").text(data.new_std);
         $(".graduatedst").text(data.graduated);
         $(".totalfac").text(data.total_faculty);
         $(".vision").text(data.vision);
         var announcements=data.Announcements;
         for(var i=0; i<announcements.length;i++){

            $(".p"+i).text(announcements[i]);
        }
      
        var xValues = ["MALE", "FEMALE"];
        var x=data.students_male_female[0];
        var y=data.students_male_female[1];
        var yValues = [x,y];
        var barColors = [
            "#3af",
            "#2ca"
        ];
    
        new Chart("myChart1", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                responsive: true,
    
            }
        });
        
        new Chart("myChart2", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: [data.faculty_male_female[0], data.faculty_male_female[1]]
                }]
            },
            options: {
                responsive: true,
    
            }
        });
    
    
    
        var x = ["BESE-25", "BESE-26", "BESE-27", "BESE-28"];
        var y = [data.Ug_std_by_course[0],data.Ug_std_by_course[1], data.Ug_std_by_course[2],data.Ug_std_by_course[3]];
        var barcolors = ["red", "green", "blue", "orange"];
    
        new Chart("bar-chart", {
            type: "horizontalBar",
            data: {
                labels: x,
                datasets: [{
                    backgroundColor: barcolors,
                    data: y
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                },
                scales: {
                    xAxes: [{ ticks: { min: 0, max: 70 } }]
                }
            }
        });
    
    })


    


})