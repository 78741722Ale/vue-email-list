const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        // Creo le mail
        emails: null
    },
    // Metodi Contenuti
    methods: {},
    mounted() {

        // aggiriamo l'impossibilità del mounted di risalire al this
        const self = this
        // Chiamata Axios
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // avvio la function anonima con argomento
            .then(function (response) {
                // verifico la costante
                console.log("Questo invece è il console log di Self, con function anonima");
                console.log(self);
                console.log("_________");
                // verifico l'argomento response
                console.log("Questo invece è il console log di Response");
                console.log(response);
                console.log("_________");
                // Ora applico il parametro con this
                self.emails = response.data.response
                // Guardo in Console
                console.log("Questo è il console log user_number");
                console.log(this.emails); // vedo una mail random a ogni check
                console.log("_________");
            })

    },




})