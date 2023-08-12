const buttonTitle = 'Add to Cart';

// const recipes = [
//     {
//         name: 'Chicken Karahi',
//         description: 'Very good',
//         image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.taste.com.au%2Frecipes%2Fchicken-karahi-recipe%2Fzhxjjkte&psig=AOvVaw3VMuvI5cEpI_-yaogMv9WP&ust=1691113379105000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiSvrOuv4ADFQAAAAAdAAAAABAE',
//         price: 15.99,
//     },
//     {
//         name: 'Chicken Karahi',
//         description: 'Very good',
//         image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.taste.com.au%2Frecipes%2Fchicken-karahi-recipe%2Fzhxjjkte&psig=AOvVaw3VMuvI5cEpI_-yaogMv9WP&ust=1691113379105000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiSvrOuv4ADFQAAAAAdAAAAABAE',
//         price: 15.99,
//     }
// ]

async function logMovies() {
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    const movies = await response.json();
    
    console.log(movies);
}

logMovies()