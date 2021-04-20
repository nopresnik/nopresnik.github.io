import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import MobileNav from "./components/Navs/MobileNav";
import Sidebar from "./components/Navs/Sidebar";
import Row from "./components/Row";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import PageContainer from "./pages/PageContainer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Container>
      <Router>
        <MobileNav />
        <Row>
          <Sidebar />
          <PageContainer>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </PageContainer>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
