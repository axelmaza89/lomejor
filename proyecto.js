var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
var recargosa = 0;
var edad = 2020 - anioNacimiento;

document.write("La empresa de seguros TK-U <br/>");
document.write("Ubicada en la ciudad Jedha, le da la Bienvenida Sr/Srita: <br/>");
document.write("<br\>");
document.write(nombreCompleto);
document.write("<br\>");

  if (edad <= 18){
    document.write('Como usted es menor de edad, no se le aplica recargo :)');

  }else if(edad >=21 && edad <= 25 ) {
    recargosa = 1;
    document.write('Como usted tiene ' +edad +' años, se el aplicará ' + recargosa + '% de recargos,');

  }else if(edad >=25 && edad <= 30 ) {
    recargosa = 2;
    document.write('Como usted tiene ' +edad +' años, se el aplicará ' + recargosa + '% de recargos,');

  }else if(edad >=30 && edad <= 40 ) {
    recargosa = 5;
    document.write('Como usted tiene ' +edad +' años, se el aplicará ' + recargosa + '% de recargos,');

  }else if(edad >=40 && edad <= 50 ) {
    recargosa = 8;
    document.write('Como usted tiene ' +edad +' años, se el aplicará ' + recargosa + '% de recargos,');

  }else if(edad >=50 && edad <= 65 ) {
   recargosa = 12;
   document.write('Como usted tiene ' +edad +' años, se el aplicará ' + recargosa + '% de recargos,');

  }else if(edad >=65){
    alert('Como usted tiene ' +edad +' años, no se le puede asegurar ');

  } else {
   document.write('Como usted tiene ' +edad +' años, se el aplicará ' + recargosa + '% de recargos,');
  }
document.write("<br\>");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var nombreConyuge = prompt("Por favor ingrese el nombre completo de su conyuge:", "Nombres y apellidos");
var diaConyuge = prompt("Ingrese el día de nacimiento de su conyuge", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesConyuge = prompt("Ingrese el mes de nacimiento de su conyuge", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioConyuge = prompt("Ingrese el año de nacimiento de su conyuge", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
var edadConyuge = 2020 - anioConyuge;
var recargosc =0;

 
if (edadConyuge <= 30){
    recargosc = 1;
    document.write('Como su conyuge ' +nombreConyuge+ ', tiene ' +edadConyuge +' años, se le aplicará ' + recargosc + '% de recargos.');

  }else if(edadConyuge >=30 && edadConyuge <= 40 ) {
    recargosc = 2;
    document.write('Como su conyuge ' +nombreConyuge+ ', tiene ' +edadConyuge +' años, se le aplicará ' + recargosc + '% de recargos.');

  }else if(edadConyuge >=40 && edadConyuge <= 50 ) {
    recargosc = 3;
    document.write('Como su conyuge ' +nombreConyuge+ ', tiene ' +edadConyuge +' años, se le aplicará ' + recargosc + '% de recargos.');

  }else if(edad >=50 && edad <= 70 ) {
    recargosc = 5;
    document.write('Como su conyuge ' +nombreConyuge+ ', tiene ' +edadConyuge +' años, se le aplicará ' + recargosc + '% de recargos.');

  } else {
    document.write('Como su conyuge ' +nombreConyuge+ ', tiene ' +edadConyuge +' años, se le aplicará ' + recargosc + '% de recargos.');
  }
document.write("<br\>");
 

var hijos = prompt("¿Tiene hijos?", "SI/NO");
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
var recargosh = 0;
var canthijos = cantidadHijos;

     if (canthijos >= 0){
    recargosh = 1 * canthijos;
    document.write('y como usted tiene ' +canthijos +' hijos, se le agregarán ' + recargosh + '% de recargos.<br/>');
    }
document.write("--------------------------------------------------------------------------------------------<br\>");


const precioBase = 250;

comision = precioBase * 0.30;

recargos = precioBase *recargosa/100 + precioBase *recargosc/100 + precioBase* recargosh/100;

 

 

totalPagar = precioBase + comision + recargos;

 


document.write("Su total a Pagar es: Q" + totalPagar);
document.write("<br\>");
document.write("--------------------------------------------------------------------------------------------<br\>");
 