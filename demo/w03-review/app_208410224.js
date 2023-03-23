// local reviews data
const reviews = [
  {
    id: 1,
    name: 'leo chang',
    job: 'software engineer',
    img: 'https://i02piccdn.sogoucdn.com/c055ba1ebd0a6aae',
    text: 'Im a software engineer with a passion for innovation and technology. I enjoy working on challenging projects and collaborating with teams to deliver high-quality software solutions. ',
  },
  {
    id: 2,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 4,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 5,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentReview = 0

showReview = (id) => {
  item = reviews[id]
  console.log(item);
  img.src = item.img;
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

getRandomReview = () => {
  rnd = Math.floor(Math.random() * reviews.length);
  while(rnd == currentReview){
    rnd = Math.floor(Math.random() * reviews.length);
  }
  return rnd
}

window.addEventListener('DOMContentLoaded',() => {
  showReview(currentReview)
})

prevBtn.addEventListener('click',()=>{
  if(currentReview-1 < 0){
    currentReview = reviews.length-1
  }
  else currentReview--
  showReview(currentReview)
})
nextBtn.addEventListener('click',()=>{
  if(currentReview+1 === reviews.length){
    currentReview = 0
  }
  else currentReview++
  showReview(currentReview)
})
randomBtn.addEventListener('click',()=>{
  rnd = getRandomReview()
  currentReview = rnd
  showReview(rnd)
})