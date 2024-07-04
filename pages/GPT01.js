<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min GPT Hemsida</title>
</head>
<body>
    <h1>Interagera med min GPT</h1>
    <form id="gpt-form">
        <label for="prompt">Skriv din fråga här:</label><br>
        <textarea id="prompt" name="prompt" rows="4" cols="50"></textarea><br><br>
        <input type="submit" value="Skicka">
    </form>
    <div id="response"></div>

    <script>
        document.getElementById('gpt-form').addEventListener('submit', async function(event) {
            event.preventDefault();
            const prompt = document.getElementById('prompt').value;
            const responseDiv = document.getElementById('response');
            responseDiv.innerText = 'Laddar...';

            try {
                const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer DIN_API_NYCKEL'
                    },
                    body: JSON.stringify({
                        prompt: prompt,
                        max_tokens: 150
                    })
                });

                const data = await response.json();
                responseDiv.innerText = data.choices[0].text;
            } catch (error) {
                responseDiv.innerText = 'Ett fel uppstod: ' + error.message;
            }
        });
    </script>
</body>
</html>
