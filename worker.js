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
        'https://zebelkhan10.fallahpour25.workers.dev/sub/74f829f3-480b-4e7f-8039-9418d055375b',
        'https://panel.quickservice.sbs/gWQfDehzDHyfmKXWUK9N4sSL6fRn/2d0c6203-f715-4b14-973a-ac25e560b03e/all.txt?name=panel.quickservice.sbs-unknown&asn=unknown&mode=new',
        'https://tackserver-code.ir/api/json/mrpooya.xyz.json',
        'https://freevpn878.hamidimorteza680.workers.dev/sub',
        'https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt',
        'https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/reality',
        'https://proxypool.link/sip002/sub',
        'https://proxypool.link/vmess/sub',
        'https://test2.sub-channel.workers.dev/vless/iphone/random',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/mix',
        'https://raw.githubusercontent.com/MrPooyaX/MahsaNG/master/Decrypted___MahsaNGConfigs.txt',
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