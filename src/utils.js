const makePairs = (values) => {
    return values.reduce(function (result, _, index, array) {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }, []);
}

module.exports = {
    makePairs,
};