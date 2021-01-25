if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registo Exitoso"))
    .catch((err) => console.log((err)));
    }