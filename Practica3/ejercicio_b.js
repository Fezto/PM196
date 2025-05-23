function verificarUsuario(usuario) {
    return new Promise((res, rej) => {
        usuario === "Admin" ? res("Acceso Concedido!") : rej("Acceso D-E-N-E-G-A-D-O!")
    })
}

verificarUsuario("NPC random")
    .then((resp) => console.log(resp))
    .catch((err) => console.error(err))

verificarUsuario("Admin")
    .then((resp) => console.log(resp))
    .catch((err) => console.error(err))