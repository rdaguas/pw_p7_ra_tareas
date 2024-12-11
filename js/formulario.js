

const listas = []
const app = Vue.createApp({
    methods: {
        agregarLista() {
            const nuevaLista = {
                nombre: this.nombre,
                apellido: this.apellido,
                Hobby: this.Hobby,
                fechaNacimiento: this.fechaNacimiento,
               
            }
            this.listaformulario.unshift(nuevaLista)
        }
    },
    data() {
        return {
            listaformulario: listas,
            nombre: null,
            apellido: null,
            Hobby: null,
            fechaNacimiento: null,
        }
    }
})
app.mount('#myAppF')