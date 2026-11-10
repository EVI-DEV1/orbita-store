export interface Game { id: string; title: string; genre: string; platform: string; price: number; oldPrice?: number; label: string; color: string; art: string; description: string; }
export const GAMES: readonly Game[] = [
 {id:'solaris',title:'Solaris: Além do Horizonte',genre:'Exploração',platform:'PS5',price:12990,oldPrice:19990,label:'Escolha da Órbita',color:'#e6aa71',art:'sun',description:'Siga os sinais de uma civilização esquecida em um deserto que guarda o último pôr do sol.'},
 {id:'mar-abissal',title:'Mar Abissal',genre:'Aventura',platform:'PS5',price:8990,oldPrice:11990,label:'−25%',color:'#64d9d0',art:'ocean',description:'Mergulhe em cidades submersas, decifre memórias e devolva a luz às profundezas.'},
 {id:'neon-drift',title:'Neon Drift',genre:'Corrida',platform:'PS4 / PS5',price:6990,label:'Adrenalina pura',color:'#ba9bff',art:'neon',description:'Domine curvas impossíveis nas ruas de uma metrópole que só desperta à noite.'},
 {id:'jardim-lunar',title:'Jardim Lunar',genre:'Simulação',platform:'PS5',price:4990,label:'Para desacelerar',color:'#c8df9e',art:'garden',description:'Cuide de um pequeno jardim em órbita e faça florescer encontros entre as estrelas.'},
 {id:'eco',title:'Eco das Montanhas',genre:'Aventura',platform:'PS4 / PS5',price:9990,label:'Nova descoberta',color:'#9fbde3',art:'mountain',description:'Uma carta antiga e uma trilha de vento conduzem sua viagem por paisagens silenciosas.'},
 {id:'satelite',title:'Satélite 09',genre:'Exploração',platform:'PS5',price:0,label:'Gratuito',color:'#edb2ce',art:'orbit',description:'Reconstrua os registros de uma estação abandonada em um pequeno mistério espacial.'}
];
export const money = (cents:number) => cents === 0 ? 'Gratuito' : new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cents/100);
export const normalize = (s:string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
