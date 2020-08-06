function getDataFromApi(){
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(responseData => {
            return responseData.results
        })
}

export default getDataFromApi;