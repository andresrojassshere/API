const showMovies = async() => {
    try{
    const answer = await fetch ('https://api.themoviedb.org/3//movie/3558/similar?api_key=4fd9842ab42f902a773bcddb981ad884');

   const data =  await answer.json();
    (data.results).forEach(movie => {
    console.log('Title: ' + movie.title);
    console.log('Release date: ' + movie.release_date);
    console.log('Original language: ' + movie.original_language);
    console.log('Id: ' + movie.id);

  });

    } catch (error){
        console.log(error);
    }
}

showMovies();