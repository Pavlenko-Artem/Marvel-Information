

class MarvelService {
  getResources = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = () => {
    return this.getResources('https://gateway.marvel.com:443/v1/public/characters?apikey=9b86234cc5a303cbdc10975ed742e691');
  }
}

export default MarvelService;