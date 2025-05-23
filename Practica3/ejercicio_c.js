function simularPeticionAPI() {
    return new Promise((res, rej) => {
        const rand = Math.trunc(Math.random() * 5 + 1);
        setTimeout(() => {
            switch (rand) {
                case 1:
                    res("Bombardiro Crocodilo");
                    break;
                case 2:
                    res("La Vaca Saturno Saturnida");
                    break;
                case 3:
                    res("Lirili Larila");
                    break;
                case 4:
                    res("Tung Tung Tung Tung Sahur");
                    break;
                case 5:
                    res("Tripi Tropa Tropo Tripi");
                    break;
                default:
                    rej("Hubo problemillas!");
                    break;
            }
        }, 5000)
    })
}

async function obtenerDatos() {
    return await simularPeticionAPI()
}

const mascota = await obtenerDatos()
console.log("TU MASCOTA ASIGNADA ES..... ", mascota)