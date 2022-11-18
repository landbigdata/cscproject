/*! mli */
function ck () {
	pwd=document.getElementById('pwd').value;
	con=document.getElementById('con');
	login=document.getElementById('login');
		if(pwd=='cscproject'){
			con.style.display='block';
			login.style.display='none';
		}
		else{
			alert("Password not correct!");
		}
}



function check(){
   var name=document.getElementById("name").value;
   var pass=document.getElementById("pass").value;
   if(name=="cscproject" && pass=="cscproject"){
   	window.document.f.action="../video.html";
   	window.document.f.submit();
   }
   else{
   	alert("Username or Password not correct"); }
}
