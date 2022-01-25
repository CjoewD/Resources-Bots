# Resources-Bots
Provides resources and scripts for bots.
## Nightbot
https://nightbot.tv/
### pokemon-gen8-get-chain-chance:
`
!commands add !chaincheck $(eval try{if(!$(1)||isNaN($(1))||$(1)<=0||$(1)>250) {throw new Error();} else {let decimalFix = 1; let decimalCalc = ((1-.07)**$(1))*10000; while(decimalCalc<10){decimalCalc*=10; decimalFix*=10;}; 'If you do everything right, you have about a ' + Math.round(decimalCalc)/(100*decimalFix)  + '% chance to reach a chain of $(1)!'}}catch(e){'Need a valid number from 1 to 250.'})
`
>\> !chaincheck 40
>
>If you do everything right, you have about a 5.49% chance to reach a chain of 40!
### pokemon-gen8-get-weakness-chart:
`
!commands add !typecheck $(eval typing="$(querystring)";$(urlfetch json https://raw.githubusercontent.com/CjoewD/Resources-Bots/master/Scripts/pokemon-gen8-get-weakness-chart.js))
`
>\> !typecheck steel/ghost
> 
>Super Weak: -- | Weak: Fire, Ground, Ghost, Dark | Resists: Grass, Ice, Flying, Psychic, Rock, Dragon, Steel, Fairy | Super Resists: Bug | Immune: Normal, Fighting, Poison
