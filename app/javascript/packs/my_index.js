var iniciadoSesion=false;

window.aparecer= function(){
  document.getElementById('timeline').style.display="none";
}

window.iniciarSesion=function() {
  iniciadoSesion=true;
  if(iniciadoSesion){
    document.getElementById('login').style.display="none";
    document.getElementById('logout').style.display="block";
  }
  window.location.href="http://www.google.com";
}
window.cerrarSesion=function() {
  if(iniciadoSesion){
    document.getElementById('logout').style.display="none";
    document.getElementById('login').style.display="block";
    iniciadoSesion=false;
  }
}
