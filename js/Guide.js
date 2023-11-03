function saveGuide(){
    let name=$('#username').val();
    let address=$('#address').val();
    let dob=$('#date').val();
    let gender=$('#gen').val();
    let contact=$('#con').val();
    let GImage=$('#gimage').val();
    let NicImage=$('#nimage').val();
    let IdImage=$('#idimage').val();
    let exp=$('#expe').val();
    let value=$('#day').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8081/guide/save",
        async:true,
        data:JSON.stringify({
            "guideId":"",
            "guideName":name,
            "guideAddress":address,
            "guideAge":dob,
            "gender":gender,
            "guideContact":contact,
            "guideImageLocation":GImage,
            "guideNICImageLocation":NicImage,
            "guideIDImageLocationv":IdImage,
            "guideExperience":exp,
            "manDayValue":value
        }),
        success: function (data) {
            alert("saved")
            getAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}