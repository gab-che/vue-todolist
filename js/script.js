const {createApp} = Vue;

createApp({
    data(){
        return{
            taskList : [
                {
                    text: "Imparare a usare Vue Js",
                    done: false,
                }, {
                    text: "Capire se Vue Js è veramente un pacchetto",
                    done: false,
                }, {
                    text: "Leggere Horcynus Orca",
                    done: false,
                }, {
                    text: "Leggere il flacone del Prozac",
                    done: false,
                }
            ],

            newTask : {
                text: "",
            }
        }
    },

    methods:{
        taskDelete(index){
            this.taskList.splice(index, 1)
        },

        taskAdd(){
            this.taskList.push({
                text : this.newTask.text,
                done: false,
            });
        },
    }
}).mount("#app");