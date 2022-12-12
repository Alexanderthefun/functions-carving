const createWoodBlock = () => {
    // Return an object with 4 properties.
    let woodObject = {
        type: "wood block",
        length: 10,
        material: "pine",
        purepose: "flute"
    }
    return woodObject;
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const HTMLwood = `The ${woodObject.length}-inch ${woodObject.material} ${woodBlock.type} was carved into a wooden ${woodBlock.purepose}`
    return HTMLwood
};

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)