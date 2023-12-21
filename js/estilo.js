// Lista de productos o servicios con sus costos
const productos = [
    { nombre: 'Producto A', costo: 10 },
    { nombre: 'Producto B', costo: 20 },
    { nombre: 'Producto C', costo: 30 },
  ];
  
  // Mostrar opciones al usuario
  console.log('Seleccione un producto:');
  for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}. ${productos[i].nombre} - $${productos[i].costo}`);
  }
  
  // Obtener la selección del usuario
  const seleccion = prompt('Ingrese un número del 1 a 3 de los producto seleccionado:');
  
  // Verificar si la selección es válida
  if (seleccion >= 1 && seleccion <= productos.length) {
    const productoSeleccionado = productos[seleccion - 1];
    const cantidad = prompt('Ingrese la cantidad:');
    
    // Verificar si la cantidad es un número válido
    if (!isNaN(cantidad) && cantidad > 0) {
      // Calcular el costo total
      const costoTotal = productoSeleccionado.costo * cantidad;
      console.log(`El costo total es: $${costoTotal}`);
    } else {
      console.log('Por favor, ingrese una cantidad válida.');
    }
  } else {
    console.log('Selección no válida. Por favor, elija un número de producto válido.');
  }

  //alert(`El costo total es: $${costoTotal}`);