import Collection from "../components/Collection/Collection";
import DummyTwo from "../components/DummyTwo/DummyTwo";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Collection />
      <DummyTwo />
    </div>
  );
};

export default Home;
