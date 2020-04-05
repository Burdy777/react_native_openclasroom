const TOKEN = '9593f1d550462b96f5aff570bbbd6246';

export const getFilms = (search) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=9593f1d550462b96f5aff570bbbd6246&language=fr&query=${search}`)
        .then(res =>  res.json())
        .catch(_ => alert('Problème sur le réseau, tenter votre demande utlérieurement'));
};

// https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
