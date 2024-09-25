import React from "react";

export const JokeChiste = ({ joke }) => {

  if (!joke) {
    return null // No renderiza nada si joke es null
  }

  return (
    <div>
      {joke.setup && <p>{joke.setup}</p>}
      {joke.delivery && <p>{joke.delivery}</p>}
      {!joke.setup && <p>{joke.joke}</p>}
    </div>
  )
}
