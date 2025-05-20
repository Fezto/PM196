const persona = {
    nombre: "Pepe Pecas",
    edad: 57,
    direccion: {
        ciudad: "BCS",
        pais: "MX"
    }
};

const { nombre, edad, direccion } = persona;
console.log(`Hey! Me llamo ${nombre}, tengo ${edad} años y vivo en ${direccion.ciudad}`);