import getGameData from "../lib/getGameData";
import CharacterCard from "../components/CharacterCard";
import Hero from "../components/Hero";

interface CharacterContent {
    id: number;
    name: string;
    description: string;
    attack: number;
    defense: number;
    hitpoints: number;
    magicpoints: number;
    route: string;
}

export default async function Play() {
    const gameData = await getGameData();
    return (
        <>
            <Hero content={{ title: gameData.play[0].title }} />
            <section id="character-select" className="grid md:grid-cols-3 gap-10">
                {gameData.characters.map((character: CharacterContent) => {
                    return (
                        <CharacterCard
                            key={character.id}
                            content={{
                                id: character.id,
                                name: character.name,
                                description: character.description,
                                attack: character.attack,
                                defense: character.defense,
                                hitpoints: character.hitpoints,
                                magicpoints: character.magicpoints,
                                route: character.route
                            }}
                        />
                    );
                })}
            </section>
        </>
    );
}
