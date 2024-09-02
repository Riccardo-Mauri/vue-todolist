
const { createApp } = Vue

createApp({
    data() {
        return {
            //creo il mio array di oggeti con all'interno di esso text e done cioè descrizione e se è stata già fatta come task.
            todo: [
                {
                    text: 'prepararsi',
                    done: true
                },
                {
                    text: 'fare colazione',
                    done: false
                },
                {
                    text: 'ascoltare la lezione',
                    done: true
                },
                {
                    text: 'esercitarsi',
                    done: false
                },
            ],
            //creo una variabile dove poter poi inserire dinamicamente tramite input HTMl altri oggetti con le chiavi text e done dentro il mio Array
            newTodo: '',
        }
    },
    methods: {
        //creo una funzione che mi permette di aggiungere elementi alla mia lista di cose da fare 
        addTodo() {
            const cleanTodo = this.newTodo.trim();
            if(cleanTodo != ''){
                this.todo.push({
                    text: cleanTodo, 
                    done: false,
                });
                this.newTodo = '';
            }

        },
        //creo una funzione per rimuovere elementi dalla mia lista
        removeTodo(index) {
            this.todo.splice(index, 1);
        }
    }
}).mount('#app')
