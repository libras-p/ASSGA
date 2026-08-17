"use strict";


/* LOGIN */

function verificarLogin(){

    const logado =
        localStorage.getItem("assga_admin_logado");

    const bloqueio =
        document.getElementById("bloqueio");

    if(logado === "true"){

        bloqueio.style.display = "none";

    }else{

        bloqueio.style.display = "flex";

    }

}


/* ADMIN */

function carregarAdministrador(){

    const usuario =
        localStorage.getItem("assga_admin_usuario");

    const elemento =
        document.getElementById("nomeAdministrador");

    if(usuario && elemento){

        elemento.innerHTML =
            '<i class="fas fa-user-shield"></i> ' +
            escapeHTML(usuario);

    }

}


/* NAVEGAÇÃO */

function mostrarPagina(nome){

    document
        .querySelectorAll(".page")
        .forEach(function(pagina){

            pagina.classList.remove("active");

        });


    document
        .querySelectorAll(".nav-btn")
        .forEach(function(botao){

            botao.classList.remove("active");

        });


    const pagina =
        document.getElementById("page-" + nome);

    if(pagina){

        pagina.classList.add("active");

    }


    const botao =
        document.querySelector(
            '.nav-btn[data-page="' + nome + '"]'
        );

    if(botao){

        botao.classList.add("active");

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* TOAST */

function mostrarToast(mensagem){

    const toast =
        document.getElementById("toast");

    toast.textContent = mensagem;

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },3000);

}


/* SALVAR */

function salvar(chave,dados,mensagem){

    localStorage.setItem(
        chave,
        JSON.stringify(dados)
    );

    mostrarToast(mensagem);

}


/* HOME */

function salvarIndex(){

    salvar(
        "assga_index",
        {
            titulo: document.getElementById("indexTitulo").value,
            data: document.getElementById("indexData").value,
            texto: document.getElementById("indexTexto").value,
            eventoData: document.getElementById("indexEventoData").value,
            local: document.getElementById("indexLocal").value,
            vagas: document.getElementById("indexVagas").value,
            preco: document.getElementById("indexPreco").value
        },
        "Página inicial salva!"
    );

}


/* HISTÓRIA */

function salvarHistoria(){

    salvar(
        "assga_historia",
        {
            titulo: document.getElementById("historiaTitulo").value,
            texto: document.getElementById("historiaTexto").value
        },
        "História salva!"
    );

}


/* ESPORTIVA */

function salvarEsportiva(){

    salvar(
        "assga_esportiva",
        {
            titulo: document.getElementById("esportivaTitulo").value,
            modalidade: document.getElementById("esportivaModalidade").value,
            texto: document.getElementById("esportivaTexto").value
        },
        "Esportiva salva!"
    );

}


/* EVENTO */

function salvarEvento(){

    salvar(
        "assga_evento",
        {
            nome: document.getElementById("eventoNome").value,
            data: document.getElementById("eventoData").value,
            local: document.getElementById("eventoLocal").value,
            vagas: document.getElementById("eventoVagas").value,
            valor: document.getElementById("eventoValor").value,
            status: document.getElementById("eventoStatus").value,
            descricao: document.getElementById("eventoDescricao").value
        },
        "Evento salvo!"
    );

    atualizarDashboard();

}


/* ESTATUTO */

function salvarEstatuto(){

    salvar(
        "assga_estatuto",
        {
            titulo: document.getElementById("estatutoTitulo").value,
            texto: document.getElementById("estatutoTexto").value,
            pdf: document.getElementById("estatutoPdf").value
        },
        "Estatuto salvo!"
    );

}


/* DIRETORIA */

function salvarDiretoria(){

    salvar(
        "assga_diretoria",
        {
            presidente: document.getElementById("presidente").value,
            vice: document.getElementById("vicePresidente").value,
            secretario: document.getElementById("secretario").value,
            tesoureiro: document.getElementById("tesoureiro").value,
            texto: document.getElementById("diretoriaTexto").value
        },
        "Diretoria salva!"
    );

}


/* SLIDER */

function salvarSlider(){

    salvar(
        "assga_slider",
        {
            foto1: document.getElementById("foto1").value,
            foto2: document.getElementById("foto2").value,
            foto3: document.getElementById("foto3").value
        },
        "Slider salvo!"
    );

}


/* CARREGAR */

function carregarObjeto(chave,callback){

    const valor =
        localStorage.getItem(chave);

    if(!valor){
        return;
    }

    try{

        callback(JSON.parse(valor));

    }catch(erro){

        console.error(
            "Erro ao carregar",
            chave,
            erro
        );

    }

}


function carregarDados(){


    carregarObjeto(
        "assga_index",
        function(d){

            preencher("indexTitulo",d.titulo);
            preencher("indexData",d.data);
            preencher("indexTexto",d.texto);
            preencher("indexEventoData",d.eventoData);
            preencher("indexLocal",d.local);
            preencher("indexVagas",d.vagas);
            preencher("indexPreco",d.preco);

        }
    );


    carregarObjeto(
        "assga_historia",
        function(d){

            preencher("historiaTitulo",d.titulo);
            preencher("historiaTexto",d.texto);

        }
    );


    carregarObjeto(
        "assga_esportiva",
        function(d){

            preencher("esportivaTitulo",d.titulo);
            preencher("esportivaModalidade",d.modalidade);
            preencher("esportivaTexto",d.texto);

        }
    );


    carregarObjeto(
        "assga_evento",
        function(d){

            preencher("eventoNome",d.nome);
            preencher("eventoData",d.data);
            preencher("eventoLocal",d.local);
            preencher("eventoVagas",d.vagas);
            preencher("eventoValor",d.valor);
            preencher("eventoStatus",d.status);
            preencher("eventoDescricao",d.descricao);

        }
    );


    carregarObjeto(
        "assga_estatuto",
        function(d){

            preencher("estatutoTitulo",d.titulo);
            preencher("estatutoTexto",d.texto);
            preencher("estatutoPdf",d.pdf);

        }
    );


    carregarObjeto(
        "assga_diretoria",
        function(d){

            preencher("presidente",d.presidente);
            preencher("vicePresidente",d.vice);
            preencher("secretario",d.secretario);
            preencher("tesoureiro",d.tesoureiro);
            preencher("diretoriaTexto",d.texto);

        }
    );


    carregarObjeto(
        "assga_slider",
        function(d){

            preencher("foto1",d.foto1);
            preencher("foto2",d.foto2);
            preencher("foto3",d.foto3);

        }
    );

}


function preencher(id,valor){

    const elemento =
        document.getElementById(id);

    if(elemento && valor !== undefined){

        elemento.value = valor;

    }

}


/* REGISTROS */

function carregarRegistros(){

    let registros = [];

    try{

        registros =
            JSON.parse(
                localStorage.getItem(
                    "assga_registros"
                ) || "[]"
            );

    }catch(e){

        registros = [];

    }


    const tabela =
        document.getElementById(
            "tabelaRegistros"
        );

    if(!tabela){
        return;
    }

    tabela.innerHTML = "";


    document.getElementById(
        "totalRegistros"
    ).textContent = registros.length;


    if(registros.length === 0){

        tabela.innerHTML = `
            <tr>
                <td
                    colspan="6"
                    style="text-align:center;padding:35px;"
                >
                    <i class="fas fa-inbox"></i>
                    <br><br>
                    Nenhum registro encontrado.
                </td>
            </tr>
        `;

        return;

    }


    registros.forEach(function(registro,index){

        const tr =
            document.createElement("tr");

        tr.innerHTML = `

            <td>${index + 1}</td>

            <td>
                ${escapeHTML(registro.nome || "-")}
            </td>

            <td>
                ${escapeHTML(registro.cpf || "-")}
            </td>

            <td>
                ${escapeHTML(registro.telefone || "-")}
            </td>

            <td>
                ${escapeHTML(registro.data || "-")}
            </td>

            <td>
                <span class="status status-ok">
                    ${escapeHTML(
                        registro.status || "Recebido"
                    )}
                </span>
            </td>

        `;

        tabela.appendChild(tr);

    });

}


/* LIMPAR */

function limparRegistros(){

    if(
        !confirm(
            "Deseja apagar todos os registros?"
        )
    ){

        return;

    }

    localStorage.removeItem(
        "assga_registros"
    );

    carregarRegistros();

    atualizarDashboard();

    mostrarToast(
        "Registros removidos!"
    );

}


/* DASHBOARD */

function atualizarDashboard(){

    let registros = [];

    try{

        registros =
            JSON.parse(
                localStorage.getItem(
                    "assga_registros"
                ) || "[]"
            );

    }catch(e){

        registros = [];

    }


    const totalRegistros =
        document.getElementById(
            "totalRegistros"
        );

    if(totalRegistros){

        totalRegistros.textContent =
            registros.length;

    }


    const evento =
        localStorage.getItem(
            "assga_evento"
        );


    const totalEventos =
        document.getElementById(
            "totalEventos"
        );

    if(totalEventos){

        totalEventos.textContent =
            evento ? "1" : "0";

    }


    const slider =
        localStorage.getItem(
            "assga_slider"
        );


    if(slider){

        try{

            const fotos =
                JSON.parse(slider);

            let total = 0;

            if(fotos.foto1) total++;
            if(fotos.foto2) total++;
            if(fotos.foto3) total++;

            document.getElementById(
                "totalFotos"
            ).textContent = total;

        }catch(e){}

    }

}


/* ABRIR SITE */

function abrirSite(){

    window.open(
        "index.html",
        "_blank"
    );

}


function abrirPagina(pagina){

    window.open(
        pagina,
        "_blank"
    );

}


/* ESCAPE */

function escapeHTML(valor){

    return String(valor)

        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");

}


/* SAIR */

function sairPainel(){

    if(
        !confirm(
            "Deseja realmente sair?"
        )
    ){

        return;

    }

    localStorage.removeItem(
        "assga_admin_logado"
    );

    localStorage.removeItem(
        "assga_admin_usuario"
    );

    window.location.href =
        "admin-login.html";

}


/* INICIALIZAÇÃO */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        verificarLogin();

        carregarAdministrador();

        carregarDados();

        carregarRegistros();

        atualizarDashboard();


        document
            .querySelectorAll(".nav-btn")
            .forEach(function(botao){

                botao.addEventListener(
                    "click",
                    function(){

                        mostrarPagina(
                            botao.dataset.page
                        );

                    }
                );

            });

    }
);


/* VOLTAR PARA ABA */

window.addEventListener(
    "focus",
    function(){

        verificarLogin();

        carregarRegistros();

        atualizarDashboard();

    }
);