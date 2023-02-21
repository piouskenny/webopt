import Logo from "./assets/images/logo.png";
function App() {
  return (
    <div className="text-center  flex justify-center items-center  bg-gradient-to-r from-purple-100 to-white">
      <div>
        <img src={Logo} alt="Logo" />

        <h1 className="text-xl text-purple-500 text-center">
          Increae business Visibility Through Web Optimization
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet fugiat debitis architecto? Similique, cupiditate maxime id excepturi </p>
      </div>
    </div>
  );
}

export default App;
