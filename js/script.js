const {createApp} = Vue;

createApp({
    data(){
        return{
            taskList : [
                {
                    text: "Imparare a usare Vue Js",
                    done: false,
                    badge: "Codice",
                }, {
                    text: "Capire se Vue Js è veramente un pacchetto",
                    done: false,
                    badge: "Codice",
                }, {
                    text: "Leggere Horcynus Orca",
                    done: false,
                    badge: "Libri",
                }, {
                    text: "Leggere il flacone del Prozac",
                    done: false,
                    badge: "Salute",
                }
            ],

            newTask : {
                text: "",
                badge: "",
            },
        }
    },

    methods:{
        taskDelete(index){
            this.taskList.splice(index, 1)
        },

        taskAdd(){
            if(!this.newTask.text || !this.newTask.badge){
                alert("Compila il campo mancante!")
            } else{
                this.taskList.push({
                    text : this.newTask.text,
                    done: false,
                    badge: this.newTask.badge,
                })

            };

            this.newTask.text = ''
            this.newTask.badge = ''
        },

        fetchCategories(){
            categories = []
            this.taskList.forEach((element)=>{
                if(!categories.includes(element.badge)){
                    categories.push(element.badge)
                }
            })

            return categories
        }
    }
}).mount("#app");