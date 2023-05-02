export function serializeForm(elements) {
    const formData = {};
   
    elements.forEach(input => {
        if (input.type === 'submit') return

        if (input.type !== 'checkbox') {
                formData[input.name] = input.value;
        }
        if (input.type === 'checkbox') {
            formData[input.name] = input.checked;
        }
    });
    return formData
}

export function setDataRefrash(minutes, key) {
    const setTime = new Date(new Date().getTime() + minutes * 60000)
    localStorage.setItem(key, setTime);
}