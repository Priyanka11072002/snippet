function isEmpty(value) {
    console.log(value, 'value');
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
}

function productValidation(productdetails) {
    for (let key in productdetails) {
    
        if (isEmpty(productdetails[key])) {z
            return false;
        }
    }
    return true;
}

const productdetails = {
    productName: 'saree',
    unitCoast: 700,
    unitprice: '',
    store: '',
    category: 'traditional dress'
}

const dataOfProduct = productValidation(productdetails);

if (dataOfProduct) {
    console.log("Form submitted. Data is correct.");
} else {
    console.log("Form submitted. Data is not correctly filled.");
}
