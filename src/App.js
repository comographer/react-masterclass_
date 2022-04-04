import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.h1`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato"></Box>
      <Circle bgColor="brown"></Circle>
    </Father>
  );
}

export default App;

/* 2.1 Our First Styled Component
npm i styled-components;

  const Component = styled.tagName`
    ***CSS CODE***
  `;
*/

/* 2.2 Adapting and Extending
Adapting : styled-components can receive props from components;
  background-color: ${(props) => props.bgColor};
  
  <Box bgColor="tomato"></Box>

Extending : we can extend an existing component and add new properties;

  const Circle = styled(Box)`
    border-radius: 50%;
  `;

*/
