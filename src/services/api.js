const getDataApi = (value)=>{
    return fetch(`https://hp-api.onrender.com/api/characters/house/${value}`)
        .then(response=>response.json())
        .then(data => {
            const arrayData = data.map(item => {
                return{
                    image: item.image || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter",
                    name: item.name,
                    species: item.species,
                    id: item.id,
                    house: item.house,
                    gender: item.gender,
                    alternate_names: item.alternate_names,
                    alive: item.alive ? 'Viva' : 'Muerta'
                }
            });
            return arrayData            
        });
}

export default getDataApi