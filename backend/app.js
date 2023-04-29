require("dotenv").config();

console.log("HI");

// get OPENAI_API_KEY from .env file
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const url = "https://api.openai.com/v1/";
var request_url = url + "chat/completions";

console.log(OPENAI_API_KEY);

async function request() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Say this is a test!" }],
      temperature: 0.7,
    }),
  };

  try {
    const response = await fetch(request_url, requestOptions);
    const data = await response.json();
    console.log("data");
    console.log(data);
  } catch (error) {
    window.location.reload();
    console.log("error");
    console.log(error);
  }
}

request();
