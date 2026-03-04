function reserva(){
    let bolsa = document.querySelectorAll('.form-control');
 nombre = bolsa[0].value;
 for (let i = 0; i < bolsa.length; i++) {
    const elemento = bolsa[i].value; // El array se llama bolsa
    if(!nombre || !correo || !fecha || !hora ){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error.. faltan datos",
        });
        return;
    }
    else{

      Swal.fire({
         title: "Estas seguro de hacer tu reserva?",
         icon: "warning",
         showCancelButton: true,
         cancelButtonColor: "#d33",
         confirmButtonColor: "#3085d6",
         confirmButtonText: "confirmar"
        }).then((result) => {
         if (result.isConfirmed) {
          Swal.fire({
             title: `${elemento}  Su reserva a sido exitosa.`, 
             icon: "success"
            });S
         }
        });
        return;
    }
 }
}