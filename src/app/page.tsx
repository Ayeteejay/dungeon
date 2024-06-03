import getGameData from "./lib/getGameData";
import HomeAnimation from "./components/HomeAnimation";
import Star from "./components/Star";

export default async function Home(){  
  const gameData = await getGameData();  
  return (    
    <section id="hero" className='pt-10 md:pt-28 md:pb-8'>
      <div className="relative flex justify-center mb-16">
        <Star/>
      </div>
      <HomeAnimation content={{title:gameData.home[0].title,target:gameData.home[0].target,href:gameData.home[0].href}}/>
    </section>    
  )
}