let menu, bebida;
menu = prompt("Tipo de menu: pechuga de pollo, alitas, ensalada, pizza, ")
switch (menu){
    case 'pechuga de pollo':
        bebida = "¿Desea beber refresco?";
        break;
    case 'alitas':
        bebida = "¿Desea beber agua de limon?";
        break;
    case 'ensalada':
        bebida = "¿Desea agua natural?";
        break;
    case 'pizza':
    bebida = "¿Desea jugo de naranja?";
    break;
    default:
        bebida = "Elija pechuga de pollo, alitas, ensalada o pizza";
    }
alert(bebida);