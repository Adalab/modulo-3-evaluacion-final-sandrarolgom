const getDataApi = ()=>{
    return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
        .then(response=>response.json())
        .then(data => {
            const arrayData = data.map(item => {
                return{
                    image: item.image,
                    name: item.name,
                    species: item.species
                }
            });
            return arrayData            
        });
}

export default getDataApi