import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
0% {
  border-radius: 0px;
  transform: rotate(0deg);
}
50% {
  border-radius: 100px;
  transform: rotate(360deg);
}
100% {  
  border-radius: 0px;
  transform: rotate(0deg);
}
`;

const Emoji = styled.span`
  font-size: 80px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: teal;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😀</Emoji>
      </Box>
      <Emoji>🚀</Emoji>
    </Wrapper>
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

/* 2.4 Animations and Pseudo Selectors
To use animations : import styled, { keyframes } from "styled-components";
Create a const using keyframes : const rotationAnimation = keyframes`CSS Code`;
Place the animation const in the component : const Box = styled.div`animation: ${rotationAnimation} 1s linear infinite;`;

To select a span(or other) element inside a styled-component and also make pseudo selector for that span :
```
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 80px;
    &:hover {
      font-size: 100px;
    }
  }
`;
```

*/

/* 2.5 Pseudo Selectors part Two
To select a component within another component:
```
const Box = styled.div`
  ${Emoji}:hover {
    font-size: 98px;
  }
`;
```
*/
