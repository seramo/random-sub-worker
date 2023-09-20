/**
 * Cloudflare Worker to Fetch Random Subscription URL
 * Author: SeRaMo ( https://github.com/seramo/ )
 */

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    // Define an array of subscription URLs
    const randomUrls = [
        // YeBeKhe
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/donated',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/vmess',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/vless',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/reality',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/normal/trojan',
        // MahdiBland
        'https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt',
        // Other
        'https://zebelkhan10.fallahpour25.workers.dev/sub/74f829f3-480b-4e7f-8039-9418d055375b',
        'https://tackserver-code.ir/api/json/VpnMaan.json',
        // Add more URLs as needed
    ];

    let response;
    let randomUrl;

    // Keep trying URLs until a 200 status code is found
    while (true) {
        // Generate a random index to pick a URL from the array
        const randomIndex = Math.floor(Math.random() * randomUrls.length);

        // Get the random URL
        randomUrl = randomUrls[randomIndex];

        // Fetch the content of the random URL
        response = await fetch(randomUrl);

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
            break; // Exit the loop if a 200 status code is found
        }
    }

    // Return the response with a 200 status code
    return response;
}