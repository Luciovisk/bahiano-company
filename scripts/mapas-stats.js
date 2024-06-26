function mapa (vitoria, derrota, def_vitoria, def_derrota, atk_vitoria, atk_derrota, banimentos, ptda_txt, vitoria_txt, atk_txt, def_txt, ban_txt) {
    //Calculos
    let partidas_jogadas = vitoria + derrota
    let taxa_vitoria = vitoria / partidas_jogadas * 100;
    let rounds_jogados_atk = atk_vitoria + atk_derrota;
    let taxa_vitoria_atk = atk_vitoria / rounds_jogados_atk * 100;
    let rounds_jogados_def = def_vitoria + def_derrota;
    let taxa_vitoria_def = def_vitoria / rounds_jogados_def * 100;
    //Correção do NaN
    if(isNaN(taxa_vitoria)) {
        taxa_vitoria = 0;           
    }
    if(isNaN(taxa_vitoria_atk)) {
        taxa_vitoria_atk = 0;
    }
    if(isNaN(taxa_vitoria_def)) {
        taxa_vitoria_def = 0;
    }
    //Aplicação
    ptdas_jgdas = document.getElementById(ptda_txt).innerText = parseInt(partidas_jogadas);
    taxa_vitoria = document.getElementById(vitoria_txt).innerText = parseInt(taxa_vitoria) + '%';
    taxa_derrota = document.getElementById(atk_txt).innerText = parseInt(taxa_vitoria_atk) + '%';
    taxa_defesa = document.getElementById(def_txt).innerText = parseInt(taxa_vitoria_def) + '%';
    banimentos = document.getElementById(ban_txt).innerText = parseInt(banimentos);
}

// Vitoria -> Derrota -> Vitoria DEF -> Derrota DEF -> Vitoria ATK -> Derrota ATK

//Covil
mapa(0, 0,      0, 0,      0, 0,      0, 'covil_pt_jgdas', 'covil_taxa_vit', 'covil_taxa_vit_atk', 'covil_taxa_vit_def', 'covil_ban');



//Laboratório
mapa(1, 0,      2, 1,      2, 0,      0,'lab_pt_jgdas', 'lab_taxa_vit', 'lab_taxa_vit_atk', 'lab_taxa_vit_def', 'lab_ban');



//Planície Esmeralda
mapa(0, 0,      0, 0,      0, 0,      1, 'plan_pt_jgdas', 'plan_taxa_vit', 'plan_taxa_vit_atk', 'plan_taxa_vit_def', 'plan_ban');



//Banco
mapa(0, 0,      0, 0,      0, 0,      0, 'banco_pt_jgdas', 'banco_taxa_vit', 'banco_taxa_vit_atk', 'banco_taxa_vit_def', 'banco_ban');

// Vitoria -> Derrota -> Vitoria DEF -> Derrota DEF -> Vitoria ATK -> Derrota ATK

//Fronteira
mapa(2, 0,      5, 2,      4, 2,      0, 'front_pt_jgdas', 'front_taxa_vit', 'front_taxa_vit_atk', 'front_taxa_vit_def', 'front_ban');



//Chalé
mapa(0, 0,      0, 0,      0, 0,      0, 'chale_pt_jgdas', 'chale_taxa_vit', 'chale_taxa_vit_atk', 'chale_taxa_vit_def', 'chale_ban');



//Clube
mapa(0, 0,      0, 0,      0, 0,      0, 'clube_pt_jgdas', 'clube_taxa_vit', 'clube_taxa_vit_atk', 'clube_taxa_vit_def', 'clube_ban');



//Litoral
mapa(0, 0,      0, 0,      0, 0,      0, 'litoral_pt_jgdas', 'litoral_taxa_vit', 'litoral_taxa_vit_atk', 'litoral_taxa_vit_def', 'litoral_ban');

// Vitoria -> Derrota -> Vitoria DEF -> Derrota DEF -> Vitoria ATK -> Derrota ATK

//Consulado
mapa(0, 0,      0, 0,      0, 0,      0, 'consu_pt_jgdas', 'consu_taxa_vit', 'consu_taxa_vit_atk', 'consu_taxa_vit_def', 'consu_ban');



//Café Dostoyevsky
mapa(0, 0,      0, 0,      0, 0,      0, 'cafe_pt_jgdas', 'cafe_taxa_vit', 'cafe_taxa_vit_atk', 'cafe_taxa_vit_def', 'cafe_ban');



//Canal
mapa(0, 0,      0, 0,      0, 0,      0, 'canal_pt_jgdas', 'canal_taxa_vit', 'canal_taxa_vit_atk', 'canal_taxa_vit_def', 'canal_ban');



//Oregon
mapa(0, 0,      0, 0,      0, 0,      0, 'oregon_pt_jgdas', 'oregon_taxa_vit', 'oregon_taxa_vit_atk', 'oregon_taxa_vit_def', 'oregon_ban');



// Vitoria -> Derrota -> Vitoria DEF -> Derrota DEF -> Vitoria ATK -> Derrota ATK

//Outback
mapa(0, 0,      0, 0,      0, 0,      0, 'out_pt_jgdas', 'out_taxa_vit', 'out_taxa_vit_atk', 'out_taxa_vit_def', 'out_ban');



//Arranha-céu
mapa(0, 0,      0, 0,      0, 0,      1, 'arranha_pt_jgdas', 'arranha_taxa_vit', 'arranha_taxa_vit_atk', 'arranha_taxa_vit_def', 'arranha_ban');



//Parque Tematico
mapa(0, 0,      0, 0,      0, 0,      1, 'parque_pt_jgdas', 'parque_taxa_vit', 'parque_taxa_vit_atk', 'parque_taxa_vit_def', 'parque_ban');



//Mansão
mapa(0, 0,      0, 0,      0, 0,      0, 'mansao_pt_jgdas', 'mansao_taxa_vit', 'mansao_taxa_vit_atk', 'mansao_taxa_vit_def', 'mansao_ban');

// Vitoria -> Derrota -> Vitoria DEF -> Derrota DEF -> Vitoria ATK -> Derrota AT