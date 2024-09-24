import imgAfricanLion from './media/images/mke-zoo-african-lion-hyena.jpg';
import imgAmurTiger from './media/images/mke-zoo-amur-tiger.jpg';
import imgHumboldtPenguins from './media/images/mke-zoo-humboldt-penguins.jpg';
// import imgHyenas from './media/images/mke-zoo-hyenas.png';
import imgJaguar from './media/images/mke-zoo-jaguar.jpg';
import imgLakeWisconsin from './media/images/mke-zoo-lake-wisconsin.jpg';
import imgOrangutans from './media/images/mke-zoo-orangutans.jpg';
// import imgSeals from './media/images/mke-zoo-seal.jpg';
import imgBearSeal from './media/images/mke-zoo-bear-seal.jpg';


export const streams = [
    {
        id: 1,
        slug: 'african-lion-hyena',
        name: 'African Lions/Hyenas',
        description: `Watch them roam or see them snooze. Get your big cat fix with African lions Patty, Amira and Eloise. This camera also features the Zoo’s hyenas, so keep an eye out for Scruffy and Nyota. `,
        image: imgAfricanLion,
        streamUrl: 'g73dkuvm',
        status: 'live',
        themeColor: '#089882',
        bg: "-70px"
    },
    {
        id: 2,
        slug: 'amur-tiger',
        name: 'Amur Tiger',
        description: `Amur tigers are the biggest of all the big cats. Despite their size, they’re also some of nature’s most elusive predators. You may catch a glimpse of either Tula or Kash throughout the day. `,
        image: imgAmurTiger,
        streamUrl: 'bn5ta0c2',
        status: 'live',
        themeColor: '#709239',
        bg: '-80px'
    },
    //{
    //    id: 3,
    //    slug: 'humboldt-penguin',
    //    name: 'Humboldt Penguins',
    //    description: `Diving, splashing and waddling around, Humboldt penguins provide endless entertainment. Tune in mid-morning and mid-afternoon for a chance to watch one of their daily feedings.  `,
    //    image: imgHumboldtPenguins,
    //    streamUrl: 'j8tpt8et',
    //    status: 'live',
    //    themeColor: '#495c86'
    //},
    {
        id: 5,
        slug: 'jaguar',
        name: 'Jaguars',
        namebtn1:'Jaguars Outdoor',
        namebtn2: 'Jaguars Indoor',
        description: `Though Jaguars are just the third biggest wild cat species, they’re the biggest cats native to the Americas. See male jaguar, Francisco, enjoying his habitat in the Florence Mila Borchert Big Cat Country.`,
        image: imgJaguar,
        status: 'live',
        streamUrl: 'kerk35wt',
        stream2Url: 'm3imcz6w',
        themeColor: '#c7181e'
    },
    {
        id: 6,
        slug: 'lake-wisconsin',
        name: 'Lake Wisconsin',
        description: `160 species of freshwater fish reside in Wisconsin lakes and rivers. Many of these can be found in the Aquatic & Reptile Center’s Lake Wisconsin. Check out this live camera to see which fish swim by.   `,
        image: imgLakeWisconsin,
        streamUrl: 'npgrej2b',
        status: 'live',
        themeColor: '#844070',
        bg: '-70px'
    },
    {
        id: 7,
        slug: 'orangutans',
        name: 'Orangutans',
        description: `The Milwaukee Zoo is home to two orangutans, Tommy and Alex. Both enjoy eating veggies and fruit, playing with craft paper and taking afternoon naps. Tune in to see what they’re up to today`,
        image: imgOrangutans,
        streamUrl: 'pxd2c11u',
        status: 'live',
        themeColor: '#9e700d'
    }
    ,
    {
        id: 8,
        slug: 'harbor-seals-grizzly-bear',
        name: 'Harbor Seals/Grizzly Bear',
        description: `Watch as the seals swim in their pool and pop up for a quick breath or training session. Guests can see them throughout the year because their thick layer of blubber keeps them warm in the winter. Observe the powerful Grizzly Bears as they roam their habitat, foraging and playing in the water. Thanks to their dense fur and ability to slow their metabolism, they thrive in colder weather.`,
        image: imgBearSeal,
        streamUrl: 'lcdry4k0',
        status: 'live',
        themeColor: '#336699'
    }
];
