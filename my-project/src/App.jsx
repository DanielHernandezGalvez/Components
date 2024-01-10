import viteLogo from '/vite.svg'
import './App.css'
import Calendario from "./components/calendar/calendario"
import Navbar from "./components/Navbar"
import Taller from './components/Taller'
import TallerLeft from './components/TallerLeft'
import Carousel from "./components/Carousel"
import inscripcion from "./assets/images/inscription.png";
import leerMas from "./assets/images/leer-mas.png";
import comoFunciona from "./assets/images/imagenes-08.png";
import imagenes9 from "./assets/images/imagenes-09.png";
import imagenes10 from "./assets/images/imagenes-10.png";
import imagenes11 from "./assets/images/imagenes-11.png";
import imagenes12 from "./assets/images/imagenes-12.png";
import silver from "./assets/images/silver.png"
import gold from "./assets/images/gold.png"
import vip from "./assets/images/vip.png"
import fundador from "./assets/images/fundador.png"
import fundadora from "./assets/images/fundadora.png"
import mailRound from "./assets/icons/mail-round.png"
import whatsRound from "./assets/icons/whats-round.png"
import ubicacion from "./assets/icons/map-round.png"
import insta from "./assets/icons/instagram.png"
import youtube from "./assets/icons/youtube.png"
import facebook from "./assets/icons/facebook.png"
import terminos from "./assets/pdf/terminos-de-uso.pdf"
import privacidad from "./assets/pdf/aviso-de-privacidad.pdf"
import politicas from "./assets/pdf/politicas-de-cancelacion.pdf"

function App() {

  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][month - 1];


  return (
    <>
      <Navbar />
      <main class="bg-[--yellow]">
        <section class="hero">
          <div
            class="w-50 bg-beige-1 text-center pt-16 pb-8 px-16 relative top-60 max-w-[70vw] mx-auto"
          >
            <span class="bg-[--beige] px-16 py-2 text-3xl text-[--gray] monserrat"
            >ACEITUNA</span
            >
            <p class="text-[--brown] mt-10">
              Somos una plataforma dedicada a elevar la experiencia de los adultos
              con base a actividades de diferentes intereses y así empoderar su vida
              y hacer una comunidad de personas afines a sus intereses.
            </p>
            <br />
            <p class="text-[--gray] pb-5">
              “Nunca es tarde para salir de su rutina, se puede vivir una segunda
              juventud, los hijos se van y estamos libres de ataduras lo cual nos
              permite vivir de nuevo experiencias enriquecedoras.” <br
              />Jean-Christophe Jaunait
            </p>
          </div>
        </section>
        <section class="hero1"></section>


        <section class="w-full bg-[--beige-clear] p-10">
          <div class="mx-auto pb-5">
            <h2 class="text-[--brown] text-4xl text-center">
              BENEFICIOS DE ESTA R EN ACEITUNA
            </h2>
            <div class="flex justify-center gap-10 flex-wrap mt-10" id="boxes">
              <div class="flex justify-center items-center text-3xl">
                Conocimiento
              </div>
              <div class="flex justify-center items-center text-3xl">Comunidad</div>
              <div class="flex justify-center items-center text-3xl">Bienestar</div>
            </div>
          </div>
        </section>

        <section class="flex justify-center py-20">
          <a href="">
            <img src={inscripcion} class="w-[500px]" alt="" />
          </a>
        </section>

        <section class="flex justify-between bg-[--beige-clear]">
          <div class="py-20 ps-10">
            <span
              class="bg-[--beige] text-[--brown] monserrat font-medium text-4xl p-4"
            >¿Cómo funciona?</span
            >
            <p class="mt-10 mb-10 text-[--brown] text-xl">
              Tenemos varías formas por las cuales pueden contactarnos y te <br />
              apoyaremos desde la que sea de tu elección, conócelas <br /> más adelante...
            </p>
            <a class="mt-10" href=""
            ><img src={leerMas} class="w-[15vw]" alt="" /></a
            >
          </div>
          <div class="">
            <img
              src={comoFunciona}
              class="w-[40vw] h-[60vh] object-cover"
              alt=""
            />
          </div>
        </section>

        <section id="talleres" class="bg-[--beige] pb-20">
          <h2 class="text-[--brown] text-5xl text-center pt-16">
            TALLERES QUE OFRECEMOS
          </h2>
          <p
            class="text-[--brown] text-2xl text-center text-medium mb-10 monserrat"
          >
            Consulta el calendario de actividades
          </p>

          <Taller
            imageSrc={imagenes9}
            title="Ver"
            textItems={["Club de cine"]}
          />
          <TallerLeft
            title="Sentir"
            imageSrc={imagenes10}
            textItems={[
              "Pilates & barre baja intensidad",
              "Power",
              "Ejercicios Funcionales",
              "Defensa personal",
              "Yoga",
            ]}
          />
          <Taller
            imageSrc={imagenes11}
            title="Conocer"
            textItems={[
              "Tertulias de filosofia",
              "Desarrollo & bien estar personal",
            ]}
          />
          <TallerLeft
            title="Aprender"
            imageSrc={imagenes12}
            textItems={[
              "Pintura",
              "Catas de vino",
              "Estilo personal para damas & caballeros",
              "Feng shui",
              "Defensa personal",
              "Finanzas personales",
              "Historia",
              "Historia del arte",
            ]}
          />
        </section>

        <section class="pb-20">
          <h2 class="text-4xl text-[--brown] text-center pt-16">SUSCRIPCIONES</h2>
          <div class="flex justify-center flex-wrap gap-20 mt-10">
            <img src={silver} class="w-[40vw] h-auto" alt="" />
            <img src={gold} class="w-[40vw] h-auto" alt="" />
            <img src={vip} class="w-[40vw] h-auto" alt="" />
          </div>
        </section>

        <section class="bg-fundadores pb-16">
          <h2 class="text-4xl text-[--brown] text-center pt-16 pb-16">
            FUNDADORES
          </h2>
          <div class="flex justify-around items-center h-full flex-wrap">
            <img src={fundador} class="w-[30vw]" alt="" />
            <img src={fundadora} class="w-[30vw]" alt="" />
          </div>
        </section>

        <Carousel />

        <section class="bg-[--beige] pb-16">
          <h4 class="text-4xl text-[--brown] text-center pt-16 pb-16">
            CALENDARIO DE TALLERES
          </h4>
          <h3 class="text-3xl text-[--brown] text-center ">{monthName}/{year}</h3>
          <Calendario />
        </section>

        <div class="w-full h-16"></div>

        <section class="bg-[--beige] pb-16">
          <h4 class="text-4xl text-[--brown] text-center pt-16 pb-16">CONTACTO</h4>
          <form class="flex justify-center items-center gap-5" action="path/to/sendMail.php" method="POST">
            <input
              class="border-none w-[300px] py-4 ps-5 monserrat text-sm"
              type="text"
              placeholder="NOMBRE COMPLETO"
              name="nombre"
            />
            <input
              class="border-none w-[300px] py-4 ps-5 monserrat text-sm"
              type="email"
              placeholder="CORREO"
              name="correo"
            />
            <input
              class="w-[300px] bg-[--brown] py-3 monserrat"
              type="submit"
              title="CONTÁCTANOS"
              value="CONTÁCTANOS"
            />
          </form>

          <div class="flex justify-center gap-x-10 mt-16">
            <a
              class="transition hover:scale-110"
              href="https://www.instagram.com/aceitunaexperience?fbclid=IwAR3c9t6cBUB4XIWyC-kTT8xa3Vo81tv8nbt2JJdmpz1qmFz34UizYX6eIeE"
              target="_blank"
            ><img src={insta} alt="instagram" /></a
            >
            <a class="transition hover:scale-110" href="">
              <img src={youtube} alt="youtube" /></a
            >
            <a
              class="transition hover:scale-110"
              href="https://www.facebook.com/profile.php?id=61554323523242"
              target="_blank"><img src={facebook} alt="facebook" /></a
            >
          </div>

          <div
            class="mt-10 flex justify-center mx-auto gap-y-5 items-center flex-col max-w-[500px]"
          >

            <div class="flex justify-center text-[--brown] monserrat font-bold">
              <div class="flex flex-col text-[--brown] monserrat font-bold">
                <img src={mailRound} width={35} class="me-4 mb-4" alt="correo" />
                <img src={whatsRound} width={35} class="me-4" alt="whatsapp" />
                <img
                  class="me-4 mt-4"
                  src={ubicacion}
                  alt="ubicacion"
                  width={35}
                />
              </div>

              <div
                class="flex text-start justify-start text-base text-[--brown] pt-1.5 monserrat font-bold"
              >
                contacto@aceitunaexperience.com <br /><br />
                +52 33 1302 2587 <br />
                <br />
                Rubens 5273, colonia Real Vallarta, <br />
                45020 Zapopan
              </div>
              <div
                class="flex justify-center items-center text-[--brown] monserrat font-bold"
              >
              </div>
            </div>
          </div>
        </section>

        <footer
          class="text-center flex flex-col monserrat text-base gap-y-3 text-[--brown] font-medium py-10"
        >
          <a href={terminos} target="_blank">TÉRMINOS DE USO</a>
          <a href={privacidad} target="_blank">AVISO DE PRIVACIDAD</a>
          <a href={politicas} target="_blank">POLÍTICAS DE CANCELACIÓN</a>
        </footer>

      </main>
    </>
  )
}

export default App
