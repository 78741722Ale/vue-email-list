const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        // Creo un array di Mail
        randomEmails: []
    },
    // Metodi Contenuti
    methods: {
        cicleEmail() {
            // aggiriamo l'impossibilità del mounted di risalire al this
            const self = this
            // Chiamata Axios
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                // avvio la function anonima con argomento
                .then(response => {
                    if (!this.randomEmails.includes(response.data.response)) {
                        this.randomEmails.push(response.data.response)
                    } else {
                        return
                    }
                })
        },
    },

    mounted() {
        // ciclo con un for 10 volte dentro l'array random il method creato
        for (let i = this.randomEmails.length; i < 10; i++) {
            this.cicleEmail()
        }

    },




})