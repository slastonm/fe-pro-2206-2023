
const { createApp } = Vue

createApp({
  data() {
    return {
      test:'hello',
      users:[
        {
          name:'Bob',
          age:30,
          isAdmine: true
        },
        {
          name:'Tom',
          age:31,
          isAdmine: true
        },
        {
          name:'John',
          age:33,
          isAdmine: false
        },
        {
          name:'Tim',
          age:34,
          isAdmine: false
        }
      ]
    }
  },
  methods:{
    admineMode(value){
      console.log(value)
      value.isAdmine = !value.isAdmine
    },
    handelrEvent(e){
      console.log(e)
    }

  },
  computed:{
    justAdmin(){
      return this.users.filter((user)=>user.isAdmine);
    }
  }
}).mount('#app')