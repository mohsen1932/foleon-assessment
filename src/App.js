import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import List from "./pages/list";
import NotFound from "./pages/404";
import Detail from "./pages/detail";
import { store } from "./redux/store";
import GlobalStyle from "./styles/global-styles";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <List />
          </Route>
          <Route path="/publication/:id">
            <Detail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
