import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;

/* 3.0 Typescript Introduction
Typescript is a Javascript based strongly-typed programming language;
It provides protection for developers by helping devs assign data types in their code;

```Typescript
const plus = (a:number, b:number) => a + b;
```
*/

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

/* 2.7 Themes
Themes and Local Estate Management combined is used to create Dark Mode;
Themes is basically where you save all your colors in an object;

In index.js, we import { ThemeProvider } from "styled-components";
We assign two objects, one for darkTheme and another for lightTheme;
Within these objects, we assign colors for every component we need;
We wrap the <App /> component with <ThemeProvider>

```index.js
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

In App.js, we assign colors using ${(props) => props.theme.themeObjectKey}

```App.js
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}
```
*/
