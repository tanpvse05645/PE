function check(){
    var name=document.getElementsByTagName('input')[0].value;
    var email=document.getElementsByTagName('input')[1].value;
    var content=document.getElementsByTagName('textarea')[0].value;
    var uni = document.getElementById('uni').value;
    var mess = "dung de rong\n"
    if(name == ""){
        mess+=" ten";
    }
    if(email==""){
        mess+=" email";
    }
    if(content==""){
        mess+=" noi dung";
    }
    if(name == ""||email==""||content==""){
        alert(mess);
        return;
    }
    var myWindow = window.open("", "", "width=300,height=300");
    myWindow.document.write("<p>Đây là tên của bạn: " + name + "</p>");
    myWindow.document.write("<p>Đây là email của bạn: " + email + "</p>");
    myWindow.document.write("<p>Đây là nội dung của bạn: " + content + "</p>");
    myWindow.document.write("<p>Đây là đơn vị đào tạo của bạn: " + uni + "</p>");



}