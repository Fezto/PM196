const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 },
]

const luis = personas.find((persona) => persona.nombre === "Luis");
console.log(luis)

personas.forEach((persona) => console.log(`Soy ${persona.nombre} y tengo ${persona.edad} años!`));

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(totalEdades);

