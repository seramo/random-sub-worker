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
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/mix',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/donated',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/vmess',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/vless',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/reality',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/normal/trojan',
        'https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/shadowsocks',
        'https://raw.githubusercontent.com/yebekhe/V2Hub/main/merged_base64',
        'https://raw.githubusercontent.com/yebekhe/V2Hub/main/Split/Base64/vmess',
        'https://raw.githubusercontent.com/yebekhe/V2Hub/main/Split/Base64/vless',
        'https://raw.githubusercontent.com/yebekhe/V2Hub/main/Split/Base64/reality',
        'https://raw.githubusercontent.com/yebekhe/V2Hub/main/Split/Base64/trojan',
        'https://raw.githubusercontent.com/yebekhe/V2Hub/main/Split/Base64/shadowsocks',
        // MahdiBland
        'https://raw.githubusercontent.com/mahdibland/SSAggregator/master/sub/sub_merge_base64.txt',
        'https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt',
        // Vahid Farid ( V2Ray Worker )
        'https://raw.githubusercontent.com/mfuu/v2ray/master/v2ray',
        'https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list_raw.txt',
        'https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/v2ray.txt',
        'https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription1',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription2',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription3',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription4',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription5',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription6',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription7',
        'https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription8',
        'https://raw.githubusercontent.com/freefq/free/master/v2',
        'https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub',
        // Other
        'https://zebelkhan10.fallahpour25.workers.dev/sub/74f829f3-480b-4e7f-8039-9418d055375b',
        'https://panel.quickservice.sbs/gWQfDehzDHyfmKXWUK9N4sSL6fRn/2d0c6203-f715-4b14-973a-ac25e560b03e/all.txt?name=panel.quickservice.sbs-unknown&asn=unknown&mode=new',
        'https://tackserver-code.ir/api/json/mrpooya.xyz.json',
        'https://freevpn878.hamidimorteza680.workers.dev/sub',
        'https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/reality',
        'https://proxypool.link/sip002/sub',
        'https://proxypool.link/vmess/sub',
        'https://test2.sub-channel.workers.dev/vless/iphone/random',
        'https://raw.githubusercontent.com/MrPooyaX/MahsaNG/master/Decrypted___MahsaNGConfigs.txt',
        'https://tackserver-code.ir/api/json/VpnMaan.json',
        'https://raw.githubusercontent.com/freefq/free/master/v2',
        'https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub',
        'https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2',
        'https://raw.githubusercontent.com/AzadNetCH/Clash/main/V2Ray.txt',
        'https://raw.githubusercontent.com/awesome-vpn/awesome-vpn/master/all',
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