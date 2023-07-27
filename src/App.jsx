import Experties from "./Components/Experties/Experties";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Works from "./Components/Works/Works";
import css from "./styles/App.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero/>
      <Experties/>
      <Works/>
    </div>
  );
};

export default App;
