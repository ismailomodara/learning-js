const inputs = ['name', 'street.name', 'street.number', 'street.city', 'street.number.flat', 'zipcode', 'contact.phone.one', 'contact.phone.two', 'contact.home.address', 'contact.home.address2'];

const serializeProperty = (keys, content) => {
    if(keys.length === 1) {
        return {
            [keys[0]]: ''
        }
    }

    /**
     * Get parent of current keys
     */
    const parent = keys[0];

    /**
     * Remove the parent of the list
     */
    keys.shift();

    return {
        [parent]: {
            ...content[parent],
            ...serializeProperty(keys, content[parent] ? content[parent] : {})
        }
    }
}

const serializeForm = () => {
    let form = {};

    inputs.forEach(input => {
        const keys = input.split('.');
        form = {
            ...form,
            ...serializeProperty(keys, form)
        }
    })

    return form
}

const form = serializeForm();
console.log(form)