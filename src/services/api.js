const getDataApi = (value)=>{
    return fetch(`https://hp-api.onrender.com/api/characters/house/${value}`)
        .then(response=>response.json())
        .then(data => {
            const arrayData = data.map(item => {
                return{
                    image: item.image || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter",
                    name: item.name,
                    species: item.species
                }
            });
            return arrayData            
        });
}

export default getDataApi