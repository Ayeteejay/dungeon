const sql = require('better-sqlite3');

const db = sql('game.db');

export default async function getGameData() {
    const header = db.prepare('SELECT * FROM header').all();
    const home = db.prepare('SELECT * FROM home').all();
    const play = db.prepare('SELECT * FROM play').all();
    const characters = db.prepare('SELECT * FROM characters').all();
    const notFound = db.prepare('SELECT * FROM not_found').all();

    return {
        header,
        home,
        play,
        characters,
        notFound: {
            hero: notFound.find((item: { section: string; }) => item.section === 'hero'),
            cta: notFound.find((item: { section: string; }) => item.section === 'cta')
        }
    };
}
