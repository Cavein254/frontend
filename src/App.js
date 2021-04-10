import {
  HomePage,
  QuestionListPage,
  ProfilePage,
  UsersListPage,
  EditingPage,
  LoginPage,
} from "./pages";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/queries" exact component={QuestionListPage} />
      <Route path="/queries" exact component={QuestionListPage} />
      <Route path="/user" exact component={ProfilePage} />
      <Route path="/users" exact component={UsersListPage} />
      <Route path="/query" exact component={EditingPage} />
      <Route path="/login" exact component={LoginPage} />
    </div>
  );
}

export default App;
