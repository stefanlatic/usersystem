
export const localStorageEffect = () => ({setSelf, onSet}) => {

    const savedValues = localStorage.getItem("userData");

    if(savedValues != null) {
        setSelf(JSON.parse(savedValues));
    }
    onSet(newValue => {
        localStorage.setItem("userData", JSON.stringify(newValue))
    })
}

