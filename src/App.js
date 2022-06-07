import { Container } from "./components/Container";
import { Display } from "./components/Display";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ButtonGrid } from "./components/ButtonGrid";

function App() {

  const btnValues = [
    ["C", "CE", "+", "-"],
    [7, 8, 9, "X"],
    [4, 5, 6, "/"],
    [1, 2, 3, "="],
    [0, ".", "%"],
  ];
  return (
    <Container>
    <Display disValue={0} />
    <Input inValue={0} />
    <ButtonGrid >      
      {
        btnValues.flat().map((btn, i) => {
          console.log(btn, i)
          return (
           
            <Button
              key={i}
              bClass={btn === "=" ? "btn equal" : "btn"}
              symbol={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
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
