import "./_app.scss";
import { PageWrapper } from "../containers";
import { Header, Main, Footer } from "../components/organisms";

function App() {
  return (
    <PageWrapper>
      <Header />
      <Main className="container-xxl h-screen w-full" />
      <Footer />
    </PageWrapper>
  );
}

export default App;
