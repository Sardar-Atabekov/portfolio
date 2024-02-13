import logo from "./logo.svg";
import "./App.css";
import kega from "./assets/img/kega.png";
import toDo from "./assets/img/to-do.png";
import sbBar from "./assets/img/sbBar.png";
import neobis from "./assets/img/neobis.png";
import navidu from "./assets/img/navidu.png";
import NeoCafe from "./assets/img/NeoCafe.png";
import zigmund from "./assets/img/zigmund.jpg";
import aliDent from "./assets/img/aliDent.png";
import crmCafe from "./assets/img/crm-cafe.jpg";
import miniBlog from "./assets/img/miniBlog.png";
import document from "./assets/img/document.png";
import education from "./assets/img/education.jpg";
import neobisHub from "./assets/img/neobis_hub.png";
import onlineShop from "./assets/img/online-shop.jpg";
import postExpress from "./assets/img/postExpress.png";
import audioPlayer from "./assets/img/audioPlayer.png";
import yogaLanding from "./assets/img/yoga_landing.png";
function App() {
  return (
    <div className="app">
      <main class="portfolio">
        <div class="container">
          <h2 class="section-title">Портфолио</h2>
          {/* <h2>Коммерческие проекты</h2> */}
          <div id="portfolioInner" class="portfolio-inner">
            <div
              href="https://match.zigmund.online/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                {/* <span class="tech-name from-psd" data-teck-name="fromPsd">
                  From Stydi
                </span> */}
                <span class="tech-name react" data-teck-name="html">
                  React
                </span>
                <span class="tech-name redux" data-teck-name="css">
                  Redux
                </span>
                <span class="tech-name type-script" data-teck-name="css">
                  TypeScript
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={zigmund} alt="zigmund" class="card-image" />
              </div>
              <p class="card-name">
                <span>Подбор психолога</span>
              </p>
            </div>
            <div
              href="https://neobis.kg/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                {/* <span class="tech-name from-psd" data-teck-name="fromPsd">
                  From Stydi
                </span> */}
                <span class="tech-name css" data-teck-name="css">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="react">
                  React
                </span>
                <span class="tech-name i18next" data-teck-name="i18next">
                  i18-next
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={neobis} alt="neobis" class="card-image" />
              </div>
              <p class="card-name">
                <span>Корпоративный сайт</span>
              </p>
            </div>
            <div
              href="https://sbbar.kg/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="html">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="css">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={sbBar} alt="neobis" class="card-image" />
              </div>
              <p class="card-name">
                <span>Доставка еды (+Админ панель)</span>
              </p>
            </div>

            <div
              href="https://postexpress.org/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="html">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="css">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={postExpress} alt="postExpress" class="card-image" />
              </div>
              <p class="card-name">
                <span>
                  Логистика грузов
                </span>
              </p>
            </div>

         
            <div
              href="http://hub.neobis.kg/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                {/* <span class="tech-name from-psd" data-teck-name="fromPsd">
                  From Stydi
                </span> */}
                <span class="tech-name css" data-teck-name="css">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="react">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={neobisHub} alt="neobisHub" class="card-image" />
              </div>
              <p class="card-name">
                <span>
                  Сompany accounting ( hubadmin@gmail.com,
                  Superpasswordhub2)
                </span>
              </p>
            </div>
         
            <div class="card-item" data-work-id="605b843eeef00014b0ea18f2">
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="html">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="react">
                  React
                </span>
                <span class="tech-name chart-js" data-teck-name="chart-js">
                  Chart Js
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={crmCafe} alt="postExpress" class="card-image" />
              </div>
              <p class="card-name">
                <span>CRM система для предприятий общественного питания</span>
              </p>
            </div>

            <div class="card-item" data-work-id="605b843eeef00014b0ea18f2">
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="css">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="react">
                  React
                </span>
                <span class="tech-name node-js" data-teck-name="react">
                  Node JS
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={document} alt="postExpress" class="card-image" />
              </div>
              <p class="card-name">
                <span>
                  Электронный документооборот для образовательных учреждений
                </span>
              </p>
            </div>
            <div class="card-item" data-work-id="605b843eeef00014b0ea18f2">
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="css">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="react">
                  React
                </span>
                <span
                  class="tech-name google-maps"
                  data-teck-name="google-maps"
                >
                  Google Maps
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={kega} alt="postExpress" class="card-image" />
              </div>
              <p class="card-name">
                <span>CRM система для транспортной компании </span>
              </p>
            </div>
            <div class="card-item" data-work-id="605b843eeef00014b0ea18f2">
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="css">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="react">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={aliDent} alt="postExpress" class="card-image" />
              </div>
              <p class="card-name">
                <span>CRM система для медицинских центров</span>
              </p>
            </div>
        
            <div class="card-item" data-work-id="605b843eeef00014b0ea18f2">
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="html">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="html">
                  React
                </span>
                <span class="tech-name i18next" data-teck-name="i18next">
                  i18next
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={education} alt="postExpress" class="card-image" />
              </div>
              <p class="card-name">
                <span>Образовательный сайт</span>
              </p>
            </div>
            <div class="card-item" data-work-id="605b843eeef00014b0ea18f2">
              <div class="categories-wrapper">
                <span class="tech-name react" data-teck-name="css">
                  React Native
                </span>
                <span
                  class="tech-name google-maps"
                  data-teck-name="google-maps"
                >
                  Google Maps
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={navidu} alt="postExpress" class="card-image" />
              </div>
              <p class="card-name">
                <span>Мобильное приложение для грузоперевозчиков</span>
              </p>
            </div>

         
            <div
              href="https://boiling-dusk-38246.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="html">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="css">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={NeoCafe} alt="onlineShop" class="card-image" />
              </div>
              <p class="card-name">
                <span>CRM система для управление кофейней</span>
              </p>
            </div>

            <div
              href="https://miniblogsite.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name js" data-teck-name="js">
                  JavaScript
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={miniBlog} alt="onlineShop" class="card-image" />
              </div>
              <p class="card-name">
                <span>Маленький блог</span>
              </p>
            </div>

            <div
              href="https://online-eshop.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name css" data-teck-name="css">
                  CSS
                </span>
                <span class="tech-name react" data-teck-name="css">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={onlineShop} alt="onlineShop" class="card-image" />
              </div>
              <p class="card-name">
                <span>Интернет магазин одежды</span>
              </p>
            </div>
            <div
              href="https://sardar-atabekov.github.io/AudioPlayer/AudioPlayer/index.html"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name react" data-teck-name="css">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={audioPlayer} alt="onlineShop" class="card-image" />
              </div>
              <p class="card-name">
                <span>Аудио плейер</span>
              </p>
            </div>
            <div
              href="https://Sardar-Atabekov.github.io/to-do/"
              target="_blank"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name react" data-teck-name="css">
                  React
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={toDo} alt="onlineShop" class="card-image" />
              </div>
              <p class="card-name">
                <span>Тестовое задания, Список задач</span>
              </p>
            </div>
            <div
              href="https://sardar-atabekov.github.io/yoga-landing/yoga/index.html"
              target="_blank"
              rel="noreferrer"
              rel="noreferrer"
              class="card-item"
              data-work-id="605b843eeef00014b0ea18f2"
            >
              <div class="categories-wrapper">
                <span class="tech-name html" data-teck-name="css">
                  HTML
                </span>
                <span class="tech-name css" data-teck-name="css">
                  CSS
                </span>
                <span class="tech-name js" data-teck-name="css">
                  JavaScript
                </span>
              </div>
              <div class="card-image-overlay">
                <img src={yogaLanding} alt="onlineShop" class="card-image" />
              </div>
              <p class="card-name">
                <span>Yoga Landing</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
