//Union Types
let valor: string | number;
valor = "texto";
valor = 10;


//Intersection Types
interface A {
    a: string;
}
interface B {
    b: number;
}
type C = A & B;  // Tipo C deve ter tanto "a" quanto "b"

//Tipo Literal
let cor: "vermelho" | "azul";
cor = "vermelho";  // Válido
cor = "verde";  // Erro
