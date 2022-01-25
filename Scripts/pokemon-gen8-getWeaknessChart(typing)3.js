/* INPUT <string> typing -- format of 'type' or 'type/type'
*  OUTPUT <string> -- the typings weakness chart
*
*  example: > 'steel/ghost'
*  < 'Super Weak: -- | Weak: Fire, Ground | Resists: Grass, Ice, Flying, Psychic, Rock,
*     Dragon, Steel, Fairy | Super Resists: Bug | Immune: Normal, Fighting, Poison'
*/

const chart = {
  'normal': {
    'normal': 1,
    'fire': 1,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 1,
    'fighting': 1,
    'poison': 1,
    'ground': 1,
    'flying': 1,
    'psychic': 1,
    'bug': 1,
    'rock': 0.5,
    'ghost': 0,
    'dragon': 1,
    'dark': 1,
    'steel': 0.5,
    'fairy': 1
  },
  'fire': {
    'normal': 1,
    'fire': 0.5,
    'water': 0.5,
    'electric': 1,
    'grass': 2,
    'ice': 2,
    'fighting': 1,
    'poison': 1,
    'ground': 1,
    'flying': 1,
    'psychic': 1,
    'bug': 2,
    'rock': 0.5,
    'ghost': 1,
    'dragon': 0.5,
    'dark': 1,
    'steel': 2,
    'fairy': 1
  },
  'water': {
    'normal': 1,
    'fire': 2,
    'water': 0.5,
    'electric': 1,
    'grass': 0.5,
    'ice': 1,
    'fighting': 1,
    'poison': 1,
    'ground': 2,
    'flying': 1,
    'psychic': 1,
    'bug': 1,
    'rock': 2,
    'ghost': 1,
    'dragon': 0.5,
    'dark': 1,
    'steel': 1,
    'fairy': 1
  },
  'electric': {
    'normal': 1,
    'fire': 1,
    'water': 2,
    'electric': 0.5,
    'grass': 0.5,
    'ice': 1,
    'fighting': 1,
    'poison': 1,
    'ground': 0,
    'flying': 2,
    'psychic': 1,
    'bug': 1,
    'rock': 1,
    'ghost': 1,
    'dragon': 0.5,
    'dark': 1,
    'steel': 1,
    'fairy': 1
  },
  'grass': {
    'normal': 1,
    'fire': 0.5,
    'water': 2,
    'electric': 1,
    'grass': 0.5,
    'ice': 1,
    'fighting': 1,
    'poison': 0.5,
    'ground': 2,
    'flying': 0.5,
    'psychic': 1,
    'bug': 0.5,
    'rock': 2,
    'ghost': 1,
    'dragon': 0.5,
    'dark': 1,
    'steel': 0.5,
    'fairy': 1
  },
  'ice': {
    'normal': 1,
    'fire': 0.5,
    'water': 0.5,
    'electric': 1,
    'grass': 2,
    'ice': 0.5,
    'fighting': 1,
    'poison': 1,
    'ground': 2,
    'flying': 2,
    'psychic': 1,
    'bug': 1,
    'rock': 1,
    'ghost': 1,
    'dragon': 2,
    'dark': 1,
    'steel': 0.5,
    'fairy': 1
  },
  'fighting': {
    'normal': 2,
    'fire': 1,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 2,
    'fighting': 1,
    'poison': 0.5,
    'ground': 1,
    'flying': 0.5,
    'psychic': 0.5,
    'bug': 0.5,
    'rock': 2,
    'ghost': 0,
    'dragon': 1,
    'dark': 2,
    'steel': 2,
    'fairy': 0.5
  },
  'poison': {
    'normal': 1,
    'fire': 1,
    'water': 1,
    'electric': 1,
    'grass': 2,
    'ice': 1,
    'fighting': 1,
    'poison': 0.5,
    'ground': 0.5,
    'flying': 1,
    'psychic': 1,
    'bug': 1,
    'rock': 0.5,
    'ghost': 0.5,
    'dragon': 1,
    'dark': 1,
    'steel': 0,
    'fairy': 2
  },
  'ground': {
    'normal': 1,
    'fire': 2,
    'water': 1,
    'electric': 2,
    'grass': 0.5,
    'ice': 1,
    'fighting': 1,
    'poison': 2,
    'ground': 1,
    'flying': 0,
    'psychic': 1,
    'bug': 0.5,
    'rock': 2,
    'ghost': 1,
    'dragon': 1,
    'dark': 1,
    'steel': 2,
    'fairy': 1
  },
  'flying': {
    'normal': 1,
    'fire': 1,
    'water': 1,
    'electric': 0.5,
    'grass': 2,
    'ice': 1,
    'fighting': 2,
    'poison': 1,
    'ground': 1,
    'flying': 1,
    'psychic': 1,
    'bug': 2,
    'rock': 0.5,
    'ghost': 1,
    'dragon': 1,
    'dark': 1,
    'steel': 0.5,
    'fairy': 1
  },
  'psychic': {
    'normal': 1,
    'fire': 1,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 1,
    'fighting': 2,
    'poison': 2,
    'ground': 1,
    'flying': 1,
    'psychic': 0.5,
    'bug': 1,
    'rock': 1,
    'ghost': 1,
    'dragon': 1,
    'dark': 0,
    'steel': 0.5,
    'fairy': 1
  },
  'bug': {
    'normal': 1,
    'fire': 0.5,
    'water': 1,
    'electric': 1,
    'grass': 2,
    'ice': 1,
    'fighting': 0.5,
    'poison': 0.5,
    'ground': 1,
    'flying': 0.5,
    'psychic': 2,
    'bug': 1,
    'rock': 1,
    'ghost': 0.5,
    'dragon': 1,
    'dark': 2,
    'steel': 0.5,
    'fairy': 0.5
  },
  'rock': {
    'normal': 1,
    'fire': 2,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 2,
    'fighting': 0.5,
    'poison': 1,
    'ground': 0.5,
    'flying': 2,
    'psychic': 1,
    'bug': 2,
    'rock': 1,
    'ghost': 1,
    'dragon': 1,
    'dark': 1,
    'steel': 0.5,
    'fairy': 1
  },
  'ghost': {
    'normal': 0,
    'fire': 1,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 1,
    'fighting': 1,
    'poison': 1,
    'ground': 1,
    'flying': 1,
    'psychic': 2,
    'bug': 1,
    'rock': 1,
    'ghost': 2,
    'dragon': 1,
    'dark': 0.5,
    'steel': 0.5,
    'fairy': 1
  },
  'dragon': {
    'normal': 1,
    'fire': 1,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 1,
    'fighting': 1,
    'poison': 1,
    'ground': 1,
    'flying': 1,
    'psychic': 1,
    'bug': 1,
    'rock': 1,
    'ghost': 1,
    'dragon': 2,
    'dark': 1,
    'steel': 0.5,
    'fairy': 0
  },
  'dark': {
    'normal': 1,
    'fire': 1,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 1,
    'fighting': 0.5,
    'poison': 1,
    'ground': 1,
    'flying': 1,
    'psychic': 2,
    'bug': 1,
    'rock': 1,
    'ghost': 2,
    'dragon': 1,
    'dark': 0.5,
    'steel': 0.5,
    'fairy': 0.5
  },
  'steel': {
    'normal': 1,
    'fire': 0.5,
    'water': 0.5,
    'electric': 0.5,
    'grass': 1,
    'ice': 2,
    'fighting': 1,
    'poison': 1,
    'ground': 1,
    'flying': 1,
    'psychic': 1,
    'bug': 1,
    'rock': 2,
    'ghost': 1,
    'dragon': 1,
    'dark': 1,
    'steel': 0.5,
    'fairy': 2
  },
  'fairy': {
    'normal': 1,
    'fire': 0.5,
    'water': 1,
    'electric': 1,
    'grass': 1,
    'ice': 1,
    'fighting': 2,
    'poison': 0.5,
    'ground': 1,
    'flying': 1,
    'psychic': 1,
    'bug': 1,
    'rock': 1,
    'ghost': 1,
    'dragon': 2,
    'dark': 2,
    'steel': 0.5,
    'fairy': 1
  }
};
const types = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy'
];

const formatType = (type) => ' ' + type.charAt(0).toUpperCase() + type.slice(1);
const weaknesses = { 'weak': [], 'weak+': [], 'resist': [], 'resist+': [], 'immune': [] };

try {
  if (!typing) throw new Error('Give valid typing. Examples: \'fighting\' or \'steel/dragon\'.');
  const parsedInput = typing.toLowerCase().replaceAll('%2f', '/').split('/');
  if (parsedInput.length > 2) throw new Error('Too many typings!');
  const typeOne = parsedInput[0];
  const typeTwo = parsedInput.length >= 2 ? parsedInput[1] : null;
  if (typeOne === typeTwo) throw new Error('Pokemon can\'t be dual type, of the same type!');
  parsedInput.forEach( value => {
    if(!types.includes(value)) throw new Error('Invalid Pokemon Type: '+ value);
  });
  types.forEach( type => {
    const val = chart[type][typeOne] * (typeTwo ? chart[type][typeTwo] : 1);
    const formatedType = formatType(type);

    if(val === 0) { weaknesses['immune'].push(formatedType) }
    else if(val === 0.25) { weaknesses['resist+'].push(formatedType) }
    else if(val === 0.5) { weaknesses['resist'].push(formatedType) }
    else if(val === 2) { weaknesses['weak'].push(formatedType) }
    else if(val === 4) { weaknesses['weak+'].push(formatedType) }
  });

  const noneString = ' --';
  const output = 'Super Weak:' + (weaknesses['weak+'].length ? weaknesses['weak+'] : noneString) + ' | '
    + 'Weak:' + (weaknesses['weak'].length ? weaknesses['weak'] : noneString) + ' | '
    + 'Resists:' + (weaknesses['resist'].length ? weaknesses['resist'] : noneString) + ' | '
    + 'Super Resists:' + (weaknesses['resist+'].length ? weaknesses['resist+'] : noneString) + ' | '
    + 'Immune:' + (weaknesses['immune'].length ? weaknesses['immune'] : noneString);

  output;
} catch(e) {
  e.message;
}
