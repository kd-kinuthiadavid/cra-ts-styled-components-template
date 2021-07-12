import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";

const StyledApp = styled.div`
  color: ${props => props.theme.colors.secondary};
  background-color: black;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <StyledApp className="App">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus est voluptatum quasi quos, illo sequi reiciendis obcaecati commodi nisi, minima nihil voluptas nemo voluptatem distinctio ab maiores deleniti modi tempora.
        Eum velit nam accusantium voluptate! Ea laudantium tempora at ducimus! Porro, odio alias libero nostrum vero quo. Facilis porro fugit culpa laudantium doloribus molestias ex, iusto a minima maxime tempora!
        Sed, nam at, nemo harum deserunt corrupti nihil natus perferendis saepe fugit aperiam cum culpa, pariatur atque. Quo ut laborum qui possimus optio iusto illum veritatis quos, natus sunt nostrum?
        Laboriosam a nam corporis ullam asperiores vel dicta expedita laborum nostrum, dolores nemo deleniti ut fugit voluptatum quo nesciunt minus quae non rerum architecto, quas voluptatem beatae possimus! Consequuntur, at!
        Quod officiis cupiditate doloribus qui eos maiores nobis nam consectetur optio labore, perspiciatis voluptas. Consequuntur recusanvoluptas culpa facilis cum at quis qui.
        Laboriosam temporibus aspernatur earum, nemo debitis corrupti? Exercitationem laudantium soluta dignissimos magnam eveniet quis a unde laborum aliquam? Voluptatem eligendi voluptatum amet dolorem! Maxime rem, inventore doloremque aut iste perferendis!
        Fugit unde quidem rerum fuga enim maxime corporis adipisci! Aspernatur ab perspiciatis laboriosam nihil sint veritatis temporibus vel similique quae officiis qui at obcaecati, architecto ipsa quidem repudiandae cupiditate error.
        Repudiandae ratione, enim minus quidem quam recusandae soluta iure deserunt ipsum explicabo nemo quibusdam sunt delectus suscipit. Nulla voluptates impedit natus, tempora molestias aspernatur doloribus beatae expedita. Adipisci, sunt quibusdam.
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
