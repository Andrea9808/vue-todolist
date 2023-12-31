//Rifare l’esercizio della to do list.
//Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//- text, una stringa che indica il testo del todo
//- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//MILESTONE 1
//Stampare all’interno di una lista HTML un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//MILESTONE 2
//Visualizzare a fianco ad ogni item ha una“x”: cliccando su di ess a, il todo viene rimosso dalla lista.
//MILESTONE 3
//Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, 
//il testo digitato viene letto e utilizzato per creare un nuovo todo, 
//che quindi viene aggiunto alla lista dei todo esistenti.



//true = è stato fatto

const { createApp } = Vue;


createApp({
    data() {
        
        return {
            added: "",
            todos: 
            [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
    
        }

    },


    methods:{

        //rimozione li
        removeTask(indice){
            this.todos.splice(indice,1);
        },

        //aggiunta nuovi task
        addTask(){
            this.todos.unshift({
                text:this.added,
                done:false
            }),
            this.added = ""
        },

        //al click del li
        check(indice){
           if(this.todos[indice].done === false){
                this.todos[indice].done = true;
            } else{
                this.todos[indice].done = false;
            }
        }
        
    }


}).mount("#app")

