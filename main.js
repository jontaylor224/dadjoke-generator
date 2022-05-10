const jokeElement = document.querySelector("#joke")
const getJokeButton = document.querySelector("button")
const apiURL = "http://icanhazdadjoke.com"

async function getRandomJoke () {
    const response = await fetch( apiURL, {
        headers: {
          Accept: "application/json",
        },
      })
      const data = response.json()
      console.log(data)
      return data
}

async function handleClick (event) {
    jokeElement.innerHTML = ""
    const { joke } = await getRandomJoke()
    jokeElement.append(joke)
}

getJokeButton.addEventListener("click", handleClick)