const getPuzzle = async (wordCount) => {
    const response = await fetch(
        `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
    );
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);
};

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all');

    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch the country');
    }
};

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=f2d335782538e5');
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to get the current location');
    }
};

export { getPuzzle as default };

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//     } else if (e.target.readyState === 4) {
//         console.log('An error');
//     }
// });

// request.open('GET', 'https://993e0ffd.ngrok.io/tasks/2');
// request.send();
