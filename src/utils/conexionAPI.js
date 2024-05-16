/* URL base: https://rickandmortyapi.com/api */

const API = "https://rickandmortyapi.com/api"

export const get = (path) => {
    return fetch(API + path).then((response) => {
        if (!response.ok) {
            throw new Error(`Error al realizar la solicitud: ${response.status}`);
        }
        return response.json();
    });
};