import imgAfricanLion from './media/images/mke-zoo-african-lion.png';
import imgAmurTiger from './media/images/mke-zoo-amur-tiger.png';
import imgHumboldtPenguins from './media/images/mke-zoo-humboldt-penguins.png';
import imgHyenas from './media/images/mke-zoo-hyenas.png';
import imgJaguar from './media/images/mke-zoo-jaguar.png';
import imgLakeWisconsin from './media/images/mke-zoo-lake-wisconsin.png';
import imgOrangutans from './media/images/mke-zoo-orangutans.png';
import imgPolarBear from './media/images/mke-zoo-polar-bear.png';

const commonDesc = 'The Zoo’s many snow-loving animals such as the snow leopards, polar bear, Snow Lilly, as well as the caribou and elk herds are most active during the colder temperatures.';

export const streams = [
  {
    id: 1,
    slug: 'african-lion',
    name: 'African Lion',
    description: commonDesc,
    image: imgAfricanLion,
    streamUrl: 'https://www.youtube.com/embed/kgkB57FG71U',
    status: 'live',
    themeColor: '#089882'
  },
  { id: 2, slug: 'amur-tiger', name: 'Amur Tiger', description: commonDesc, image: imgAmurTiger, streamUrl: 'https://www.youtube.com/embed/h2luGHyKcOc', status: 'live', themeColor: '#709239' },
  { id: 3, slug: 'humboldt-penguin', name: 'Humboldt Penguins', description: commonDesc, image: imgHumboldtPenguins, streamUrl: 'https://www.youtube.com/embed/i3sRj3Ya4nk', status: 'live', themeColor: '#495c86' },
  { id: 4, slug: 'hyenas', name: 'Hyenas', description: commonDesc, image: imgHyenas, streamUrl: 'https://www.youtube.com/embed/kgkB57FG71U', status: 'live', themeColor: '#006f66' },
  { id: 5, slug: 'jaguar', name: 'Jaguars', description: commonDesc, image: imgJaguar, streamUrl: 'https://www.youtube.com/embed/bF8Nc3ukP_0', status: 'live', themeColor: '#c7181e' },
  { id: 6, slug: 'lake-wisconsin', name: 'Lake Wisconsin', description: commonDesc, image: imgLakeWisconsin, streamUrl: 'https://www.youtube.com/embed/mGg_g7gYbEc', status: 'live', themeColor: '#844070' },
  { id: 7, slug: 'orangutans', name: 'Orangutans', description: commonDesc, image: imgOrangutans, streamUrl: 'https://www.youtube.com/embed/5rmDV0MzKS0', status: 'live', themeColor: '#9e700d' },
  { id: 8, slug: 'polar-bear', name: 'Polar Bear', description: commonDesc, image: imgPolarBear, streamUrl: 'https://www.youtube.com/embed/wGbGno2ICCc', status: 'live', themeColor: '#336699' }
];