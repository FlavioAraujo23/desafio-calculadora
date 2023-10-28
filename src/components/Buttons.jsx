import { useState } from "react"
import styled from 'styled-components';

const CalculadoraContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Calculadora = styled.section`
  background-color: black;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  
`;

const Display = styled.div`
  font-size: 24px;
  margin: 10px 0;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: right;
  color: white
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  margin: 5px;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Buttons() {
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
        setResultado(eval(operacao).toString());
    } else if (value === 'C') {
      setOperacao('');
      setResultado('');
    } else {
      setOperacao(operacao + value);
    }
  };

  return (
    <CalculadoraContainer>
      <Calculadora>
        <Display>
          {resultado ? resultado : operacao || '0'}
        </Display>
        <div>
          <Button onClick={() => handleButtonClick('7')}>7</Button>
          <Button onClick={() => handleButtonClick('8')}>8</Button>
          <Button onClick={() => handleButtonClick('9')}>9</Button>
          <Button onClick={() => handleButtonClick('+')}>+</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick('4')}>4</Button>
          <Button onClick={() => handleButtonClick('5')}>5</Button>
          <Button onClick={() => handleButtonClick('6')}>6</Button>
          <Button onClick={() => handleButtonClick('-')}>-</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick('1')}>1</Button>
          <Button onClick={() => handleButtonClick('2')}>2</Button>
          <Button onClick={() => handleButtonClick('3')}>3</Button>
          <Button onClick={() => handleButtonClick('*')}>*</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick('C')}>C</Button>
          <Button onClick={() => handleButtonClick('0')}>0</Button>
          <Button onClick={() => handleButtonClick('=')}>=</Button>
          <Button onClick={() => handleButtonClick('/')}>/</Button>
        </div>
      </Calculadora>
    </CalculadoraContainer>
  );
}

export default Buttons;