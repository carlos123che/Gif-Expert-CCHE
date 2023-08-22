export const getGifts = async (category) => {
    const API_KEY = '2Tv1EYA3V7ov6272ZXPDrRBkdoLAvCuH';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=4`;
    const resp = await fetch(URL);

    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs
}


