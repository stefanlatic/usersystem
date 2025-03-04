
export const userStateEffect = () => ({setSelf, onSet}) => {

    const savedValues = localStorage.getItem("userTasks");

    if(savedValues != null) {
        setSelf(JSON.parse(savedValues));
    }
    onSet(newValue => {
        localStorage.setItem("userTaks", JSON.stringify(newValue))
    })
}

