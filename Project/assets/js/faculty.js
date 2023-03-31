
$(document).ready(function(){
    $.getJSON("js/faculty.json",function(data){
       update(data);

    })
    function update(e){
    $.each(e,function(key,value){
        if($(".media-heading").text()===value.name)
        {
            $(".research").on('click',function(){
            
                $(".rs").text(value.research);
            });

            $(".publications").on('click',function(){
             
                $(".pb").html("<li>"+value.publications[0]+"</li><br><li>"+value.publications[1]+"</li>");
            });

            $(".awards").on('click',function(){
             
                $(".aw").text(value.awards_and_honours);
            });
            
        }
    })
    }
})