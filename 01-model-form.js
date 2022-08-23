const inputs = ['name', 'street.name', 'street.number', 'zipcode', 'contact.phone.one', 'contact.phone.two', 'contact.home.address.one', 'contact.home.address.two'];

const modelProperty = (keys, content) => {
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
     * Remove the parent from the list
     */
    keys.shift();

    return {
        [parent]: {
            ...content[parent],
            ...modelProperty(keys, content[parent] ? content[parent] : {})
        }
    }
}

const modelForm = () => {
    let form = {};

    inputs.forEach(input => {
        const keys = input.split('.');
        form = {
            ...form,
            ...modelProperty(keys, form)
        }
    })

    return form
}

const form = modelForm();
console.log(form)