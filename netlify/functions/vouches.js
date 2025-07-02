const fetch = require(node-fetch);

exports.handler = async function(event, context) {
  try {
    const response = await fetch(http2.58.113.2116969apivouches, {
      headers {
        Authorization Bearer e6N7yUMHs2q2U5m7JrQBfMVQjrKwpcQY
      }
    });

    const data = await response.json();

    return {
      statusCode 200,
      body JSON.stringify(data),
      headers {
        Access-Control-Allow-Origin ,
        Content-Type applicationjson
      }
    };
  } catch (err) {
    return {
      statusCode 500,
      body JSON.stringify({ error err.toString() })
    };
  }
};
