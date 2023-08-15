
const { createApp } = Vue

createApp({
  data() {
    return {
      productAvalaible:5,
      orderProduct:0,
      orderCheck: false
    }
  },
  methods:{
    addProduct(){
      if(this.productAvalaible>0){
        this.productAvalaible -=1;
        this.orderProduct+=1;
      }
      else{
        this.orderCheck = !this.orderCheck;
      }
    },
    removeProduct(){
      if(this.orderProduct>0){
        this.productAvalaible +=1;
        this.orderProduct-=1;
      }
      else{
        this.orderCheck = !this.orderCheck;
      }
    }

  }
}).mount('#app')