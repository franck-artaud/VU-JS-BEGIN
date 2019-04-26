let firstVue = new Vue({
    el: '#first-vue-app',
    data: {
    name:"Francky",
    surname: "krapoustovitchoukirmatasou",
    age: 59
    },
    methods: {
        increment() { 
          this.age+= 1;
        },

        decrement() { 
            this.age+= -1;
        }
    }
});

let secondVue = new Vue({
    el: '#second-vue-app',
    data: {
        name:"Mary",
        surname: "Zirlutalloubrokati",
        age: 47
    }
    
});