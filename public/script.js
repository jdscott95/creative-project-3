Vue.component('star-rating', VueStarRating.default);
let app = new Vue({
  el: '#app',
  data: {
    number: 25,
    max: '',
    current: {
      name: '',
      id: '',
      types: '',
      height: '',
      weight: '',
      img: '',
      alt: ''
    },
    pokedexNumber: '',
    pokemonName: '',
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    ratings: {},
  },
  created() {
    this.xkcd();
  },
  computed: {
    findPokedexNumber() {
      var pokedexArray = new Array;
pokedexArray[0] = "";
pokedexArray[1] = 'bulbasaur';
pokedexArray[2] =  'ivysaur';
pokedexArray[3] =  'venusaur';
pokedexArray[4] =  'charmander';
pokedexArray[5] =  'charmeleon';
pokedexArray[6] =  'charizard';
pokedexArray[7] =  'squirtle';
pokedexArray[8] =  'wartortle';
pokedexArray[9] =  'blastoise';
pokedexArray[10] =  'caterpie';
pokedexArray[11] =  'metapod';
pokedexArray[12] =  'butterfree';
pokedexArray[13] =  'weedle';
pokedexArray[14] =  'kakuna';
pokedexArray[15] =  'beedrill';
pokedexArray[16] =  'pidgey';
pokedexArray[17] =  'pidgeotto';
pokedexArray[18] =  'pidgeot';
pokedexArray[19] =  'rattata';
pokedexArray[20] =  'raticate';
pokedexArray[21] =  'spearow';
pokedexArray[22] =  'fearow';
pokedexArray[23] =  'ekans';
pokedexArray[24] =  'arbok';
pokedexArray[25] =  'pikachu';
pokedexArray[26] =  'raichu';
pokedexArray[27] =  'sandshrew';
pokedexArray[28] =  'sandslash';
pokedexArray[29] =  'nidoran';
pokedexArray[30] =  'nidorina';
pokedexArray[31] =  'nidoqueen';
pokedexArray[32] =  'nidoran';
pokedexArray[33] =  'nidorino';
pokedexArray[34] =  'nidoking';
pokedexArray[35] =  'clefairy';
pokedexArray[36] =  'clefable';
pokedexArray[37] =  'vulpix';
pokedexArray[38] =  'ninetales';
pokedexArray[39] =  'jigglypuff';
pokedexArray[40] =  'wigglytuff';
pokedexArray[41] =  'zubat';
pokedexArray[42] =  'golbat';
pokedexArray[43] =  'oddish';
pokedexArray[44] =  'gloom';
pokedexArray[45] =  'vileplume';
pokedexArray[46] =  'paras';
pokedexArray[47] =  'parasect';
pokedexArray[48] =  'venonat';
pokedexArray[49] =  'venomoth';
pokedexArray[50] =  'diglett';
pokedexArray[51] =  'dugtrio';
pokedexArray[52] =  'meowth';
pokedexArray[53] =  'persian';
pokedexArray[54] =  'psyduck';
pokedexArray[55] =  'golduck';
pokedexArray[56] =  'mankey';
pokedexArray[57] =  'primeape';
pokedexArray[58] =  'growlithe';
pokedexArray[59] =  'arcanine';
pokedexArray[60] =  'poliwag';
pokedexArray[61] =  'poliwhirl';
pokedexArray[62] =  'poliwrath';
pokedexArray[63] =  'abra';
pokedexArray[64] =  'kadabra';
pokedexArray[65] =  'alakazam';
pokedexArray[66] =  'machop';
pokedexArray[67] =  'machoke';
pokedexArray[68] =  'machamp';
pokedexArray[69] =  'bellsprout';
pokedexArray[70] =  'weepinbell';
pokedexArray[71] =  'victreebel';
pokedexArray[72] =  'tentacool';
pokedexArray[73] =  'tentacruel';
pokedexArray[74] =  'geodude';
pokedexArray[75] =  'graveler';
pokedexArray[76] =  'golem';
pokedexArray[77] =  'ponyta';
pokedexArray[78] =  'rapidash';
pokedexArray[79] =  'slowpoke';
pokedexArray[80] =  'slowbro';
pokedexArray[81] =  'magnemite';
pokedexArray[82] =  'magneton';
pokedexArray[83] =  'farfetch’d';
pokedexArray[84] =  'doduo';
pokedexArray[85] =  'dodrio';
pokedexArray[86] =  'seel';
pokedexArray[87] =  'dewgong';
pokedexArray[88] =  'grimer';
pokedexArray[89] =  'muk';
pokedexArray[90] =  'shellder';
pokedexArray[91] =  'cloyster';
pokedexArray[92] =  'gastly';
pokedexArray[93] =  'haunter';
pokedexArray[94] =  'gengar';
pokedexArray[95] =  'onix';
pokedexArray[96] =  'drowzee';
pokedexArray[97] =  'hypno';
pokedexArray[98] =  'krabby';
pokedexArray[99] =  'kingler';
pokedexArray[100] =  'voltorb';
pokedexArray[101] =  'electrode';
pokedexArray[102] =  'exeggcute';
pokedexArray[103] =  'exeggutor';
pokedexArray[104] =  'cubone';
pokedexArray[105] =  'marowak';
pokedexArray[106] =  'hitmonlee';
pokedexArray[107] =  'hitmonchan';
pokedexArray[108] =  'lickitung';
pokedexArray[109] =  'koffing';
pokedexArray[110] =  'weezing';
pokedexArray[111] =  'rhyhorn';
pokedexArray[112] =  'rhydon';
pokedexArray[113] =  'chansey';
pokedexArray[114] =  'tangela';
pokedexArray[115] =  'kangaskhan';
pokedexArray[116] =  'horsea';
pokedexArray[117] =  'seadra';
pokedexArray[118] =  'goldeen';
pokedexArray[119] =  'seaking';
pokedexArray[120] =  'staryu';
pokedexArray[121] =  'starmie';
pokedexArray[122] =  'mr-mime';
pokedexArray[123] =  'scyther';
pokedexArray[124] =  'jynx';
pokedexArray[125] =  'electabuzz';
pokedexArray[126] =  'magmar';
pokedexArray[127] =  'pinsir';
pokedexArray[128] =  'tauros';
pokedexArray[129] =  'magikarp';
pokedexArray[130] =  'gyarados';
pokedexArray[131] =  'lapras';
pokedexArray[132] =  'ditto';
pokedexArray[133] =  'eevee';
pokedexArray[134] =  'vaporeon';
pokedexArray[135] =  'jolteon';
pokedexArray[136] =  'flareon';
pokedexArray[137] =  'porygon';
pokedexArray[138] =  'omanyte';
pokedexArray[139] =  'omastar';
pokedexArray[140] =  'kabuto';
pokedexArray[141] =  'kabutops';
pokedexArray[142] =  'aerodactyl';
pokedexArray[143] =  'snorlax';
pokedexArray[144] =  'articuno';
pokedexArray[145] =  'zapdos';
pokedexArray[146] =  'moltres';
pokedexArray[147] =  'dratini';
pokedexArray[148] =  'dragonair';
pokedexArray[149] =  'dragonite';
pokedexArray[150] =  'mewtwo';
pokedexArray[151] =  'mew';
pokedexArray[152] =  'chikorita';
pokedexArray[153] =  'bayleef';
pokedexArray[154] =  'meganium';
pokedexArray[155] =  'cyndaquil';
pokedexArray[156] =  'quilava';
pokedexArray[157] =  'typhlosion';
pokedexArray[158] =  'totodile';
pokedexArray[159] =  'croconaw';
pokedexArray[160] =  'feraligatr';
pokedexArray[161] =  'sentret';
pokedexArray[162] =  'furret';
pokedexArray[163] =  'hoothoot';
pokedexArray[164] =  'noctowl';
pokedexArray[165] =  'ledyba';
pokedexArray[166] =  'ledian';
pokedexArray[167] =  'spinarak';
pokedexArray[168] =  'ariados';
pokedexArray[169] =  'crobat';
pokedexArray[170] =  'chinchou';
pokedexArray[171] =  'lanturn';
pokedexArray[172] =  'pichu';
pokedexArray[173] =  'cleffa';
pokedexArray[174] =  'igglybuff';
pokedexArray[175] =  'togepi';
pokedexArray[176] =  'togetic';
pokedexArray[177] =  'natu';
pokedexArray[178] =  'xatu';
pokedexArray[179] =  'mareep';
pokedexArray[180] =  'flaaffy';
pokedexArray[181] =  'ampharos';
pokedexArray[182] =  'bellossom';
pokedexArray[183] =  'marill';
pokedexArray[184] =  'azumarill';
pokedexArray[185] =  'sudowoodo';
pokedexArray[186] =  'politoed';
pokedexArray[187] =  'hoppip';
pokedexArray[188] =  'skiploom';
pokedexArray[189] =  'jumpluff';
pokedexArray[190] =  'aipom';
pokedexArray[191] =  'sunkern';
pokedexArray[192] =  'sunflora';
pokedexArray[193] =  'yanma';
pokedexArray[194] =  'wooper';
pokedexArray[195] =  'quagsire';
pokedexArray[196] =  'espeon';
pokedexArray[197] =  'umbreon';
pokedexArray[198] =  'murkrow';
pokedexArray[199] =  'slowking';
pokedexArray[200] =  'misdreavus';
pokedexArray[201] =  'unown';
pokedexArray[202] =  'wobbuffet';
pokedexArray[203] =  'girafarig';
pokedexArray[204] =  'pineco';
pokedexArray[205] =  'forretress';
pokedexArray[206] =  'dunsparce';
pokedexArray[207] =  'gligar';
pokedexArray[208] =  'steelix';
pokedexArray[209] =  'snubbull';
pokedexArray[210] =  'granbull';
pokedexArray[211] =  'qwilfish';
pokedexArray[212] =  'scizor';
pokedexArray[213] =  'shuckle';
pokedexArray[214] =  'heracross';
pokedexArray[215] =  'sneasel';
pokedexArray[216] =  'teddiursa';
pokedexArray[217] =  'ursaring';
pokedexArray[218] =  'slugma';
pokedexArray[219] =  'magcargo';
pokedexArray[220] =  'swinub';
pokedexArray[221] =  'piloswine';
pokedexArray[222] =  'corsola';
pokedexArray[223] =  'remoraid';
pokedexArray[224] =  'octillery';
pokedexArray[225] =  'delibird';
pokedexArray[226] =  'mantine';
pokedexArray[227] =  'skarmory';
pokedexArray[228] =  'houndour';
pokedexArray[229] =  'houndoom';
pokedexArray[230] =  'kingdra';
pokedexArray[231] =  'phanpy';
pokedexArray[232] =  'donphan';
pokedexArray[233] =  'porygon2';
pokedexArray[234] =  'stantler';
pokedexArray[235] =  'smeargle';
pokedexArray[236] =  'tyrogue';
pokedexArray[237] =  'hitmontop';
pokedexArray[238] =  'smoochum';
pokedexArray[239] =  'elekid';
pokedexArray[240] =  'magby';
pokedexArray[241] =  'miltank';
pokedexArray[242] =  'blissey';
pokedexArray[243] =  'raikou';
pokedexArray[244] =  'entei';
pokedexArray[245] =  'suicune';
pokedexArray[246] =  'larvitar';
pokedexArray[247] =  'pupitar';
pokedexArray[248] =  'tyranitar';
pokedexArray[249] =  'lugia';
pokedexArray[250] =  'ho-oh';
pokedexArray[251] =  'celebi';
pokedexArray[252] =  'treecko';
pokedexArray[253] =  'grovyle';
pokedexArray[254] =  'sceptile';
pokedexArray[255] =  'torchic';
pokedexArray[256] =  'combusken';
pokedexArray[257] =  'blaziken';
pokedexArray[258] =  'mudkip';
pokedexArray[259] =  'marshtomp';
pokedexArray[260] =  'swampert';
pokedexArray[261] =  'poochyena';
pokedexArray[262] =  'mightyena';
pokedexArray[263] =  'zigzagoon';
pokedexArray[264] =  'linoone';
pokedexArray[265] =  'wurmple';
pokedexArray[266] =  'silcoon';
pokedexArray[267] =  'beautifly';
pokedexArray[268] =  'cascoon';
pokedexArray[269] =  'dustox';
pokedexArray[270] =  'lotad';
pokedexArray[271] =  'lombre';
pokedexArray[272] =  'ludicolo';
pokedexArray[273] =  'seedot';
pokedexArray[274] =  'nuzleaf';
pokedexArray[275] =  'shiftry';
pokedexArray[276] =  'taillow';
pokedexArray[277] =  'swellow';
pokedexArray[278] =  'wingull';
pokedexArray[279] =  'pelipper';
pokedexArray[280] =  'ralts';
pokedexArray[281] =  'kirlia';
pokedexArray[282] =  'gardevoir';
pokedexArray[283] =  'surskit';
pokedexArray[284] =  'masquerain';
pokedexArray[285] =  'shroomish';
pokedexArray[286] =  'breloom';
pokedexArray[287] =  'slakoth';
pokedexArray[288] =  'vigoroth';
pokedexArray[289] =  'slaking';
pokedexArray[290] =  'nincada';
pokedexArray[291] =  'ninjask';
pokedexArray[292] =  'shedinja';
pokedexArray[293] =  'whismur';
pokedexArray[294] =  'loudred';
pokedexArray[295] =  'exploud';
pokedexArray[296] =  'makuhita';
pokedexArray[297] =  'hariyama';
pokedexArray[298] =  'azurill';
pokedexArray[299] =  'nosepass';
pokedexArray[300] =  'skitty';
pokedexArray[301] =  'delcatty';
pokedexArray[302] =  'sableye';
pokedexArray[303] =  'mawile';
pokedexArray[304] =  'aron';
pokedexArray[305] =  'lairon';
pokedexArray[306] =  'aggron';
pokedexArray[307] =  'meditite';
pokedexArray[308] =  'medicham';
pokedexArray[309] =  'electrike';
pokedexArray[310] =  'manectric';
pokedexArray[311] =  'plusle';
pokedexArray[312] =  'minun';
pokedexArray[313] =  'volbeat';
pokedexArray[314] =  'illumise';
pokedexArray[315] =  'roselia';
pokedexArray[316] =  'gulpin';
pokedexArray[317] =  'swalot';
pokedexArray[318] =  'carvanha';
pokedexArray[319] =  'sharpedo';
pokedexArray[320] =  'wailmer';
pokedexArray[321] =  'wailord';
pokedexArray[322] =  'numel';
pokedexArray[323] =  'camerupt';
pokedexArray[324] =  'torkoal';
pokedexArray[325] =  'spoink';
pokedexArray[326] =  'grumpig';
pokedexArray[327] =  'spinda';
pokedexArray[328] =  'trapinch';
pokedexArray[329] =  'vibrava';
pokedexArray[330] =  'flygon';
pokedexArray[331] =  'cacnea';
pokedexArray[332] =  'cacturne';
pokedexArray[333] =  'swablu';
pokedexArray[334] =  'altaria';
pokedexArray[335] =  'zangoose';
pokedexArray[336] =  'seviper';
pokedexArray[337] =  'lunatone';
pokedexArray[338] =  'solrock';
pokedexArray[339] =  'barboach';
pokedexArray[340] =  'whiscash';
pokedexArray[341] =  'corphish';
pokedexArray[342] =  'crawdaunt';
pokedexArray[343] =  'baltoy';
pokedexArray[344] =  'claydol';
pokedexArray[345] =  'lileep';
pokedexArray[346] =  'cradily';
pokedexArray[347] =  'anorith';
pokedexArray[348] =  'armaldo';
pokedexArray[349] =  'feebas';
pokedexArray[350] =  'milotic';
pokedexArray[351] =  'castform';
pokedexArray[352] =  'kecleon';
pokedexArray[353] =  'shuppet';
pokedexArray[354] =  'banette';
pokedexArray[355] =  'duskull';
pokedexArray[356] =  'dusclops';
pokedexArray[357] =  'tropius';
pokedexArray[358] =  'chimecho';
pokedexArray[359] =  'absol';
pokedexArray[360] =  'wynaut';
pokedexArray[361] =  'snorunt';
pokedexArray[362] =  'glalie';
pokedexArray[363] =  'spheal';
pokedexArray[364] =  'sealeo';
pokedexArray[365] =  'walrein';
pokedexArray[366] =  'clamperl';
pokedexArray[367] =  'huntail';
pokedexArray[368] =  'gorebyss';
pokedexArray[369] =  'relicanth';
pokedexArray[370] =  'luvdisc';
pokedexArray[371] =  'bagon';
pokedexArray[372] =  'shelgon';
pokedexArray[373] =  'salamence';
pokedexArray[374] =  'beldum';
pokedexArray[375] =  'metang';
pokedexArray[376] =  'metagross';
pokedexArray[377] =  'regirock';
pokedexArray[378] =  'regice';
pokedexArray[379] =  'registeel';
pokedexArray[380] =  'latias';
pokedexArray[381] =  'latios';
pokedexArray[382] =  'kyogre';
pokedexArray[383] =  'groudon';
pokedexArray[384] =  'rayquaza';
pokedexArray[385] =  'jirachi';
pokedexArray[386] =  'deoxys';
pokedexArray[387] =  'turtwig';
pokedexArray[388] =  'grotle';
pokedexArray[389] =  'torterra';
pokedexArray[390] =  'chimchar';
pokedexArray[391] =  'monferno';
pokedexArray[392] =  'infernape';
pokedexArray[393] =  'piplup';
pokedexArray[394] =  'prinplup';
pokedexArray[395] =  'empoleon';
pokedexArray[396] =  'starly';
pokedexArray[397] =  'staravia';
pokedexArray[398] =  'staraptor';
pokedexArray[399] =  'bidoof';
pokedexArray[400] =  'bibarel';
pokedexArray[401] =  'kricketot';
pokedexArray[402] =  'kricketune';
pokedexArray[403] =  'shinx';
pokedexArray[404] =  'luxio';
pokedexArray[405] =  'luxray';
pokedexArray[406] =  'budew';
pokedexArray[407] =  'roserade';
pokedexArray[408] =  'cranidos';
pokedexArray[409] =  'rampardos';
pokedexArray[410] =  'shieldon';
pokedexArray[411] =  'bastiodon';
pokedexArray[412] =  'burmy';
pokedexArray[413] =  'wormadam';
pokedexArray[414] =  'mothim';
pokedexArray[415] =  'combee';
pokedexArray[416] =  'vespiquen';
pokedexArray[417] =  'pachirisu';
pokedexArray[418] =  'buizel';
pokedexArray[419] =  'floatzel';
pokedexArray[420] =  'cherubi';
pokedexArray[421] =  'cherrim';
pokedexArray[422] =  'shellos';
pokedexArray[423] =  'gastrodon';
pokedexArray[424] =  'ambipom';
pokedexArray[425] =  'drifloon';
pokedexArray[426] =  'drifblim';
pokedexArray[427] =  'buneary';
pokedexArray[428] =  'lopunny';
pokedexArray[429] =  'mismagius';
pokedexArray[430] =  'honchkrow';
pokedexArray[431] =  'glameow';
pokedexArray[432] =  'purugly';
pokedexArray[433] =  'chingling';
pokedexArray[434] =  'stunky';
pokedexArray[435] =  'skuntank';
pokedexArray[436] =  'bronzor';
pokedexArray[437] =  'bronzong';
pokedexArray[438] =  'bonsly';
pokedexArray[439] =  'mime-jr';
pokedexArray[440] =  'happiny';
pokedexArray[441] =  'chatot';
pokedexArray[442] =  'spiritomb';
pokedexArray[443] =  'gible';
pokedexArray[444] =  'gabite';
pokedexArray[445] =  'garchomp';
pokedexArray[446] =  'munchlax';
pokedexArray[447] =  'riolu';
pokedexArray[448] =  'lucario';
pokedexArray[449] =  'hippopotas';
pokedexArray[450] =  'hippowdon';
pokedexArray[451] =  'skorupi';
pokedexArray[452] =  'drapion';
pokedexArray[453] =  'croagunk';
pokedexArray[454] =  'toxicroak';
pokedexArray[455] =  'carnivine';
pokedexArray[456] =  'finneon';
pokedexArray[457] =  'lumineon';
pokedexArray[458] =  'mantyke';
pokedexArray[459] =  'snover';
pokedexArray[460] =  'abomasnow';
pokedexArray[461] =  'weavile';
pokedexArray[462] =  'magnezone';
pokedexArray[463] =  'lickilicky';
pokedexArray[464] =  'rhyperior';
pokedexArray[465] =  'tangrowth';
pokedexArray[466] =  'electivire';
pokedexArray[467] =  'magmortar';
pokedexArray[468] =  'togekiss';
pokedexArray[469] =  'yanmega';
pokedexArray[470] =  'leafeon';
pokedexArray[471] =  'glaceon';
pokedexArray[472] =  'gliscor';
pokedexArray[473] =  'mamoswine';
pokedexArray[474] =  'porygon-z';
pokedexArray[475] =  'gallade';
pokedexArray[476] =  'probopass';
pokedexArray[477] =  'dusknoir';
pokedexArray[478] =  'froslass';
pokedexArray[479] =  'rotom';
pokedexArray[480] =  'uxie';
pokedexArray[481] =  'mesprit';
pokedexArray[482] =  'azelf';
pokedexArray[483] =  'dialga';
pokedexArray[484] =  'palkia';
pokedexArray[485] =  'heatran';
pokedexArray[486] =  'regigigas';
pokedexArray[487] =  'giratina';
pokedexArray[488] =  'cresselia';
pokedexArray[489] =  'phione';
pokedexArray[490] =  'manaphy';
pokedexArray[491] =  'darkrai';
pokedexArray[492] =  'shaymin';
pokedexArray[493] =  'arceus';
pokedexArray[494] =  'victini';
pokedexArray[495] =  'snivy';
pokedexArray[496] =  'servine';
pokedexArray[497] =  'serperior';
pokedexArray[498] =  'tepig';
pokedexArray[499] =  'pignite';
pokedexArray[500] =  'emboar';
pokedexArray[501] =  'oshawott';
pokedexArray[502] =  'dewott';
pokedexArray[503] =  'samurott';
pokedexArray[504] =  'patrat';
pokedexArray[505] =  'watchog';
pokedexArray[506] =  'lillipup';
pokedexArray[507] =  'herdier';
pokedexArray[508] =  'stoutland';
pokedexArray[509] =  'purrloin';
pokedexArray[510] =  'liepard';
pokedexArray[511] =  'pansage';
pokedexArray[512] =  'simisage';
pokedexArray[513] =  'pansear';
pokedexArray[514] =  'simisear';
pokedexArray[515] =  'panpour';
pokedexArray[516] =  'simipour';
pokedexArray[517] =  'munna';
pokedexArray[518] =  'musharna';
pokedexArray[519] =  'pidove';
pokedexArray[520] =  'tranquill';
pokedexArray[521] =  'unfezant';
pokedexArray[522] =  'blitzle';
pokedexArray[523] =  'zebstrika';
pokedexArray[524] =  'roggenrola';
pokedexArray[525] =  'boldore';
pokedexArray[526] =  'gigalith';
pokedexArray[527] =  'woobat';
pokedexArray[528] =  'swoobat';
pokedexArray[529] =  'drilbur';
pokedexArray[530] =  'excadrill';
pokedexArray[531] =  'audino';
pokedexArray[532] =  'timburr';
pokedexArray[533] =  'gurdurr';
pokedexArray[534] =  'conkeldurr';
pokedexArray[535] =  'tympole';
pokedexArray[536] =  'palpitoad';
pokedexArray[537] =  'seismitoad';
pokedexArray[538] =  'throh';
pokedexArray[539] =  'sawk';
pokedexArray[540] =  'sewaddle';
pokedexArray[541] =  'swadloon';
pokedexArray[542] =  'leavanny';
pokedexArray[543] =  'venipede';
pokedexArray[544] =  'whirlipede';
pokedexArray[545] =  'scolipede';
pokedexArray[546] =  'cottonee';
pokedexArray[547] =  'whimsicott';
pokedexArray[548] =  'petilil';
pokedexArray[549] =  'lilligant';
pokedexArray[550] =  'basculin';
pokedexArray[551] =  'sandile';
pokedexArray[552] =  'krokorok';
pokedexArray[553] =  'krookodile';
pokedexArray[554] =  'darumaka';
pokedexArray[555] =  'darmanitan';
pokedexArray[556] =  'maractus';
pokedexArray[557] =  'dwebble';
pokedexArray[558] =  'crustle';
pokedexArray[559] =  'scraggy';
pokedexArray[560] =  'scrafty';
pokedexArray[561] =  'sigilyph';
pokedexArray[562] =  'yamask';
pokedexArray[563] =  'cofagrigus';
pokedexArray[564] =  'tirtouga';
pokedexArray[565] =  'carracosta';
pokedexArray[566] =  'archen';
pokedexArray[567] =  'archeops';
pokedexArray[568] =  'trubbish';
pokedexArray[569] =  'garbodor';
pokedexArray[570] =  'zorua';
pokedexArray[571] =  'zoroark';
pokedexArray[572] =  'minccino';
pokedexArray[573] =  'cinccino';
pokedexArray[574] =  'gothita';
pokedexArray[575] =  'gothorita';
pokedexArray[576] =  'gothitelle';
pokedexArray[577] =  'solosis';
pokedexArray[578] =  'duosion';
pokedexArray[579] =  'reuniclus';
pokedexArray[580] =  'ducklett';
pokedexArray[581] =  'swanna';
pokedexArray[582] =  'vanillite';
pokedexArray[583] =  'vanillish';
pokedexArray[584] =  'vanilluxe';
pokedexArray[585] =  'deerling';
pokedexArray[586] =  'sawsbuck';
pokedexArray[587] =  'emolga';
pokedexArray[588] =  'karrablast';
pokedexArray[589] =  'escavalier';
pokedexArray[590] =  'foongus';
pokedexArray[591] =  'amoonguss';
pokedexArray[592] =  'frillish';
pokedexArray[593] =  'jellicent';
pokedexArray[594] =  'alomomola';
pokedexArray[595] =  'joltik';
pokedexArray[596] =  'galvantula';
pokedexArray[597] =  'ferroseed';
pokedexArray[598] =  'ferrothorn';
pokedexArray[599] =  'klink';
pokedexArray[600] =  'klang';
pokedexArray[601] =  'klinklang';
pokedexArray[602] =  'tynamo';
pokedexArray[603] =  'eelektrik';
pokedexArray[604] =  'eelektross';
pokedexArray[605] =  'elgyem';
pokedexArray[606] =  'beheeyem';
pokedexArray[607] =  'litwick';
pokedexArray[608] =  'lampent';
pokedexArray[609] =  'chandelure';
pokedexArray[610] =  'axew';
pokedexArray[611] =  'fraxure';
pokedexArray[612] =  'haxorus';
pokedexArray[613] =  'cubchoo';
pokedexArray[614] =  'beartic';
pokedexArray[615] =  'cryogonal';
pokedexArray[616] =  'shelmet';
pokedexArray[617] =  'accelgor';
pokedexArray[618] =  'stunfisk';
pokedexArray[619] =  'mienfoo';
pokedexArray[620] =  'mienshao';
pokedexArray[621] =  'druddigon';
pokedexArray[622] =  'golett';
pokedexArray[623] =  'golurk';
pokedexArray[624] =  'pawniard';
pokedexArray[625] =  'bisharp';
pokedexArray[626] =  'bouffalant';
pokedexArray[627] =  'rufflet';
pokedexArray[628] =  'braviary';
pokedexArray[629] =  'vullaby';
pokedexArray[630] =  'mandibuzz';
pokedexArray[631] =  'heatmor';
pokedexArray[632] =  'durant';
pokedexArray[633] =  'deino';
pokedexArray[634] =  'zweilous';
pokedexArray[635] =  'hydreigon';
pokedexArray[636] =  'larvesta';
pokedexArray[637] =  'volcarona';
pokedexArray[638] =  'cobalion';
pokedexArray[639] =  'terrakion';
pokedexArray[640] =  'virizion'
pokedexArray[641] =  'tornadus';
pokedexArray[642] =  'thundurus';
pokedexArray[643] =  'reshiram';
pokedexArray[644] =  'zekrom';
pokedexArray[645] =  'landorus';
pokedexArray[646] =  'kyurem';
pokedexArray[647] =  'keldeo';
pokedexArray[648] =  'meloetta';
pokedexArray[649] =  'genesect';
pokedexArray[650] =  'chespin';
pokedexArray[651] =  'quilladin';
pokedexArray[652] =  'chesnaught';
pokedexArray[653] =  'fennekin';
pokedexArray[654] =  'braixen';
pokedexArray[655] =  'delphox';
pokedexArray[656] =  'froakie'
pokedexArray[657] =  'frogadier'
pokedexArray[658] =  'greninja';
pokedexArray[659] =  'bunnelby';
pokedexArray[660] =  'diggersby';
pokedexArray[661] =  'fletchling';
pokedexArray[662] =  'fletchinder';
pokedexArray[663] =  'talonflame';
pokedexArray[664] =  'scatterbug';
pokedexArray[665] =  'spewpa'
pokedexArray[666] =  'vivillon';
pokedexArray[667] =  'litleo';
pokedexArray[668] =  'pyroar';
pokedexArray[669] =  'flabébé';
pokedexArray[670] =  'floette';
pokedexArray[671] =  'florges';
pokedexArray[672] =  'skiddo';
pokedexArray[673] =  'gogoat';
pokedexArray[674] =  'pancham';
pokedexArray[675] =  'pangoro';
pokedexArray[676] =  'furfrou'
pokedexArray[677] =  'espurr';
pokedexArray[678] =  'meowstic';
pokedexArray[679] =  'honedge';
pokedexArray[680] =  'doublade';
pokedexArray[681] =  'aegislash';
pokedexArray[682] =  'spritzee';
pokedexArray[683] =  'aromatisse';
pokedexArray[684] =  'swirlix';
pokedexArray[685] =  'slurpuff';
pokedexArray[686] =  'inkay'
pokedexArray[687] =  'malamar';
pokedexArray[688] =  'binacle';
pokedexArray[689] =  'barbaracle';
pokedexArray[690] =  'skrelp';
pokedexArray[691] =  'dragalge';
pokedexArray[692] =  'clauncher'
pokedexArray[693] =  'clawitzer';
pokedexArray[694] =  'helioptile';
pokedexArray[695] =  'heliolisk';
pokedexArray[696] =  'tyrunt';
pokedexArray[697] =  'tyrantrum';
pokedexArray[698] =  'amaura';
pokedexArray[699] =  'aurorus';
pokedexArray[700] =  'sylveon';
pokedexArray[701] =  'hawlucha';
pokedexArray[702] =  'dedenne';
pokedexArray[703] =  'carbink';
pokedexArray[704] =  'goomy';
pokedexArray[705] =  'sliggoo';
pokedexArray[706] =  'goodra';
pokedexArray[707] =  'klefki';
pokedexArray[708] =  'phantump';
pokedexArray[709] =  'trevenant';
pokedexArray[710] =  'pumpkaboo';
pokedexArray[711] =  'gourgeist';
pokedexArray[712] =  'bergmite';
pokedexArray[713] =  'avalugg';
pokedexArray[714] =  'noibat';
pokedexArray[715] =  'noivern';
pokedexArray[716] =  'xerneas';
pokedexArray[717] =  'yveltal';
pokedexArray[718] =  'zygarde';
pokedexArray[719] =  'diancie';
pokedexArray[720] =  'hoopa';
pokedexArray[721] =  'volcanion';
pokedexArray[722] =  'rowlet';
pokedexArray[723] =  'dartrix';
pokedexArray[724] =  'decidueye';
pokedexArray[725] =  'litten';
pokedexArray[726] =  'torracat';
pokedexArray[727] =  'incineroar';
pokedexArray[728] =  'popplio';
pokedexArray[729] =  'brionne';
pokedexArray[730] =  'primarina';
pokedexArray[731] =  'pikipek';
pokedexArray[732] =  'trumbeak';
pokedexArray[733] =  'toucannon';
pokedexArray[734] =  'yungoos';
pokedexArray[735] =  'gumshoos';
pokedexArray[736] =  'grubbin';
pokedexArray[737] =  'charjabug';
pokedexArray[738] =  'vikavolt';
pokedexArray[739] =  'crabrawler';
pokedexArray[740] =  'crabominable';
pokedexArray[741] =  'oricorio';
pokedexArray[742] =  'cutiefly';
pokedexArray[743] =  'ribombee';
pokedexArray[744] =  'rockruff';
pokedexArray[745] =  'lycanroc';
pokedexArray[746] =  'wishiwashi';
pokedexArray[747] =  'mareanie';
pokedexArray[748] =  'toxapex';
pokedexArray[749] =  'mudbray';
pokedexArray[750] =  'mudsdale';
pokedexArray[751] =  'dewpider';
pokedexArray[752] =  'araquanid';
pokedexArray[753] =  'fomantis';
pokedexArray[754] =  'lurantis';
pokedexArray[755] =  'morelull';
pokedexArray[756] =  'shiinotic';
pokedexArray[757] =  'salandit';
pokedexArray[758] =  'salazzle';
pokedexArray[759] =  'stufful';
pokedexArray[760] =  'bewear';
pokedexArray[761] =  'bounsweet';
pokedexArray[762] =  'steenee';
pokedexArray[763] =  'tsareena';
pokedexArray[764] =  'comfey';
pokedexArray[765] =  'oranguru';
pokedexArray[766] =  'passimian';
pokedexArray[767] =  'wimpod';
pokedexArray[768] =  'golisopod';
pokedexArray[769] =  'sandygast';
pokedexArray[770] =  'palossand';
pokedexArray[771] =  'pyukumuku';
pokedexArray[772] =  'type-null';
pokedexArray[773] =  'silvally';
pokedexArray[774] =  'minior';
pokedexArray[775] =  'komala';
pokedexArray[776] =  'turtonator';
pokedexArray[777] =  'togedemaru';
pokedexArray[778] =  'mimikyu';
pokedexArray[779] =  'bruxish';
pokedexArray[780] =  'drampa';
pokedexArray[781] =  'dhelmise';
pokedexArray[782] =  'jangmo-o';
pokedexArray[783] =  'hakamo-o';
pokedexArray[784] =  'kommo-o';
pokedexArray[785] =  'tapu-koko';
pokedexArray[786] =  'tapu-lele';
pokedexArray[787] =  'tapu-bulu';
pokedexArray[788] =  'tapu-fini';
pokedexArray[789] =  'cosmog';
pokedexArray[790] =  'cosmoem';
pokedexArray[791] =  'solgaleo';
pokedexArray[792] =  'lunala';
pokedexArray[793] =  'nihilego';
pokedexArray[794] =  'buzzwole';
pokedexArray[795] =  'pheromosa';
pokedexArray[796] =  'xurkitree';
pokedexArray[797] =  'celesteela';
pokedexArray[798] =  'kartana';
pokedexArray[799] =  'guzzlord';
pokedexArray[800] =  'necrozma';
pokedexArray[801] =  'magearna';
pokedexArray[802] =  'marshadow';
pokedexArray[803] =  'poipole';
pokedexArray[804] =  'naganadel';
pokedexArray[805] =  'stakataka';
pokedexArray[806] =  'blacephalon';
pokedexArray[807] =  'zeraora';
      var name = this.pokemonName;
      if (this.current.id === undefined)
        return '';
      for (let i = 0; i < pokedexArray.length; ++i)
      {
        if (pokedexArray[i] === name)
        {
          this.number = (i);
          this.pokemonName = '';
          this.pokedexNumber = '';
          return;
        }
      }
    },
    typesList() {
      var listString = '';
      if (this.current.types[0] === undefined)
      return listString;
      else{
        for (let i = 0; i < this.current.types[0].length; i++)
      {
        listString += this.current.types[i].type.name;
        listString += ', '

      }
      console.log(this.current.types[0].length);
      return string;
    }
  },
  image() {
    var imageString = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.current.id +'.png';
    return imageString;
  },
   average() {
     if (this.ratings[this.current.id] === undefined)
    return 0;
      var average = this.ratings[this.current.id].sum / this.ratings[this.current.id].total;
     return average;
   }
 },

 watch: {
   number(value, oldvalue) {
       this.max = 807;
       this.xkcd();
     }
   },
  methods: {
    async xkcd() {
     try {
       this.loading = true;
       const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.number);
       console.log(this.number);
       this.current = response.data;
       console.log(response.data);
       this.loading = false;
       this.number = response.data.id;
     } catch (error) {
       console.log(error);
     }
   },
  /* setPokemonName(){
     findPokedexNumber(this.pokemonName);
     this.number = this.pokedexNumber;
     this.pokemonName = '';
     this.pokedexNumber = '';
   },*/
   setPokemon(){
     this.number = this.pokedexNumber;
     this.pokedexNumber = '';
   },
   firstPokemon() {
        this.number = 1;
    },
   previousPokemon() {
      this.number = this.current.id - 1;
      if (this.number < 1)
        this.number = 1;
    },
    nextPokemon() {
      this.number = this.current.id + 1;
      if (this.number > 807)
       this.number = 807;
    },
    lastPokemon() {
         this.number = 807;
     },
    getRandom(min, max) {
      min = Math.ceil(1);
      max = Math.floor(807);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
    },
    randomPokemon() {
      this.number = this.getRandom(1, this.max);
    },
    addComment() {
       Vue.set(app.comments, this.number, new Array);
     this.comments[this.number].push({
       author: this.addedName,
       text: this.addedComment,
       date: moment().format('LLL')
  });
     this.addedName = '';
     this.addedComment = '';
   },
   setRating(rating){
     if (!(this.number in this.ratings))
       Vue.set(this.ratings, this.number, {
         sum: 0,
         total: 0
       });
     this.ratings[this.number].sum += rating;
     this.ratings[this.number].total += 1;
      // Handle the rating
    }
  }
});
