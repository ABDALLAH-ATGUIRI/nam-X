import { Container } from "@mui/system";
import Card from "../../components/global/UI/Card/Card"
import video from "../../assets/videoplayback.gif"

const kyoto = "https://genesis-cdn.ff.com/faraday-future-ff-91/silver-faraday-future-ff-91-electric-car-exiting-driveway.jpg";
const tenryuJiTemple = "https://genesis-cdn.ff.com/faraday-future-gallery/ff-91/ff-91-gallery5.jpg";
const hakone = "https://genesis-cdn.ff.com/faraday-future-ff-91/silver-faraday-future-ff-91-electric-car-exiting-driveway.jpg";

const info = [{
    subject: "Fruit du partenariat entre Ferrari et la série de jeux vidéo Gran Turismo™, la spectaculaire Vision Gran Turismo est une monoplace futuriste motorisée avec une version plus poussée du moteur V6. Ce même moteur équipe les 296 GTB, 296 GTS et 296 GT3 ainsi que la nouvelle hypercar Ferrari  499P, qui sera présentée au Mans l’année prochaine.",
    title: "FF 91 Futurist Alliance",
    image: hakone

}, {
    subject: "Fruit du partenariat entre Ferrari et la série de jeux vidéo Gran Turismo™, la spectaculaire Vision Gran Turismo est une monoplace futuriste motorisée avec une version plus poussée du moteur V6. Ce même moteur équipe les 296 GTB, 296 GTS et 296 GT3 ainsi que la nouvelle hypercar Ferrari  499P, qui sera présentée au Mans l’année prochaine.",
    title: "FF 91 Futurist Alliance",
    image: tenryuJiTemple

}, {
    subject: "Fruit du partenariat entre Ferrari et la série de jeux vidéo Gran Turismo™, la spectaculaire Vision Gran Turismo est une monoplace futuriste motorisée avec une version plus poussée du moteur V6. Ce même moteur équipe les 296 GTB, 296 GTS et 296 GT3 ainsi que la nouvelle hypercar Ferrari  499P, qui sera présentée au Mans l’année prochaine.",
    title: "FF 91 Futurist Alliance",
    image: video

}, {
    subject: "Fruit du partenariat entre Ferrari et la série de jeux vidéo Gran Turismo™, la spectaculaire Vision Gran Turismo est une monoplace futuriste motorisée avec une version plus poussée du moteur V6. Ce même moteur équipe les 296 GTB, 296 GTS et 296 GT3 ainsi que la nouvelle hypercar Ferrari  499P, qui sera présentée au Mans l’année prochaine.",
    title: "FF 91 Futurist Alliance",
    image: "https://genesis-cdn.ff.com/faraday-future-gallery/ff-91-interior/FINAL_FF91_Interior_Shot11_WIPfixxxxx.jpg"

}, {
    subject: "Fruit du partenariat entre Ferrari et la série de jeux vidéo Gran Turismo™, la spectaculaire Vision Gran Turismo est une monoplace futuriste motorisée avec une version plus poussée du moteur V6. Ce même moteur équipe les 296 GTB, 296 GTS et 296 GT3 ainsi que la nouvelle hypercar Ferrari  499P, qui sera présentée au Mans l’année prochaine.",
    title: "FF 91 Futurist Alliance",
    image: "https://genesis-cdn.ff.com/faraday-future-gallery/ff-91/ff-91-gallery21.jpg"

}, {
    subject: "Fruit du partenariat entre Ferrari et la série de jeux vidéo Gran Turismo™, la spectaculaire Vision Gran Turismo est une monoplace futuriste motorisée avec une version plus poussée du moteur V6. Ce même moteur équipe les 296 GTB, 296 GTS et 296 GT3 ainsi que la nouvelle hypercar Ferrari  499P, qui sera présentée au Mans l’année prochaine.",
    title: "FF 91 Futurist Alliance",
    image: "https://genesis-cdn.ff.com/faraday-future-gallery/ff-91-interior/FF91_PRESTON_010_A.jpg"

}]
const app = () => {
    return (
        <>
            <div className="bg-slate-300">
                <div className="text-3xl flex items-center gap-4 ml-20 font-semibold tracking-tight text-gray-900 dark:text-white py-5">
                    <span className="text-5xl">»</span>
                    <h1 >L'ESPRIT DE NAMX</h1>
                </div>
                <div className=" inline-grid justify-items-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full">
                    {
                        info.map((element) => { return (<Card {...element} />) })
                    }

                </div>
            </div>


        </>

    );
};

export default app;
