function identidade<T>(valor: T): T {
    return valor;
}

let numero = identidade(10);  // T é inferido como number
let texto = identidade("Olá");  // T é inferido como string
