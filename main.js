const jokeElement = document.querySelector("#joke")
const getJokeButton = document.querySelector("button")
const apiURL = "https://icanhazdadjoke.com"

async function getRandomJoke () {
    const response = await fetch( apiURL, {
        headers: {
          Accept: "application/json",
        },
      })
      const data = response.json()
    //   console.log(data)
      return data
}

async function handleClick (event) {
    const { joke } = await getRandomJoke()
    jokeElement.replaceChildren(joke)
}

getJokeButton.addEventListener("click", handleClick)