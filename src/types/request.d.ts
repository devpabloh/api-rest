// Quando a gente coloca um .d no nome do arquivo o próprio typescript já sabe que aquele arquivo é um arquivo de typagem e que a mesma vai funcionar de forma global.

declare namespace Express{
    export interface Request{ // Podemos utilizar o interface para adicionar coisas a interface que já vem na interface padrão da requisição
        user_id: string
        
    }
}