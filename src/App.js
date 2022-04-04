import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minlength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Btn as="a">Log in</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
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

/* 2.3 'As' and Attrs
When we want to change the html tag, we can give
prop "as" to the component to simply change the html tag;
  <Btn as="a">Log in</Btn>

You can also set HTML attributes from styled-components;
  const Input = styled.input.attrs({ required: true })``;
*/
