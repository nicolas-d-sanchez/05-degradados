const app = Vue.createApp({
    data(){
        return{
            title: "Degradados",
            color1: "#ffffff",
            color2: "#000000",
            orientation: 1,
        }
    },
    computed:{
        setColor () {
            if (this.orientation == 1){
                return `background: linear-gradient(to right, ${this.color1}, ${this.color2})`;
            }else if (this.orientation == 2) {
                return `background: linear-gradient(to left, ${this.color1}, ${this.color2})`;
            }else if (this.orientation == 3) {
                return `background: linear-gradient(to top, ${this.color1}, ${this.color2})`;
            }else {
                return `background: linear-gradient(to bottom, ${this.color1}, ${this.color2})`;
            }
           
        },
    },
});