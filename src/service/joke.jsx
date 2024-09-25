const idioma = "es";

export const reqJoke = async () => {
    
    const resp = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=${idioma}`)
    const data = await resp.json()
    return data
}
