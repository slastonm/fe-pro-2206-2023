// const app = Vue.createApp({

// });
// app.mount('#app');

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello from js file',
      productName:'TV',
      price: 1000,
      curency:'$',
      isOpen:false,
      imgPath:'123.webp',
      hrefValue:'https://prog.academy/'
    }
  },
  methods:{
    changeCurency(){
        console.log('Test');
        this.curency = 'E'
    },
    mouseEvent(){
        console.log('Test')
    },
    toggleBox(){
        this.isOpen = !this.isOpen;
    }

  }
}).mount('#app')