 const filas = document.querySelector("tbody");
            const texto = document.querySelector("#promedio");
            var total = 0;
            async function notas() {
                let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
                let data = await consulta.json();
                console.log(data);
                data.forEach((d)=>{
                    filas.innerHTML += `<tr><td>${d.nombre}</td><td>${(d.nota.toFixed(1))}</td><td>${carita(d.nota)}</td></tr>`;
                    total = total + d.nota;
                });
                texto.innerHTML = (total/12).toFixed(1);
            }
            notas().catch((error) => console.error(error));

            function carita(n){
                var emoji;
                if(n > 5.9){
                    emoji = "🤓";
                } else if (n == 5.9){
                    emoji = "🙃";
                } else {
                    emoji = "🫂";
                }
                return emoji
            }


            
