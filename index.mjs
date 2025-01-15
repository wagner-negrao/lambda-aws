import { log } from './log.mjs';

export const handler = async(event) => {
    log('Variavel de ambiente: ' + process.env.MINHA_VAR)
    log('Log de execução após Github Action. event :' + JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify(event),
    };
};
