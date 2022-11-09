import { useState } from "react";
const PassGenerator = () => {
  const [output, setOutput] = useState("");

  const[lengthVar, setLengthVar] = useState(0);
  const [checkUpperCase, setCheckUpperCase] = useState(false);
  const [checkLowerCase, setCheckLowerCase] = useState(false);
  const [checkNumbers, setCheckNumbers] = useState(false)
  const [checkSymbols, setCheckSymbols] = useState(false);

  const GeneratePassword = () => {  
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%&*";
    // let finalChar=`${upperCaseChar}${lowerCaseChar}${numbers}${symbols}`
    let finalChar = "";
    let password = "";

    if (checkUpperCase === true) {
      finalChar = finalChar + upperCaseChar;
    }

    if (checkLowerCase === true) {
      finalChar = finalChar + lowerCaseChar;
    }

    if (checkNumbers === true) {
      finalChar = finalChar + numbers;
    }
    if (checkSymbols === true) {
      finalChar = finalChar + symbols;
    }
   

    for (let i = 0; i < lengthVar; i++) {
      let index = Math.floor(Math.random() * finalChar.length);
      password = password + finalChar.charAt(index);
    }
     console.log(password)
     setOutput(password)
 
  };
 
  // console.log(checkLowerCase);
  // console.log(output);

  return (
    <>
    <div className="container">
      <h1 className="pass">Password Generator</h1>
      <input type="text" disabled className="input" value={output} />
   
      <br />

      <select
        onChange={(e) => {
          setLengthVar(e.target.value)
        }}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <br />
       <div className="option">
      <input type="checkbox" onChange={e => setCheckUpperCase(e.target.checked)} checked={checkUpperCase} name="uppercase" />
      <label htmlFor="UpperCase">UpperCase</label>
      <br />
      <input type="checkbox" onChange={(e) => setCheckLowerCase(e.target.checked)} checked={checkLowerCase} name="lowercase" />
      <label htmlFor="LowerCase">LowerCase</label>
      <br />
      <input type="checkbox" onChange={(e) => setCheckNumbers(e.target.checked)} checked={checkNumbers} name="numbers" />

      <label htmlFor="IncludeNumber">Include Number</label>
      <br />
      <input type="checkbox" onChange={(e) => setCheckSymbols(e.target.checked)} checked={checkSymbols} name="symbols" />
      <label htmlFor="IncludeSymbols">Include Symbols</label>
      <br />
      </div>
      <button onClick={GeneratePassword}>Generate Password</button>
      </div>
    </>
  );
};

export default PassGenerator;

  


 