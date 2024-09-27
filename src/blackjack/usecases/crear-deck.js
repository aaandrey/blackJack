import _ from 'underscore';

// export const miNombre = 'Andrey';

/**
 * Esta funciona crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo : ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if (!Array.isArray(tiposDeCarta) || tiposDeCarta.some(tipo => typeof tipo !== 'string')) {
        throw new Error('TiposDeCarta tiene que ser un arreglo de strings');
    }
    if (!Array.isArray(tiposEspeciales) || tiposEspeciales.some(tipo => typeof tipo !== 'string')) {
        throw new Error('TiposEspeciales tiene que ser un arreglo de strings');
    }

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

// export default crearDeck;