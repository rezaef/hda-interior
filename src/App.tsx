import NavigationBarSection from "./components/NavigationBarSection";
import MainContentSection from "./components/MainContentSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="bg-white w-full flex flex-col">
      <NavigationBarSection />
      <MainContentSection />
      <FooterSection />
    </div>
  );
}

export default App;
