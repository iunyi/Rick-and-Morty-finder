const getDataFromApi = async () => {
    const fetchedData = await Promise.all([
        fetchData('https://rickandmortyapi.com/api/character/'),
        fetchData('https://rickandmortyapi.com/api/character/?page=2'),
        fetchData('https://rickandmortyapi.com/api/character/?page=3'),
        fetchData('https://rickandmortyapi.com/api/character/?page=4'),
        fetchData('https://rickandmortyapi.com/api/character/?page=5'),
        fetchData('https://rickandmortyapi.com/api/character/?page=10'),
    ]);
    return fetchedData.flat();
};

const fetchData = async (endpoint) => {
    const response = await fetch(endpoint);
    const responseData = await response.json();
    return responseData.results;
};

export default getDataFromApi;