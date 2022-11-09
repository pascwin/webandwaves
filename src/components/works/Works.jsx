import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./works.scss";
import "./works.css";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/foodapp.png",
      title: "Food App",
      desc:
        "A reactjs application where you can add food to your cart and order it.",
      desc2: "Implemented with Context Api for state management, a firebase database to manage the orders and sass for styling.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      link: "https://fastidious-toffee-10ecfd.netlify.app",
      github: "https://github.com/pascwin/MealsToGo",
    },
    {
      id: "2",
      icon: "./assets/shoppingapp.png",
      title: "Shopping App",
      desc:
        "A react.tsx application where you can shop clothes and order them",
      desc2: "Implemented with Context Api for state management, a firebase database to manage orders and authentication and sass for styling.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      link: "https://keen-faun-94146d.netlify.app",
      github: "https://github.com/pascwin/clothing-store",
    },
    {
      id: "3",
      icon: "./assets/moneyapp.png",
      title: "Money App",
      desc:
        "An app where you can manage all your expenses. Perfect when you want to save some money :)",
      desc2: "Implemented with Context Api for state management, a firebase database to manage expenses + authentication and module.css for styling.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      link: "https://illustrious-marzipan-4d47e0.netlify.app",
      github: "https://github.com/pascwin/my-money-tracker/tree/main/my-money",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="wavecover">
      <div className="projects" id="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="text-container">
                    <h1 className="header">{d.title}</h1>
                    <p className="text">{d.desc}</p>
                    <p className="text">{d.desc2}</p>
                    <a href={d.github}><GitHubIcon fontSize="large" /></a>
                  </div>
                </div>
                <div className="right">
                  <a href={d.link}>
                    <img src={d.icon} alt={d.icon} />
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
        <div className="footer-container">
          <p className="footer">© webandwaves</p>
        </div>
      </div>
    </div>
  );
}
