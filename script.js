let esMasculino = true;

        const card = document.querySelector(".perfil-card");
        const nombre = document.getElementById("nombre");
        const ocupacion = document.getElementById("ocupacion");

        card.addEventListener("click", () => {
            if (esMasculino) {
                
                //Se cambia a Femenino tocando el nombre o la ocupación
                nombre.textContent = "Andy-Pierinn Gignac";
                ocupacion.textContent = "Futbolista Delantera Profesional";
                alert("El perfil ha cambiado a femenino.");
            } else {
                
                //Se regresa al nombre original
                nombre.textContent = "André-Pierre Gignac";
                ocupacion.textContent = "Futbolista Delantero";
                alert("El perfil ha cambiado");
            }

            esMasculino = !esMasculino; 
        });