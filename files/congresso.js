



document.addEventListener("DOMContentLoaded",
    (event) => {

        var modo_reverso;
        let item_inicial = document.getElementsByClassName("item_carrossel")[0];

        window.setInterval(mover_carrossel, 5000);

        function mover_carrossel() {
            let itens_carrossel = document.getElementsByClassName("item_carrossel");
            let classe_posicao_atual = item_inicial.classList.item(0);
            let numero_posicao_atual = parseInt(classe_posicao_atual.charAt(classe_posicao_atual.length - 1));


            if (numero_posicao_atual < (itens_carrossel.length - 1) && modo_reverso === undefined) {
                mover_frente(numero_posicao_atual);
            } else if (numero_posicao_atual < (itens_carrossel.length - 1) && modo_reverso === false) {
                mover_frente(numero_posicao_atual);
            } else if (numero_posicao_atual >= 0 && modo_reverso === true) {
                mover_reverso(numero_posicao_atual);
            } else {

            }


            function mover_frente(posicao_corrente) {
                let item_ativo = document.getElementsByClassName("item_carrossel")[posicao_corrente];
                document.getElementsByClassName("item_carrossel")[posicao_corrente].removeAttribute("id");
                let nova_classe_posicao = "posicao_" + (posicao_corrente + 1);
                document.getElementsByClassName("item_carrossel")[posicao_corrente + 1].setAttribute("id", "item_ativo");
                item_inicial.classList.replace(item_inicial.classList.item(0), nova_classe_posicao);
                modo_reverso = posicao_corrente === 2;

            }

            function mover_reverso(posicao_corrente) {
                let item_ativo = document.getElementsByClassName("item_carrossel")[posicao_corrente];
                document.getElementsByClassName("item_carrossel")[posicao_corrente].removeAttribute("id");
                let nova_classe_posicao = "posicao_" + (posicao_corrente - 1);
                document.getElementsByClassName("item_carrossel")[posicao_corrente - 1].setAttribute("id", "item_ativo");
                item_inicial.classList.replace(item_inicial.classList.item(0), nova_classe_posicao);
                modo_reverso = !(posicao_corrente === 1);
            }


        }


        document.getElementById("menu").style.visibility = "visible";


        //LINKS MENU
        function ir_para(ancora) {
            window.location.href = "#" + ancora;
        }

        //LINKS DE MARCAS
        let realizador = document.getElementsByClassName("logo_if_realizador");
        for (let i of realizador) {
            i.addEventListener("mousedown", () => {
                window.location.href = "https://www.ifpb.edu.br/noticias/2023/07/inclusao-e-qualidade-na-educacao-a-distancia-e-tema-do-4o-congresso-nordestino-de-ead";
            })
        }

        let organizadores = document.getElementsByClassName("logo_if_organizador");
        for (let o of organizadores) {
            o.addEventListener("mousedown", () => redirecionar_organizador(o.getAttribute("alt")))
        }


        function redirecionar_organizador(texto_alt) {

            switch (texto_alt) {
                case "Instituto Federal Baiano":
                    //window.location.href = "https://ifbaiano.edu.br/portal/ensino/"
                    window.open("https://ifbaiano.edu.br/portal/ensino/", "_blank");
                    break;
                case "Instituto Federal da Bahia":
                    window.open("https://portal.ifba.edu.br/", "_blank");
                    break;
                case "Instituto Federal de Alagoas":
                    window.open("https://www.ifal.edu.br/", "_blank");
                    break;
                case "Instituto Federal de Pernambuco":
                    window.open("https://www.ifpe.edu.br/campus/ead/noticias/inclusao-e-qualidade-na-educacao-a-distancia-e-tema-do-4o-congresso-nordestino-de-ead", "_blank");
                    break;
                case "Instituto Federal do Ceará":
                    window.open("https://ifce.edu.br/", "_blank");
                    break;
                case "Instituto Federal do Maranhão":
                    window.open("https://portal.ifma.edu.br/2023/07/20/4o-congresso-nordestino-de-educacao-a-distancia-ocorrera-na-ifpb/", "_blank");
                    break;
                case "Instituto Federal do Piauí":
                    window.open("https://www.ifpi.edu.br/noticias/4o-congresso-nordestino-de-ead-sera-realizado-em-joao-pessoa", "_blank");
                    break;
                case "Instituto Federal do Rio Grande do Norte":
                    window.open("https://portal.ifrn.edu.br/", "_blank");
                    break;
                case "Instituto Federal do Sertão Pernambucano":
                    window.open("https://www.ifsertao-pe.edu.br/index.php/a-instituicao/noticias-em-destaque/15741-evento-regional", "_blank");
                    break;
                default:
                    window.location.href = "#inicio";
            }


        }


        let itens_carrossel = document.getElementsByClassName("item_carrossel");
        for (let item of itens_carrossel) {
            item.addEventListener("mousedown", () => {
                window.location.href = item.getAttribute("data-href-carrossel")
            });

        }


        //EVENTOS DE SCROLL DA JANELA - TOGGLE DISPLAY BOTAO INICIO
        const botao_inicio = document.getElementById("botao_inicio");

        window.addEventListener('scrollend', eventos_scroll);

        function eventos_scroll() {
            let secao_pagina = window.location.hash !== "" ? document.getElementById((window.location.hash).substring(1)) : null;

            let eh_item_programacao = secao_pagina !== null && secao_pagina.tagName === "DETAILS";


            //TOGGLE DISPLAY BOTAO INICIO
            if (window.scrollY >= 400) {
                botao_inicio.style.display = "block";
            } else {
                botao_inicio.style.display = "none";
            }


            //ABRIR DETAILS PROGRAMAÇÃO
            if (eh_item_programacao) {
                let details_programacao = secao_pagina;


                if (details_programacao.hasAttribute("open") === false) {
                    details_programacao.setAttribute("open", "")
                }

                if ((details_programacao.offsetTop - window.scrollY) <= 0.5 && (details_programacao.offsetTop - window.scrollY) >= -0.5) {
                    window.scrollTo(0, (window.scrollY - 100));

                }

            } else {


            }


        }


        //BOTÃO COMPARTILHAR
        const botoes_compartilhar = document.getElementsByClassName("botao_compartilhar");

        for (let botao_compartilhar of botoes_compartilhar) {
            botao_compartilhar.addEventListener("mousedown", compartilhar);
            //if(navigator.canShare() === false){botao_compartilhar.style.display = "none";};
        }

        const botoes_compartilhar_whatsapp = document.getElementsByClassName("botao_compartilhar_whatsapp");


        for (let botao_compartilhar_whatsapp of botoes_compartilhar_whatsapp) {



            //if(navigator.canShare() === true){botao_compartilhar_whatsapp.style.display = "none";};

            let data_atividade_evento = botao_compartilhar_whatsapp.parentElement.parentElement.getElementsByClassName("data_atividade_evento")[0].innerText;
            let horario_atividade_evento = botao_compartilhar_whatsapp.parentElement.parentElement.getElementsByClassName("horario_atividade_evento")[0].innerText;
            let categora_atividade_evento = botao_compartilhar_whatsapp.parentElement.parentElement.getElementsByClassName("categora_atividade_evento")[0].innerText;
            let titulo_atividade_evento = botao_compartilhar_whatsapp.parentElement.parentElement.getElementsByClassName("titulo_atividade_evento")[0].innerText;
            let container_membros = botao_compartilhar_whatsapp.parentElement.parentElement.getElementsByClassName("container_membros_atividade")[0];
            let nomes_membros = container_membros.getElementsByClassName("nome_completo");
            let texto_nomes_membros = ``;
            let ambiente_atividade = (botao_compartilhar_whatsapp.parentElement.parentElement.getElementsByClassName("ativiade_ambiente")[0]).textContent;


            for (let nome of nomes_membros) {
                if(nome.innerText !== "")      {
                 texto_nomes_membros += "%0D%0A✅ *" + nome.innerText + "*";
                }else{
                    texto_nomes_membros += "";
                }
            }





            let id_atividade = botao_compartilhar_whatsapp.parentElement.parentElement.id;

            let parceiros = "%0D%0AA organização do Congresso é uma parceria do *Instituto Federal da Paraíba*" + "%0D%0A" +
                "🤝Instituto Federal Baiano" + "%0D%0A" +
                "🤝Instituto Federal da Bahia" + "%0D%0A" +
                "🤝Instituto Federal de Alagoas" + "%0D%0A" +
                "🤝Instituto Federal de Pernambuco" + "%0D%0A" +
                "🤝Instituto Federal do Ceará" + "%0D%0A" +
                "🤝Instituto Federal do Maranhão" + "%0D%0A" +
                "🤝Instituto Federal do Piauí" + "%0D%0A" +
                "🤝Instituto Federal do Rio Grande do Norte" + "%0D%0A" +
                "🤝Instituto Federal do Sertão Pernambucano" + "%0D%0A";


            botao_compartilhar_whatsapp.parentElement.setAttribute("href", `whatsapp://send?text=*4ºCongresso Nordestino de Educação a Distância* %0D%0A%0D%0A_${categora_atividade_evento}_%0D%0A*"${titulo_atividade_evento}"* %0D%0A${texto_nomes_membros}%0D%0A%0D%0AData: ${data_atividade_evento}%0D%0AHorário: ${horario_atividade_evento}%0D%0ALocal: ${ambiente_atividade} %0D%0A%0D%0A${parceiros}%0D%0A%0D%0A💻 *Acesse a programação completa em:* %0D%0Ahttps://eventos.ead.ifpb.edu.br/4congressonordestino/#programacao`)
        }

        async function compartilhar(event) {


            let data_atividade_evento = event.target.parentElement.getElementsByClassName("data_atividade_evento")[0].innerText;
            let horario_atividade_evento = event.target.parentElement.getElementsByClassName("horario_atividade_evento")[0].innerText;
            let categora_atividade_evento = event.target.parentElement.getElementsByClassName("categora_atividade_evento")[0].innerText;
            let titulo_atividade_evento = event.target.parentElement.getElementsByClassName("titulo_atividade_evento")[0].innerText;
            let id_atividade = event.target.parentElement.id;

            let ambiente_atividade = (event.target.parentElement.getElementsByClassName("ativiade_ambiente")[0]).textContent;

            let container_membros = event.target.parentElement.getElementsByClassName("container_membros_atividade")[0];
            //console.log(container_membros);
            let nomes_membros = container_membros.getElementsByClassName("nome_completo");
            let texto_nomes_membros = ``;

            if(nomes_membros !== undefined || nomes_membros !== ""){
                for (let nome of nomes_membros) {
                    texto_nomes_membros += "\n✅ *" + nome.textContent + "*";
                }
            }else{
                texto_nomes_membros = "\n"
            }

            //console.log(`*${categora_atividade_evento}:*  ${titulo_atividade_evento} \n  *${data_atividade_evento} | ${horario_atividade_evento}*`);

            let parceiros = "\n\n" + "A organização do Congresso é uma parceria do *Instituto Federal da Paraíba*" + "\n" +
                "🤝Instituto Federal Baiano" + "\n" +
                "🤝Instituto Federal da Bahia" + "\n" +
                "🤝Instituto Federal de Alagoas" + "\n" +
                "🤝Instituto Federal de Pernambuco" + "\n" +
                "🤝Instituto Federal do Ceará" + "\n" +
                "🤝Instituto Federal do Maranhão" + "\n" +
                "🤝Instituto Federal do Piauí" + "\n" +
                "🤝Instituto Federal do Rio Grande do Norte" + "\n" +
                "🤝Instituto Federal do Sertão Pernambucano" + "\n";


            const shareData = {
                title: "4º Congresso Nordestino de Educação a Distância",
                text: `*${categora_atividade_evento}:*\n _"${titulo_atividade_evento}"_\n\n ${texto_nomes_membros}\n\nData: ${data_atividade_evento}\nHorário: ${horario_atividade_evento}*${parceiros}\nLocal: ${ambiente_atividade}`,
                url: `https://eventos.ead.ifpb.edu.br/4congressonordestino/#${id_atividade}`,
            };


            try {
                await navigator.share(shareData);


            } catch (err) {

            }


        }


        // CÓDIGOS PROGRAMAÇÃO

        let itens_programacao = document.getElementsByClassName("item_programacao");

        for(let item of itens_programacao){

                //ADICIONAR ANALYTICS AOS ITENS DE PROGRAMAÇÃO
       /*     item.addEventListener("mousedown", () => {
                try{
                fetch(`scripts/click_analytics.php?atividade=${item.id}`, {method: 'POST', mode: 'no-cors'});
                }catch (e){}
            }, false) */

            let divisor = document.createElement("hr");
            let tag_codigo = document.createElement("p");
            tag_codigo.setAttribute("class", "tag_codigo");
            tag_codigo.textContent = "ATIVIDADE #" + item.id;

            item.appendChild(divisor);
            item.appendChild(tag_codigo);


        }
        //ADICIONAR ANALYTICS AOS BOTOES DE COMPARTILHAMENTO
/*        let botoes_compartilhar_com_whatsapp = document.getElementsByClassName("botao_compartilhar_whatsapp");
        let botoes_compartilhar_api = document.getElementsByClassName("botao_compartilhar");*/


/*        for(let botao_wp of botoes_compartilhar_com_whatsapp){
            botao_wp.addEventListener("click", ()=>{
                try{
                    console.log("disparou_evento");
                    fetch(`scripts/wp_share_analytics.php?atividade=${botao_wp.parentElement.id}`, {method: 'POST', mode: 'no-cors'});
                }catch (e){}
            })
        }*/

/*        for(let botao_api of botoes_compartilhar_api){
            botao_api.parentElement.addEventListener("mousedown", ()=>{
                try{
                    console.log("disparou_evento");
                    fetch(`scripts/api_share_analytics.php?atividade=${botao_api.parentElement.id}`, {method: 'POST', mode: 'no-cors'});
                }catch (e){}
            }, false)
        }*/






    })



