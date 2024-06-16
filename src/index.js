function displayTravel(response) {
  new Typewriter("#travel", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTravel(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "406tac3d1af0db7dfbb34a6c42bb8ofe";
  let context =
    "You're a travel specialist, you know details about places all over the world and the best things to do in each one. Write using HTML and <br />. Be organized and make the use of categories for each tip.";
  let prompt = `Write an answer about things to do, focusing on ${promptInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let travelElement = document.querySelector("#travel");
  travelElement.classList.remove("hidden");
  travelElement.innerHTML = `<div class="creating"> ✍️ Researching about ${promptInput.value}</div>`;
  axios.get(apiURL).then(displayTravel);
}

let travelFormElement = document.querySelector("#travel-form");
travelFormElement.addEventListener("submit", generateTravel);
