 function contactar(){
 //     let nombre = document.getElementById('nombre').value
 //     let correo = document.getElementById('correo').value
 //     let mensaje = document.getElementById('mensaje').value

 //     if(!nombre || !correo || !mensaje ){
 //         alert('error faltan datos');
 //     }
 //     else{
 //          alert(nombre + " Su mensaje ha sido enviado gracias por contactarnos");


 let bolsa = document.querySelectorAll('.form-control');
 nombre = bolsa[0].value;
 for (let i = 0; i < bolsa.length; i++) {
    const elemento = bolsa[i].value; // El array se llama bolsa
    if(!nombre || !correo || !mensaje){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error.. faltan datos",
        });
    }
    else{
        Swal.fire({
         title: elemento + " Su mensaje ha sido enviado. Gracias por contactarnos.",
         icon: "success",
         draggable: true
        });
        return;
    }
 }

}























