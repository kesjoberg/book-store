const {Book} = require('../models')
const sequelize = require('../config/connection');

const bookData = [
    {
        id: 1 ,
        title: 'Fablehaven',
        author: 'Bradon Mull',
        bookCover: '/images/01_fablehaven.jpg',
        description: "For centuries, mystical creatures of all description were gathered to a hidden refuge called Fablehaven to prevent their extinction. The sanctuary survives today as one of the last strongholds of true magic in a cynical world. Enchanting? Absolutely! Exciting? You bet. Safe? Well, actually, quite the opposite. \n Kendra and her brother Seth have no idea that their grandfather is the current caretaker of Fablehaven. Inside the gated woods, ancient laws give relative order among greedy trolls, mischievous satyrs, plotting witches, spiteful imps, and jealous fairies. However, when the rules get broken, an arcane evil is unleashed, forcing Kendra and Seth to face the greatest challenge of their lives. To save her family, Fablehaven, and perhaps the world, Kendra must find the courage to do what she fears most.",
        price: 5.99,
        stock: 13,
    },
    {
        id: 2,
        title: 'Where The Red Fern Grows',
        author: 'Wilson Rawls',
        bookCover: 'tbd',
        description: "Where the Red Fern Grows is a 1961 children's novel by Wilson Rawls about a boy who buys two hunting dogs.",
        price: 5.99,
        stock: 2,
    },
    {
        id: 3,
        title: 'Digital Fortress',
        author: 'Dan Brown',
        bookCover: 'tbd',
        description: "From an electrifying new voice in suspense fiction comes Digital Fortress, a lightning-paced thriller that U.S. intelligence analysts are calling “utterly plausible.” \n Chillingly current and filled with more intelligence secrets than Tom Clancy, Digital Fortress transports the reader deep within the most powerful intelligence organization on earth–the National Security Agency (NSA)–an ultra-secret, multi-billion dollar agency which (until now) less than three percent of Americans knew existed. \n When the NSA’s most classified technological wonder–an invincible code-breaking machine–encounters a mysterious code it cannot break, the agency calls in its head cryptographer, Susan Fletcher, a brilliant and beautiful mathematician. What she uncovers sends shock waves through the corridors of power. \n The NSA is being held hostage… not by guns or bombs, but by a code so ingeniously complex that if released it will cripple U.S. intelligence. \n Caught in an accelerating tempest of secrecy and lies, Susan Fletcher battles to save the agency she believes in. Betrayed on all sides she finds herself fighting not only for her country, but for her life, and in the end, for the life of the man she loves. \n With a startling twist that leaves the agency scrambling to avert the biggest intelligence disaster in U.S. history, Digital Fortress never lets up. From the underground hallways of power, to the skyscrapers of Tokyo, to the towering cathedrals of Spain, a desperate race unfolds. \n It is a battle for survival — a crucial bid to destroy a creation of inconceivable genius… an impregnable code-writing formula that threatens to obliterate the balance of power. Forever.",
        price: 5.99,
        stock: 45,
    },
    {
        id: 4,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        bookCover: 'tbd',
        description: "The Hitchhiker's Guide to the Galaxy is the first of six books in the Hitchhiker's Guide to the Galaxy comedy science fiction hexalogy by Douglas Adams. The novel is an adaptation of the first four parts of Adams's radio series of the same name. The novel was first published in London on 12 October 1979. It sold 250,000 copies in the first three months. \n The namesake of the novel is The Hitchhiker's Guide to the Galaxy, a fictional guide book for hitchhikers (inspired by the Hitch-hiker's Guide to Europe) written in the form of an encyclopaedia.",
        price: 2.99,
        stock: 1,
    },
    {
        id: 5,
        title: 'Mechanical Harry',
        author: 'Bob Kerr',
        bookCover: 'tbd',
        description: "Illustrates the laws of motion which had been formulated by Isaac Newton, the seventeenth-century English scientist." ,
        price: .99,
        stock: 100,
    },
    {
        id: 6,
        title: 'To Kill A Mockingbird',
        author: 'Harper Lee',
        bookCover: 'tbd',
        description: "One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than 40 languages, sold more than 30 million copies worldwide, served as the basis for an enormously popular motion picture, and voted one of the best novels of the 20th century by librarians across the United States. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father -- a crusading local lawyer -- risks everything to defend a black man unjustly accused of a terrible crime. \n Lawyer Atticus Finch defends Tom Robinson -- a black man charged with the rape of a white girl. Writing through the young eyes of Finch's children Scout and Jem, Harper Lee explores with rich humor and unswerving honesty the irrationality of adult attitudes toward race and class in small-town Alabama during the mid-1930s Depression years. The conscience of a town steeped in prejudice, violence, and hypocrisy is pricked by the stamina and quiet heroism of one man's struggle for justice. But the weight of history will only tolerate so much." ,
        price: 3.99,
        stock: 55,
    },
    {
        id: 7,
        title: 'Wasted space',
        author: 'Judie Gulley',
        bookCover: 'tbd',
        description: "Libby enters ninth grade with the awkwardness and nervousness common to her age, determined to fit in, stop befriending the friendless, and be more socially successful." ,
        price: 4.99,
        stock: 33,
    },
    {
        id: 8,
        title: 'Dragonwatch',
        author: 'Bradon Mull',
        bookCover: 'tbd',
        description: "In the long-awaited sequel to Fablehaven, the dragons who have been kept at the dragon sanctuaries no longer consider them safe havens, but prisons and they want their freedom. The dragons are no longer our allies. \n In the hidden dragon sanctuary of Wyrmroost, Celebrant the Just, King of the Dragons, plots his revenge. He has long seen the sanctuaries as prisons, and he wants nothing more than to overthrow his captors and return the world to the Age of Dragons, when he and his kind ruled and reigned without borders. The time has come to break free and reclaim his power. \n No one person is capable of stopping Celebrant and his dragon horde. It will take the ancient order of Dragonwatch to gather again if there is any chance of saving the world from destruction. In ancient times, Dragonwatch was a group of wizards, enchantresses, dragon slayers, and others who originally confined the majority of dragons into sanctuaries. But nearly all of the original Dragonwatch members are gone, and so the wizard Agad reaches out to Grandpa Sorenson for help. \n As Kendra and Seth confront this new danger, they must draw upon all their skills, talents, and knowledge as only they have the ability to function together as a powerful dragon tamer. Together they must battle against forces with superior supernatural powers and breathtaking magical abilities. \n How will the epic dragon showdown end? Will dragons overthrow humans and change the world as we know it?" ,
        price: 100.95,
        stock: 2,
    },
    {
        id: 9,
        title: 'His unforgettable fiancee',
        author: 'Teresa Carpenter',
        bookCover: 'tbd',
        description: "Her million-dollar mystery man. \n Sheriff Grace Delaney's last case is a handsome stranger suffering from amnesia. She agrees to help him uncover his memory, but when his identity is revealed as multimillionaire playboy Jackson Hawke, Grace must swap the safety of her small town for the bright lights of Las Vegas and pretend she's his latest conquest! \n Grace soon finds herself falling, not for the millionaire, but the man she's come to know. But when Jackson's memory returns, will he forget her…or make her dreams a reality?" ,
        price: 9.99,
        stock: 22,
    },
    {
        id: 10,
        title: 'The great American shopping cart',
        author: 'Ada Graham',
        bookCover: 'tbd',
        description: "Describes the extraordinary changes in America's largest industry, food marketing, and how these changes have affected the growing, harvesting, packaging, preserving, and selling of food and the speed with which items now become available to the consumer." ,
        price: 11.11,
        stock: 11,
    },

]; 

const seedDatabase = async (bookjson) => {
    await sequelize.sync({ force: true });
    // for (let i =0; i < bookjson.length; i++){
    //     await book
    // }
    await Book.bulkCreate(bookjson);
  
    process.exit(0);
  };

seedDatabase(bookData);
