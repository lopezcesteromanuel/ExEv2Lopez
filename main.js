const crudApiUrl = 'https://crudcrud.com/api/c3c55e0c1ae64c7c8ad55ed21fd1efb1 '; // Sustituye "TU_API_KEY" por la clave real de CrudCrud

// Datos proporcionados
const data = [
    {
        title: "Cupresaceas",
        publicationDate: "2025-02-23T00:00:00",
        value: "alto"
    },
    {
        title: "Urticaceas",
        publicationDate: "2025-02-23T00:00:00",
        value: "bajo"
    },
    {
        title: "Fresno",
        publicationDate: "2025-02-23T00:00:00",
        value: "bajo"
    },
    {
        title: "Chopos",
        publicationDate: "2025-02-23T00:00:00",
        value: "medio"
    },
    {
        title: "Pinos",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Artemisa",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Platanus",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Morera",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Ailanthus",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Olivo",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Gramineas",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Chenopodium",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Roble",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    },
    {
        title: "Plántago",
        publicationDate: "2025-02-23T00:00:00",
        value: "nulo"
    }
];

// Mostrar datos en la tabla
function mostrarDatos(datos) {
    const tbody = document.getElementById('polen-data');
    tbody.innerHTML = '';

    datos.forEach(item => {
        const fila = document.createElement('tr');

        // Columna de fecha
        const celdaFecha = document.createElement('td');
        celdaFecha.textContent = item.publicationDate.substring(0, 10); // Solo la fecha, sin la hora
        fila.appendChild(celdaFecha);

        // Columna de especie
        const celdaEspecie = document.createElement('td');
        celdaEspecie.textContent = item.title;
        fila.appendChild(celdaEspecie);

        // Columna de concentración
        const celdaConcentracion = document.createElement('td');
        celdaConcentracion.textContent = item.value;
        fila.appendChild(celdaConcentracion);

        tbody.appendChild(fila);
    });
}

// Guardar datos en CrudCrud
async function guardarDatosEnAPI() {
    try {
        for (const item of data) {
            const response = await fetch(crudApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    publicationDate: item.publicationDate,
                    title: item.title,
                    value: item.value
                })
            });

            if (!response.ok) {
                throw new Error('Error al guardar los datos en la API.');
            }
        }

        alert('Datos guardados correctamente en la API REST.');
    } catch (error) {
        console.error('Error al guardar los datos:', error);
    }
}

// Evento del botón para guardar datos
document.getElementById('guardar-datos').addEventListener('click', guardarDatosEnAPI);

// Llamar a la función para mostrar los datos al cargar la página
mostrarDatos(data);