let bd=JSON.parse(localStorage.getItem("miBDp"));
if(!bd || bd==undefined){
    bd={ datos: [] };
};
var myNodelist = document.querySelectorAll("form");
var text="";

myNodelist.forEach(node => 
{
    text+=node.innerHTML + "<BR>";
})
document.getElementsById("frm1").innerHTML +=text;

document.getElementById("btnEnter").addEventListener("click", ()=>{
    let demo=document.getElementsById("frm1");
    demo.classList.toggle("ocultar");
    
})

document.getElementById("btnEnter2").addEventListener("click",()=>{

})

document.getElementById("btnSave").addEventListener("click",()=>{
    let nombre=document.getElementById("txtNombre").value;
    let edad=document.getElementById("txtEdad").value;
    let correo=document.getElementById("txtCorreo").value;
    let contraseña=document.getElementById("txtContra").value;
    let alguien=new deudor(nombre,edad,correo,contraseña);

    bd.datos.push(alguien);

    localStorage.setItem("miBDp",JSON.stringify(bd));
    console.log("guardado " + alguien );
});


document.getElementById("btnRestore").addEventListener("click", ()=>{
    let base=JSON.parse(localStorage.getItem("miBDp"));
    let texto= "";
    base.datos.forEach(element => {
        texto+=`
            <divclass="card">
                <p><em>Nombre:</em>${element.nombre}</p>
                <p><strong>Edad:</strong>${element.edad}</p>
                <p><em>Correo:</em>${element.email}</p>
            </div>
        `
    });
    document.getElementById("detalles").innerHTML=texto;
    console.log(texto);
    console.log(base);
});

document.getElementById("h2")