function button(){
    let name=$('#paymentAmount').val();
    let address=$('#paymentDate').val();
    let dob=$('#userID').val();
    let gender=$('#packageDetailsID').val();


    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8082/save",
        async:true,
        data:JSON.stringify({

            "paymentAmount":name,
            "paymentDate":address,
            "userID":dob,
            "packageDetailsID":gender,

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