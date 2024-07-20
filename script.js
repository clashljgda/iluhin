async function generateImage() {
    const query = document.getElementById('query').value;
    const apiKey = 'YOUR_OPENAI_API_KEY'; // Замените на ваш API ключ

    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: query,
            n: 1,
            size: '1024x1024'
        })
    });

    const data = await response.json();
    const imageUrl = data.data[0].url;

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
}
