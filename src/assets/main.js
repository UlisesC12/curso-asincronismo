const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCF1qeLni_kzLBeZM5jcrmFw&part=snippet%2Cid&order=date&maxResults=50';
const content = null || document.getElementById("content");
const videoURL = "https://www.youtube.com/watch?v=";
import {YT_API_KEY} from "./../../node_modules/api-keys/keys.js";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': YT_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <a target="_blank" href="${videoURL+video.id.videoId}" >
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
                </a>
            </div>
        `).slice(0,2).join('')}
        `;
        content.innerHTML = view;
    } catch (err) {
        console.log(err);
    }
})();