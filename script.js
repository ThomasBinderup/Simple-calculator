let calculatorField = document.getElementById('calculatorField');

let oneButton = document.getElementById('one');

let topCalculatorField = document.getElementById('topCalculatorField')

let pos = 139

let squareRoot = document.getElementById('square-root');

let exponentiationCleared = false;

let equalsPressed = false;

// Right to left text:
let changeInput = () => {
    pos -= 8
    calculatorField.style.left = `${pos}px`;
}

let cleared = false;

let clearTextIfSymbol = () => {
    let booleanValue;
    let arrayTopCalculatorField = topCalculatorField.innerHTML.split('')

    arrayTopCalculatorField.forEach(arrayItem => {
        if (arrayItem === '+' || arrayItem === '-' || arrayItem === '*') {
        booleanValue = true;
        }
    })
    
        if (booleanValue && cleared === false) {
            calculatorField.innerHTML = ''
            cleared = true;
            pos = 139;
        }
}

// Number buttons added:
    oneButton.addEventListener('click', () => {
        
        if (topCalculatorField.innerHTML.includes('√')) {
            topCalculatorField.innerHTML += '1';
            pos -= 8
            topCalculatorField.style.left = `${pos}px`
        } else {
            clearTextIfSymbol();
            calculatorField.innerHTML += '1';
            changeInput();
        }

        if (equalsPressed) {
            calculatorField.innerHTML = '';
            pos = 135;
            calculatorField.style.left = `${pos}px`
            calculatorField.innerHTML += '1';
            topCalculatorField.innerHTML = '';
            topPos = 135;
            topCalculatorField.style.left = `${pos}px`
            equalsPressed = false;
        }
})

let twoButton = document.getElementById('two'); 

twoButton.addEventListener('click', () => {
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '2';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {
    clearTextIfSymbol();
    calculatorField.innerHTML += '2';
    changeInput()
    }

    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '2';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }
})

let threeButton = document.getElementById('three').addEventListener('click', () => {
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '3';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {
    clearTextIfSymbol();
    calculatorField.innerHTML += '3'
    changeInput() 
    }
    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '3';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }

})

let fourButton = document.getElementById('four').addEventListener('click', () => {
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '4';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {clearTextIfSymbol();
    calculatorField.innerHTML += '4'
    changeInput()
    }

    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '4';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }
})

let fiveButton = document.getElementById('five').addEventListener('click', () => {
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '5';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {clearTextIfSymbol();
    calculatorField.innerHTML += '5'
    changeInput() }

    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '5';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }
})

let sixButton = document.getElementById('six').addEventListener('click', () => { 
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '6';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {
    clearTextIfSymbol();
    calculatorField.innerHTML += '6'
    changeInput()
    }

    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '6';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }
})

let sevenButton = document.getElementById('seven').addEventListener('click', () => {
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '7';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {
    clearTextIfSymbol();
    calculatorField.innerHTML += '7'
    changeInput()
    }

    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '7';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }
})

let eightButton = document.getElementById('eight').addEventListener('click', () => {
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '8';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {clearTextIfSymbol();
    calculatorField.innerHTML += '8'
    changeInput()
    }
    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '8';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }
})

let nineButton = document.getElementById('nine').addEventListener('click', () => {
    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML += '9';
        pos -= 8
        topCalculatorField.style.left = `${pos}px`
    } else {clearTextIfSymbol();
    calculatorField.innerHTML += '9'
    changeInput()
    }

    if (equalsPressed) {
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`
        calculatorField.innerHTML += '1';
        topCalculatorField.innerHTML = '';
        topPos = 135;
        topCalculatorField.style.left = `${pos}px`
        equalsPressed = false;
    }
})

// Clear function

document.getElementById('clear').addEventListener('click', () => {
    //field cleared
    calculatorField.innerHTML = "";
    topCalculatorField.innerHTML = "";
    
    // position cleared
    topPos = 135;
    topCalculatorField.style.left = `${topPos}px`

    pos = 135;
    topCalculatorField.style.left = `${pos}px`

})  


// Position added to top and bottom calculatorField

let topCalculatorFieldLength = 0;
let topPos = 135;

let changeTopCalculatorField = () => {
    
     topCalculatorFieldLength = topCalculatorField.innerHTML.length;
     topPos -= (7*topCalculatorFieldLength)
    topCalculatorField.style.left = `${topPos}px`;
}

let calculatorFieldLength = 0;

let changeCalculatorField = () => {
    calculatorFieldLength = calculatorField.innerHTML.length
    pos = 135;
    pos -= (7*calculatorFieldLength)
    calculatorField.style.left = `${pos}px`
}

// Calculation added:
let stringOfTop, stringOfCal, combine, result, lengthCalculatorField, addExtraPos;

let calculation = () => {
    // calculation   
    let arrayOfTop = topCalculatorField.innerHTML.split('');
      
      if (arrayOfTop[0] === '√') {
        arrayOfTop.shift();
        numbersOnlyAsString = arrayOfTop.join('');
        let numbersOnly = Number(numbersOnlyAsString)
        return Math.sqrt(numbersOnly);


      } else if (exponentiationCleared) {
        let store = calculatorField.innerHTML.replace('²', '')
        store = Number(store);
        return Math.pow(store,2);
        
      } else {
    stringOfTop = topCalculatorField.innerHTML;
    stringOfCal = calculatorField.innerHTML;
    combine = stringOfTop.concat(stringOfCal)
    result = eval(combine);
    topPos = 135;
        return result;
      }
}

let calculatedValue;

let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    equalsPressed = true;
    let topCalculatorValue = topCalculatorField.innerHTML;
    let calculatorValueExpo = calculatorField.innerHTML
    calculatorField.innerHTML = calculation();

    if (topCalculatorField.innerHTML.includes('√')) {
        topCalculatorField.innerHTML = topCalculatorValue;
        topCalculatorField.innerHTML += '='
        changeTopCalculatorField();
        changeCalculatorField();
    } else if (exponentiationCleared) {
        topCalculatorField.innerHTML = calculatorValueExpo;
        topCalculatorField.innerHTML += '='
        changeTopCalculatorField();
        changeCalculatorField();
        exponentiationCleared = false;

    } else {
    topCalculatorField.innerHTML = combine;
    topCalculatorField.innerHTML += '='
    changeTopCalculatorField();
    changeCalculatorField();
    console.log('a')
    }
    calculatedValue = calculatorField.innerHTML;
    exponentiationCleared = false;
})

let multiplyButton = document.getElementById('multiply');

multiplyButton.addEventListener('click', () => {
    equalsPressed = false;
    if (calculatorField.innerHTML === '') {
        calculatorField.innerHTML = 'Error';
        pos = 100;
        console.log(pos)
        calculatorField.style.left = `${pos}px`;

        return 
    }
    topCalculatorField.innerHTML = calculatorField.innerHTML + '*'
    changeTopCalculatorField()
    cleared = false;

    if (calculatedValue === calculatorField.innerHTML) {
        topPos = 135;
        changeTopCalculatorField();
    }   
})

let minusButton = document.getElementById('minus');

minusButton.addEventListener('click', () => {
    equalsPressed = false;
    if (calculatorField.innerHTML === '') {
        calculatorField.innerHTML = 'Error';
        pos = 100;
        console.log(pos)
        calculatorField.style.left = `${pos}px`;

        return 
    }  

    if (topCalculatorField.innerHTML.includes('+') && calculatorField.innerHTML != '' && !topCalculatorField.innerHTML.includes('=')) {
        topCalculatorField.innerHTML = calculation();
        topCalculatorField.innerHTML += '-'
        calculatorField.innerHTML = ''
        pos = 135;
        calculatorField.style.left = `${pos}px`
    } else if (topCalculatorField.innerHTML.includes('-')) {
        topCalculatorField.innerHTML = calculation();
        topCalculatorField.innerHTML += '-';
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`

    } else {
    topCalculatorField.innerHTML = calculatorField.innerHTML + '-';
    changeTopCalculatorField()
    cleared = false;
    }

    if (calculatedValue === calculatorField.innerHTML) {
        topPos = 135;
        changeTopCalculatorField();
    }
})

let plusButton = document.getElementById('plus');

plusButton.addEventListener('click', () => {
    equalsPressed = false;
    if (calculatorField.innerHTML === '') {
        calculatorField.innerHTML = 'Error';
        pos = 100;
        console.log(pos)
        calculatorField.style.left = `${pos}px`;

        return 
    }

    if (topCalculatorField.innerHTML.includes('+') && !topCalculatorField.innerHTML.includes('=')) {
        topCalculatorField.innerHTML = calculation();
        topCalculatorField.innerHTML += '+';
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`;

    } else if (topCalculatorField.innerHTML.includes('-') && !topCalculatorField.innerHTML.includes('=')) {
        topCalculatorField.innerHTML = calculation();
        topCalculatorField.innerHTML += '+';
        calculatorField.innerHTML = '';
        pos = 135;
        calculatorField.style.left = `${pos}px`;

    } else {
    topCalculatorField.innerHTML = calculatorField.innerHTML + '+';
    changeTopCalculatorField();
    cleared = false; 
    }
    
    if (calculatedValue === calculatorField.innerHTML) {
        topPos = 135;
        changeTopCalculatorField();
    }
    
    
})

squareRoot.addEventListener('click', () => {
    equalsPressed = false;
    if (calculatorField.innerHTML != '') {
        calculatorField.innerHTML = 'Error';
        pos = 100;
        console.log(pos)
        calculatorField.style.left = `${pos}px`;

        return 
    }
    topCalculatorField.innerHTML += '&#8730'

})

exponentiation.addEventListener('click', () => {
    equalsPressed = false;
    if (calculatorField.innerHTML === '') {
        calculatorField.innerHTML = 'Error';
        pos = 100;
        console.log(pos)
        calculatorField.style.left = `${pos}px`;

        return 
    }
    storeExponentiation = calculatorField.innerHTML += '&#x00B2'
    exponentiationCleared = true;

    topCalculatorField.innerHTML = calculatorField.innerHTML;
    calculatorField.innerHTML = calculation()
    topCalculatorField.innerHTML += '='
    pos = 135;
    changeCalculatorField();

    topPos = 135;
    changeTopCalculatorField();
    exponentiationCleared = false;
    
})
