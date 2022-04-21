
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {

    const persona = {
        nombre: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }
    }

  return (
    <>
        <h3>Objetos literales</h3>
        <code>
            <pre>
                { JSON.stringify( persona, null, 2 ) }
            </pre>
        </code>
    </>
  )
}
