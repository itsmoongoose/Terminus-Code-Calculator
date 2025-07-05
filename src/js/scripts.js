//Function Main
async function main() {

    //User Input -- x
    let x = await input("What is X: ");
    x = x.trim();
    x = Number(x);

    //User Input -- y
    let y = await input("What is Y: ");
    y = y.trim();
    y = Number(y);

    //User Input -- z
    let z = await input("What is Z: ");
    z = z.trim();
    z = Number(z);


    //code1
    const equation1 = ((2*x) + 11);

    //code2
    const equation2 = (((2*z) + y) - 5);

    //code3
    const equation3 = ((y + z) - x);


    output(`Equation 1: ${equation1}`);
    output(`Equation 2: ${equation2}`);
    output(`Equation 3: ${equation3}`);

}