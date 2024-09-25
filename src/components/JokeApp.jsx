import React, { useState } from "react";
import { reqJoke } from "../service/joke";
import { JokeChiste } from "./JokeChiste";

export const JokeApp = () => {

  const [joke, setJoke] = useState(null)

  const handleGetJoke = async () => {

    const data = await reqJoke() // Llama a la función del servicio
    setJoke(data) // Actualiza el estado con el chiste obtenido
  }

  return (
    <div className="container">
      <h1 className="mt-3 w-50">Pulsa el botón para mostrar la broma</h1>
      <button className="btn btn-primary d-flex" onClick={handleGetJoke}>Mostrar broma</button>
      <JokeChiste joke={joke}/>
    </div>
  )
}
