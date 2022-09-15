import GlobalStyle from "./assets/style/GlobalStyle";
import Header from "./components/Header/Header";

import AppRouter from "./components/AppRouter/AppRouter";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
