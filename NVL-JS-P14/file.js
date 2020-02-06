document.querySelector("#boton").addEventListener("click",presentarLista());
            function presentarLista() {
                const xhttp = XMLHttpRequest();
                xhttp.open("GET", "pelis.json", true);
                xhttp.send();
                xhttp.onreadystatechange = function () {
                    if(this.readyState == 4 && this.status == 200){
                        let datos = JSON.parse(this.resoponseText);
                        console.log(datos);
                        let res = document.querySelector("#lista");
                        res.innerHTML = "";
                        for(let item of datos){
                            res.innerHTML += <tr><td>${item.Nombre}</td><td>${item.Genero}</td></tr> 
                        }
                    }
                }
            }