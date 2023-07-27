window.onload = function(){
    let regStr = /hi/;
    let patern = /\d\d\d/g;

    let regClass = new RegExp('css');
    let regPaternClass = new RegExp(/\d\d\d/g); // ??

    let serchString = 'Sring text 123 css  and number 456';
    let serchIndex = serchString.search(patern);
    console.log(`Patern start from ${serchIndex}`);
    // let resultText = serchString.replace(patern, '!!!');
    // console.log(resultText);
    let resultMatch = serchString.match(regPaternClass);
    console.log(resultMatch, 111);
    let userOperation = '5 плюс 2 = 7';
    let operationValues = userOperation.match(/\d/g);
    console.log(`User opertion value ${operationValues}`);

    let dialog = `Are you ok? Yes I'm OK!`;
    let replaceText = dialog.replace(/ok/gi, 'fine');
    console.log(replaceText);

    let textToSplit = 'Test123-aTest456-bTest789-c'
    // let splitText = textToSplit.split('-');
    let splitText = textToSplit.split(/\d\d\d/g);

    console.log(splitText);

    let userInput = 'Hello world!'
    console.log(patern.test(userInput));

    let numberInput = 'age 12 age ';
    console.log(patern.exec(numberInput));

}