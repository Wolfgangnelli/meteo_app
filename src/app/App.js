import "./_app.scss";
import { PageWrapper } from "../containers";
import { Header, Main, Footer } from "../components/organisms";

function App() {
  return (
    <PageWrapper className="px-0">
      <Header className={"visually-hidden"} />
      <Main className="container-xxl h-screen w-full bg-main" />
      <Footer className={"visually-hidden"} />
    </PageWrapper>
  );
}

export default App;
