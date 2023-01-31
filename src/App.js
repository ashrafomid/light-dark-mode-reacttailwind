import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [themes, setThemes] = useState(
    localStorage.getItem("themes") ? localStorage.getItem("themes") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark )");
  console.log(darkQuery);
  function onWindowMatch() {
    if (
      localStorage.themes === "dark" ||
      (!(themes in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  useEffect(() => {
    switch (themes) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("themes", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("themes", "light");
        break;
      default:
        localStorage.removeItem("themes");
        onWindowMatch();
        break;
    }
  }, [element.classList, themes]);
  return (
    <section className="min-h-screen pt-8 dark:text-white dark:bg-slate-900 duration-100">
      <div className="fixed  top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded ">
        {options.map((opt) => (
          <button
            onClick={() => setThemes(opt.text)}
            key={opt.text}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
              themes === opt.text && "text-sky-600"
            } `}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))}
      </div>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center">
          <h1>Hi and Welcome</h1>
          <h5>Hung on there,</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          molestiae consectetur accusamus autem facere est doloribus quos, quis
          iste eos illum dolor fugit eveniet sunt. Facilis fuga animi fugit
          dignissimos libero natus eum, consequuntur beatae facere saepe odit
          ducimus quaerat est nemo error doloremque officia tenetur distinctio
          a. Recusandae, odio! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis molestiae consectetur accusamus autem
          facere est doloribus quos, quis iste eos illum dolor fugit eveniet
          sunt. Facilis fuga animi fugit dignissimos libero natus eum,
          consequuntur beatae facere saepe odit ducimus quaerat est nemo error
          doloremque officia tenetur distinctio a. Recusandae, odio! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Reiciendis molestiae
          consectetur accusamus autem facere est doloribus quos, quis iste eos
          illum dolor fugit eveniet sunt. Facilis fuga animi fugit dignissimos
          libero natus eum, consequuntur beatae facere saepe odit ducimus
          quaerat est nemo error doloremque officia tenetur distinctio a.
          Recusandae, odio! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reiciendis molestiae consectetur accusamus autem facere est
          doloribus quos, quis iste eos illum dolor fugit eveniet sunt. Facilis
          fuga animi fugit dignissimos libero natus eum, consequuntur beatae
          facere saepe odit ducimus quaerat est nemo error doloremque officia
          tenetur distinctio a. Recusandae, odio! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis molestiae consectetur
          accusamus autem facere est doloribus quos, quis iste eos illum dolor
          fugit eveniet sunt. Facilis fuga animi fugit dignissimos libero natus
          eum, consequuntur beatae facere saepe odit ducimus quaerat est nemo
          error doloremque officia tenetur distinctio a. Recusandae, odio! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          molestiae consectetur accusamus autem facere est doloribus quos, quis
          iste eos illum dolor fugit eveniet sunt. Facilis fuga animi fugit
          dignissimos libero natus eum, consequuntur beatae facere saepe odit
          ducimus quaerat est nemo error doloremque officia tenetur distinctio
          a. Recusandae, odio! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis molestiae consectetur accusamus autem
          facere est doloribus quos, quis iste eos illum dolor fugit eveniet
          sunt. Facilis fuga animi fugit dignissimos libero natus eum,
          consequuntur beatae facere saepe odit ducimus quaerat est nemo error
          doloremque officia tenetur distinctio a. Recusandae, odio! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Reiciendis molestiae
          consectetur accusamus autem facere est doloribus quos, quis iste eos
          illum dolor fugit eveniet sunt. Facilis fuga animi fugit dignissimos
          libero natus eum, consequuntur beatae facere saepe odit ducimus
          quaerat est nemo error doloremque officia tenetur distinctio a.
          Recusandae, odio! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reiciendis molestiae consectetur accusamus autem facere est
          doloribus quos, quis iste eos illum dolor fugit eveniet sunt. Facilis
          fuga animi fugit dignissimos libero natus eum, consequuntur beatae
          facere saepe odit ducimus quaerat est nemo error doloremque officia
          tenetur distinctio a. Recusandae, odio! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis molestiae consectetur
          accusamus autem facere est doloribus quos, quis iste eos illum dolor
          fugit eveniet sunt. Facilis fuga animi fugit dignissimos libero natus
          eum, consequuntur beatae facere saepe odit ducimus quaerat est nemo
          error doloremque officia tenetur distinctio a. Recusandae, odio!
        </p>
      </div>
    </section>
  );
}

export default App;
