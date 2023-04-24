export const getSpaceDrinks = async() => {
    const httpPath = `http://localhost:4000/space_220`;
    const response = await fetch( httpPath );
    const data = await response.json();
    return data;
}