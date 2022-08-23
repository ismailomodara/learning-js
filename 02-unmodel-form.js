const form = {
    name: '',
    street: {
        name: '',
        number: ''
    },
    zipcode: '',
    contact: {
        phone: {
            one: '',
            two: ''
        },
        home: {
            address: {
                one: '',
                two: ''
            }
        }
    }
}

const unmodelProperty = (key, content) => {
    if (!content) {
        return [key]
    }

    return Object.keys(content).reduce((acc, i) => {
        return acc.concat(...unmodelProperty(`${key}.${i}`, content[i]))
    }, [])
}

const unmodelForm = () => {
    let keys = Object.keys(form);

    return keys.reduce((acc, key) => {
        const result = unmodelProperty(key, form[key])
        return acc.concat(...result)
    }, [])
}

const inputs = unmodelForm();
console.log(inputs)