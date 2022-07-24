import "./_app.scss";
import { PageWrapper } from "../containers";
import { Header, Footer } from "../components/organisms";
import { Homepage } from "../pages";

function App() {
  return (
    <PageWrapper className="px-0">
      <Header className={"visually-hidden"} />
      <Homepage className="container-xxl h-screen w-full bg-main" />
      <Footer className={"visually-hidden"} />
    </PageWrapper>
  );
}

export default App;
