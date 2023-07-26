import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import css from "./styles/App.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero/>
    </div>
  );
};

export default App;
