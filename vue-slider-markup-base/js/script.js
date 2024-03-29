console.log('hello');

const { createApp } = Vue;

createApp({
    data() {
        return {
            currentImage: 0,
            message: 'hello',
            isActive: true,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        nextImage() {
            this.currentImage++
            //console.log(this.slides.length);
            if (this.currentImage === this.slides.length) {
                this.currentImage = 0
            }
        },
        prevImage() {
            this.currentImage--
            //console.log(this.slides.length);
            if (this.currentImage < 0) {
                this.currentImage = this.slides.length - 1
            }
        },
        next() {
            this.currentImage++
        },
        stopAutoplay(){
            clearInterval(this.interval)
        },
        startAutoplay(){
            this.interval = setInterval(() => { this.nextImage() }, 3000)
            //this.interval = setInterval(function(){ this.next() }, 3000)
            // setInterval(function () {
            //     console.log(increment());
            // }, 3000)
           //this.currentImage = currentImage
           
           
        }
        

    },
    mounted() {
         //console.log(this.currentImage);;
        //let currentImage = 0;
        this.startAutoplay()
    } 
}).mount('#app')



/*const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);*/

