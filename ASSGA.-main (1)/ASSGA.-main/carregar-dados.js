/**
 * =================================================================
 * CARREGAR DADOS DO PAINEL ADMIN PARA O SITE
 * =================================================================
 * Este arquivo carrega dados salvos no localStorage pelo painel 
 * administrativo e exibe nas páginas públicas do site.
 * =================================================================
 */


/**
 * CARREGAR DADOS DO INDEX (HOME)
 * Atualiza: título, data, texto, evento (data, local, vagas, preço)
 */
function carregarDadosIndex() {
    const dados = localStorage.getItem("assga_index");
    
    if (!dados) return;
    
    try {
        const obj = JSON.parse(dados);
        
        // Atualizar slider info
        if (obj.eventoData) {
            const sliderInfo = document.getElementById("sliderInfo");
            if (sliderInfo) {
                sliderInfo.innerHTML = `
                    <i class="fas fa-calendar-days"></i>
                    ${obj.eventoData}
                `;
            }
        }
        
        // Atualizar evento-info-item (data, local, vagas, preço)
        const eventoInfo = document.querySelectorAll(".evento-info-item");
        if (eventoInfo.length > 0) {
            // Data
            if (obj.eventoData && eventoInfo[0]) {
                eventoInfo[0].innerHTML = `
                    <i class="fas fa-calendar-days"></i>
                    <strong>Data</strong>
                    <br>
                    ${obj.eventoData}
                `;
            }
            
            // Local
            if (obj.local && eventoInfo[1]) {
                eventoInfo[1].innerHTML = `
                    <i class="fas fa-location-dot"></i>
                    <strong>Local</strong>
                    <br>
                    ${obj.local}
                `;
            }
            
            // Vagas
            if (obj.vagas && eventoInfo[2]) {
                eventoInfo[2].innerHTML = `
                    <i class="fas fa-ticket"></i>
                    <strong>Vagas</strong>
                    <br>
                    ${obj.vagas} participantes
                `;
            }
        }
        
        // Atualizar preço
        const precoEvento = document.querySelector(".preco-evento");
        if (precoEvento && obj.preco) {
            precoEvento.innerHTML = `
                <i class="fas fa-money-bill-wave"></i>
                Inscrição: R$ ${obj.preco}
            `;
        }
        
    } catch (e) {
        console.error("Erro ao carregar dados do index:", e);
    }
}


/**
 * CARREGAR SLIDER DE IMAGENS
 * Atualiza: foto1, foto2, foto3
 */
function carregarSlider() {
    const dados = localStorage.getItem("assga_slider");
    
    if (!dados) return;
    
    try {
        const obj = JSON.parse(dados);
        const slide = document.getElementById("slide");
        
        if (!slide) return;
        
        // Array com as imagens em ordem
        const fotos = [obj.foto1, obj.foto2, obj.foto3].filter(f => f);
        
        if (fotos.length > 0) {
            // Armazenar as fotos globalmente para o slider funcionar
            window.fotoSlider = fotos;
            window.indexSliderAtual = 0;
            
            // Exibir primeira foto
            slide.src = fotos[0];
            slide.alt = "Foto ASSGA";
        }
        
    } catch (e) {
        console.error("Erro ao carregar slider:", e);
    }
}


/**
 * CARREGAR DADOS DA HISTÓRIA
 */
function carregarHistoria() {
    const dados = localStorage.getItem("assga_historia");
    
    if (!dados) return;
    
    try {
        const obj = JSON.parse(dados);
        
        // Atualizar título
        const titulo = document.querySelector(".historia-titulo");
        if (titulo) {
            titulo.textContent = obj.titulo || "História da ASSGA";
        }
        
        // Atualizar texto
        const texto = document.querySelector(".historia-texto");
        if (texto) {
            texto.innerHTML = (obj.texto || "").replace(/\n/g, "<br>");
        }
        
    } catch (e) {
        console.error("Erro ao carregar história:", e);
    }
}


/**
 * CARREGAR DADOS DA ESPORTIVA
 */
function carregarEsportiva() {
    const dados = localStorage.getItem("assga_esportiva");
    
    if (!dados) return;
    
    try {
        const obj = JSON.parse(dados);
        
        // Atualizar título
        const titulo = document.querySelector(".esportiva-titulo");
        if (titulo) {
            titulo.textContent = obj.titulo || "Seção Esportiva";
        }
        
        // Atualizar modalidade
        const modalidade = document.querySelector(".esportiva-modalidade");
        if (modalidade) {
            modalidade.textContent = obj.modalidade || "";
        }
        
        // Atualizar texto
        const texto = document.querySelector(".esportiva-texto");
        if (texto) {
            texto.innerHTML = (obj.texto || "").replace(/\n/g, "<br>");
        }
        
    } catch (e) {
        console.error("Erro ao carregar esportiva:", e);
    }
}


/**
 * CARREGAR DADOS DO EVENTO
 */
function carregarEvento() {
    const dados = localStorage.getItem("assga_evento");
    
    if (!dados) return;
    
    try {
        const obj = JSON.parse(dados);
        
        // Atualizar nome
        const nome = document.querySelector(".evento-nome");
        if (nome) {
            nome.textContent = obj.nome || "Evento";
        }
        
        // Atualizar data
        const data = document.querySelector(".evento-data");
        if (data) {
            data.textContent = obj.data || "";
        }
        
        // Atualizar local
        const local = document.querySelector(".evento-local");
        if (local) {
            local.textContent = obj.local || "";
        }
        
        // Atualizar vagas
        const vagas = document.querySelector(".evento-vagas");
        if (vagas) {
            vagas.textContent = obj.vagas || "";
        }
        
        // Atualizar valor
        const valor = document.querySelector(".evento-valor");
        if (valor) {
            valor.textContent = obj.valor ? `R$ ${obj.valor}` : "";
        }
        
        // Atualizar status
        const status = document.querySelector(".evento-status");
        if (status) {
            status.textContent = obj.status || "";
        }
        
        // Atualizar descrição
        const descricao = document.querySelector(".evento-descricao");
        if (descricao) {
            descricao.innerHTML = (obj.descricao || "").replace(/\n/g, "<br>");
        }
        
    } catch (e) {
        console.error("Erro ao carregar evento:", e);
    }
}


/**
 * CARREGAR DADOS DO ESTATUTO
 */
function carregarEstatuto() {
    const dados = localStorage.getItem("assga_estatuto");
    
    if (!dados) return;
    
    try {
        const obj = JSON.parse(dados);
        
        // Atualizar título
        const titulo = document.querySelector(".estatuto-titulo");
        if (titulo) {
            titulo.textContent = obj.titulo || "Estatuto";
        }
        
        // Atualizar texto
        const texto = document.querySelector(".estatuto-texto");
        if (texto) {
            texto.innerHTML = (obj.texto || "").replace(/\n/g, "<br>");
        }
        
        // Atualizar link PDF
        if (obj.pdf) {
            const pdf = document.querySelector(".estatuto-pdf");
            if (pdf) {
                pdf.href = obj.pdf;
                pdf.style.display = "inline";
            }
        }
        
    } catch (e) {
        console.error("Erro ao carregar estatuto:", e);
    }
}


/**
 * CARREGAR DADOS DA DIRETORIA
 */
function carregarDiretoria() {
    const dados = localStorage.getItem("assga_diretoria");
    
    if (!dados) return;
    
    try {
        const obj = JSON.parse(dados);
        
        // Atualizar presidente
        const presidente = document.querySelector(".diretoria-presidente");
        if (presidente) {
            presidente.textContent = obj.presidente || "";
        }
        
        // Atualizar vice-presidente
        const vice = document.querySelector(".diretoria-vice");
        if (vice) {
            vice.textContent = obj.vice || "";
        }
        
        // Atualizar secretário
        const secretario = document.querySelector(".diretoria-secretario");
        if (secretario) {
            secretario.textContent = obj.secretario || "";
        }
        
        // Atualizar tesoureiro
        const tesoureiro = document.querySelector(".diretoria-tesoureiro");
        if (tesoureiro) {
            tesoureiro.textContent = obj.tesoureiro || "";
        }
        
        // Atualizar texto
        const texto = document.querySelector(".diretoria-texto");
        if (texto) {
            texto.innerHTML = (obj.texto || "").replace(/\n/g, "<br>");
        }
        
    } catch (e) {
        console.error("Erro ao carregar diretoria:", e);
    }
}


/**
 * SINCRONIZAR DADOS QUANDO MUDAR ABA
 * Atualiza os dados se forem modificados em outra aba/janela
 */
window.addEventListener("focus", function() {
    // Recarregar dados ao retornar para a aba
    if (document.querySelector(".historia-titulo")) {
        carregarHistoria();
    }
    if (document.querySelector(".esportiva-titulo")) {
        carregarEsportiva();
    }
    if (document.querySelector(".evento-nome")) {
        carregarEvento();
    }
    if (document.querySelector(".estatuto-titulo")) {
        carregarEstatuto();
    }
    if (document.querySelector(".diretoria-presidente")) {
        carregarDiretoria();
    }
    if (document.getElementById("slide")) {
        carregarSlider();
    }
    if (document.querySelector(".evento-info-item")) {
        carregarDadosIndex();
    }
});


/**
 * INICIALIZAR - Executar ao carregar a página
 */
document.addEventListener("DOMContentLoaded", function() {
    carregarSlider();
    carregarDadosIndex();
    carregarHistoria();
    carregarEsportiva();
    carregarEvento();
    carregarEstatuto();
    carregarDiretoria();
});
