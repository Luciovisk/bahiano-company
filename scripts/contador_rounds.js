function limpar_dados() { 
    entradas = document.getElementsByClassName('placar');
    for (let index = 0; index < entradas.length; index++) {
        entradas[index].value = '';
    }
} 
function mapa (vitorias, derrotas, vitoria_defesa, derrota_defesa, vitoria_ataque, derrota_ataque, contador_partidas, taxa_vitorias, taxa_vitorias_defesa, taxa_vitorias_ataque) {
    let partidas_jogadas = vitorias + derrotas;
    let rounds_defesa = vitoria_defesa + derrota_defesa;
    let rounds_ataque = vitoria_ataque + derrota_ataque;
    document.getElementById(contador_partidas).innerText = partidas_jogadas;
    document.getElementById(taxa_vitorias).innerText = vitorias / partidas_jogadas * 100;
    document.getElementById(taxa_vitorias_defesa).innerText = vitoria_defesa / rounds_defesa;
    document.getElementById(taxa_vitorias_ataque).innerText = vitoria_ataque / rounds_ataque;
}
stats_covil = mapa (0, 0, 0, 0, 0, 0, 'covil_pt_jgdas', 'covil_taxa_vit', 'covil_taxa_vit_def', 'covil_taxa_vit_atk');
 
function adicionar_dados(){
    let mapa = document.getElementById('mapa_jogado').value;
    console.log(mapa);
}