import { Container } from "./components/Container";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ButtonGrid } from "./components/ButtonGrid";
import React,{ useState } from "react";


function App() {
  const initialCalcState={
    display:null,
    num:"0",
    res:null,
    sign:""
  }

  const [calc, setCalc] = useState(initialCalcState);

  const math = (a, b, sign) =>
  sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;

  const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

  const resetClick=(e)=>{
    e.preventDefault();
    setCalc(initialCalcState)
  }

  const numClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (removeSpaces(calc.num).length < 12) {
      setCalc({
        ...calc,
        num:
          removeSpaces(calc.num) % 1 === 0 && !calc.num.toString().includes(".")
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };


  const signClick = (e) => {
    setCalc({
      ...calc,
      sign: e.target.innerHTML,
      res: !calc.num
        ? calc.res
        : !calc.res
        ? calc.num
        : toLocaleString(
            math(
              Number(removeSpaces(calc.res)),
              Number(removeSpaces(calc.num)),
              calc.sign
            )
          ),
      num: 0,
    });
  };

  const equalsClick = () => {
    if (calc.sign && calc.num !==0) {
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClick = () => {
    setCalc({
      ...calc,
      num: calc.num ? parseFloat(calc.num) * -1 : 0,
    
    });
  };



  const btnValues = [
    ["C", "+ -", "+", "-"],
    [7, 8, 9, "X"],
    [4, 5, 6, "/"],
    [1, 2, 3, "="],
    [0, "."],
  ];
  return (
    <Container>
    <Input value={calc.num ? calc.num : calc.res} />
    <ButtonGrid >      
      {
        btnValues.flat().map((btn, i) => {
          return (           
            <Button
              key={i}
              bClass={btn === "=" ? "btn equal" : "btn"}
              symbol={btn}
              onClick={(e) => {
                btn === "C"
                ? resetClick(e) 
                : btn === "+ -" ? invertClick()
                : btn === "=" ? equalsClick() : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                ? signClick(e) : btn === "." ? commaClick(e)
                : numClick(e)
              }}
            />
             
          );
        })
      }
    </ButtonGrid>
  </Container>
  );
}

export default App;
