const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const response = await fetch("http://2.58.113.211:6969/api/vouches", {
      headers: {
        Authorization: "Bearer e6N7yUMHs2q2U5m7JrQBfMVQjrKwpcQY"
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.toString() })
    };
  }
};
