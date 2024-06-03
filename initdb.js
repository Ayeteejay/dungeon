const sql = require('better-sqlite3');
const db = sql('game.db');

const gameData = {
    header: {
        cta: {
            title: "Play Now",
            href: "/play",
            target: "",
        }
    },
    home: {
        cta: {
            title: "Play Now",
            href: "/play",
            target: "",
        }
    },
    play: {
        hero: {
            title: "Select your character.",
        },
        characters: [
            {
                name: "Warrior",
                description: "Standard tank character with high defense and attack power. Barge head first into battle.",
                route: "/play/warrior",
                attack: 10,
                defense: 10,
                hitpoints: 50,
                magicpoints: 5,
            },
            {
                name: "Sorcerer",
                description: "Spellcaster. Trades lower defense and attack power for greater list of spells.",
                route: "/play/sorcerer",
                attack: 5,
                defense: 5,
                hitpoints: 25,
                magicpoints: 25,
            },
            {
                name: "Rogue",
                description: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
                route: "/play/rogue",
                attack: 7,
                defense: 7,
                hitpoints: 30,
                magicpoints: 15,
            },
        ]
    },
    adventure:[
        {
            room:"Entrance",
            commands:[
                "straight", "left", "right","look",
            ]
        },
        {
            room:"Armory",
            commands:[
                "left","straight","look",
            ]
        }
    ],
    not_found: {
        hero: {
            title: "You've reached an empty chamber. Better head back.",
        },
        cta: {
            title: "Return to the beginning.",
            href: "/",
            target: "",
        }
    },
};

db.prepare(`
    CREATE TABLE IF NOT EXISTS header (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        href TEXT NOT NULL,
        target TEXT NOT NULL
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS home (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        href TEXT NOT NULL,
        target TEXT NOT NULL
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS play (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        route TEXT NOT NULL,
        attack INTEGER NOT NULL,
        defense INTEGER NOT NULL,
        hitpoints INTEGER NOT NULL,
        magicpoints INTEGER NOT NULL
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS not_found (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        section TEXT NOT NULL,
        title TEXT NOT NULL,
        href TEXT,
        target TEXT
    )
`).run();

async function initData() {    
    const headerCount = db.prepare('SELECT COUNT(*) AS count FROM header').get().count;
    const homeCount = db.prepare('SELECT COUNT(*) AS count FROM home').get().count;
    const playCount = db.prepare('SELECT COUNT(*) AS count FROM play').get().count;
    const notFoundCount = db.prepare('SELECT COUNT(*) AS count FROM not_found').get().count;
    
    if (headerCount === 0) {
        const headerStmt = db.prepare(`
            INSERT INTO header (title, href, target) VALUES (
                @title,
                @href,
                @target
            )
        `);
        headerStmt.run(gameData.header.cta);
    }

    if (homeCount === 0) {
        const homeStmt = db.prepare(`
            INSERT INTO home (title, href, target) VALUES (
                @title,
                @href,
                @target
            )
        `);
        homeStmt.run(gameData.home.cta);
    }
    
    if (playCount === 0) {
        const playStmt = db.prepare(`
            INSERT INTO play (title) VALUES (
                @title
            )
        `);
        playStmt.run(gameData.play.hero);        
        const characterStmt = db.prepare(`
            INSERT INTO characters (name, description, route, attack, defense, hitpoints, magicpoints) VALUES (
                @name,
                @description,
                @route,
                @attack,
                @defense,
                @hitpoints,
                @magicpoints
            )
        `);
        for (const character of gameData.play.characters) {
            characterStmt.run(character);
        }
    }

    if (notFoundCount === 0) {
        const notFoundStmt = db.prepare(`
            INSERT INTO not_found (section, title, href, target) VALUES (
                @section,
                @title,
                @href,
                @target
            )
        `);
        notFoundStmt.run({
            section: 'hero',
            title: gameData.not_found.hero.title,
            href: null,
            target: null
        });
        notFoundStmt.run({
            section: 'cta',
            title: gameData.not_found.cta.title,
            href: gameData.not_found.cta.href,
            target: gameData.not_found.cta.target
        });
    }
}

initData();
