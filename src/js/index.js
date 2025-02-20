(async () => {
  async function newAdvice() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    return await response.json();
  }

  try {
    let advice = await newAdvice();

    const adviceId = document.getElementsByClassName("advice__id")[0];
    const adviceQuote = document.getElementsByClassName("advice__quote")[0];

    adviceId.innerText = `Advice #${advice.slip.id}`;
    adviceQuote.innerText = `"${advice.slip.advice}"`;

    document
      .getElementsByClassName("advice__new")[0]
      .addEventListener("click", async () => {
        advice = await newAdvice();

        adviceId.innerText = `Advice #${advice.slip.id}`;
        adviceQuote.innerText = `"${advice.slip.advice}"`;
      });
  } catch (error) {
    console.log(error);
  }
})();
