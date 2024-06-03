import getGameData from "./lib/getGameData";
import Hero from "./components/Hero";
import PrimaryButton from "./components/PrimaryButton";

export default async function NotFound() {
    const gameData = await getGameData();

    return (
        <>
            <Hero content={{ title: gameData.notFound.hero.title }} />    
            <div className="flex justify-center mb-32">
                <PrimaryButton content={{ href: gameData.notFound.cta.href, target: gameData.notFound.cta.target, title: gameData.notFound.cta.title, classes: "text-2xl px-12 py-3 bg-black text-white hover:bg-white hover:text-black" }} />
            </div>
        </>
    );
}
