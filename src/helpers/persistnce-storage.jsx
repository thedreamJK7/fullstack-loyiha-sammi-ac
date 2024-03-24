export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log('Something is fucking wrong!');        
    }
}   
export const getItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log(error);
    }
}
export const remove = (key) => {
    try {
        return localStorage.removeItem(key)
    } catch (error) {
        console.log(error);
    }
}