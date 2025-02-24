import React from "react";
import "./App.css";
import ArticlesSection from "./components/ArticlesSection";
import checkyousoc from "./images/checkyousoc.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import mitre from "./images/mitre.jpg";
import { AttackSimulation } from "./components/AttackSimulation";

const App: React.FC = () => {
  const articles = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text: "Aenean at eros mauris. Nullam sodales ipsum ut erat aliquet egestas. Cras eget auctor ex. Morbi auctor leo at ante condimentum, at pretium nulla eleifend. Suspendisse odio nulla, faucibus eu ligula at, vulputate tincidunt neque. Etiam sagittis laoreet ultricies. Mauris eros nulla, consequat id purus non, mollis volutpat leo. Aliquam non nisi tellus. Duis ut purus venenatis, suscipit nibh sed, bibendum diam. Nullam scelerisque ligula id ex luctus sollicitudin. Praesent egestas enim ut magna scelerisque, non ultrices enim luctus. In ut turpis eget nisl pulvinar malesuada nec in nibh. Proin bibendum quam ac dolor cursus condimentum. Donec molestie hendrerit tellus sit amet lobortis.",
      img: img1,
      imgPosition: "right",
      animationClass: "animate-slide-in-left",
      imgWidth: 35,
      textWidth: 65,
    },
    {
      title: "Proin ac lobortis nunc.",
      text: "Aliquam non tortor quam. Etiam eget mi ut ante fermentum vestibulum elementum id nunc. Cras eleifend, tellus ut pulvinar tincidunt, erat ex feugiat lorem, quis iaculis nulla nulla eu dui. Phasellus augue nulla, lobortis vitae ex a, molestie semper mauris. Aliquam nec ante efficitur, luctus metus sed, pretium metus. Aenean diam ante, faucibus sed malesuada vel, mattis pulvinar enim. Cras viverra posuere fringilla. Fusce aliquam interdum lorem. Donec dignissim tincidunt turpis vel varius. Sed diam enim, auctor in dolor ac, laoreet sagittis orci. In elit quam, suscipit ac lacus ac, luctus convallis dui. Aliquam nec suscipit magna, at faucibus sapien. Sed blandit lorem sem, id convallis felis condimentum id. Curabitur eu placerat magna, a sodales nisl.",
      img: img2,
      imgPosition: "left",
      animationClass: "animate-slide-in-right",
      imgWidth: 35,
      textWidth: 65,
    },
    {
      title:
        "In aliquam felis a risus auctor, sit amet feugiat ipsum consectetur.",
      text: "Maecenas tempus bibendum tellus a lacinia. Vivamus nec porttitor leo, ac pulvinar turpis. Phasellus nunc dui, pharetra in quam eu, sagittis condimentum tortor. Etiam semper, quam id suscipit sollicitudin, turpis leo fringilla risus, et consequat purus lorem quis nisi. In congue dolor maximus nisl suscipit, non accumsan ligula pellentesque. Fusce ac diam sed libero cursus dapibus. Maecenas pharetra dui sit amet accumsan consectetur. Morbi pharetra lectus sit amet leo pulvinar, eu interdum lorem lacinia. Aliquam sem orci, euismod quis odio eget, pellentesque ullamcorper lectus. Aenean vulputate enim non enim egestas pulvinar. Nullam aliquam velit nec urna consectetur lacinia. Vivamus eu iaculis tortor, sed ornare turpis. In at nisl dolor.",
      img: mitre,
      imgPosition: "left",
      animationClass: "animate-scaleUp",
      imgWidth: 50,
      textWidth: 50,
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-300">
      <header className="w-screen h-14 flex pr-12 pl-12 justify-between">
        <img alt="checkyousoc" src={checkyousoc} />
        <div className="flex gap-3">
          <button>Регистрация</button>
          <button>Вход</button>
        </div>
      </header>
      <main>
        <div className="text-center mb-12 px-20 py-8">
          <h1 className="text-6xl mb-3">Lorem Ipsum</h1>
          <p className="text-xs">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur..."
          </p>
        </div>
        <ArticlesSection articles={articles} />
      </main>
      <footer className="h-screen">
        <div className="relative w-full overflow-hidden iframe-container">
          <iframe
            title="threatmap"
            src="https://threatmap.fortiguard.com"
            className="relative -top-[55px] w-full border-none"
          ></iframe>
        </div>
      </footer>
      <AttackSimulation />
    </div>
  );
};

export default App;
