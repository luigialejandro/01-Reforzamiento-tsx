//import { TiposBasicos } from "./typescript/TiposBasicos";

import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Funciones } from "./typescript/Funciones";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";


const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>
      <hr/>
      {/*<TiposBasicos /> */}
      {/*<ObjetosLiterales /> */}
      {/*<Funciones /> */}
      {/*<Contador /> */}
      <ContadorConHook />
    </div>
  )
}

export default App;
