// ============================================================
//  CALCULUS LEVELING SYSTEM — Game Data
//  Módulos 0–3: Matemática Discreta + Cálculo I / II / III
// ============================================================

const GAME_DATA = {
  modules: [

    // ═══════════════════════════════════════════════════════
    //  MÓDULO 0 — MATEMÁTICA DISCRETA  (Rank F)
    //  Listas 7 → 12  |  Conteúdo da Prova
    // ═══════════════════════════════════════════════════════
    {
      id: "matdiscreta",
      title: "Mat. Discreta",
      rank: "F",
      rankColor: "#ec4899",
      subtitle: "Listas 7–12 · Conteúdo da Prova",
      icon: "Σ",
      totalXP: 620,
      skills: [

        // ── SKILL 1 ── Relações de Recorrência (Lista 7) ─────
        {
          id: "recorrencia",
          title: "Relações de Recorrência",
          icon: "↻",
          xp: 90,
          lessons: [
            {
              id: "rec_modelagem",
              theory: {
                title: "Modelando Recorrências",
                explanation: `Uma relação de recorrência descreve o termo aₙ em função dos termos ANTERIORES.

MACETE — 3 perguntas para modelar:
  1) Qual é o valor inicial? → condição inicial a₀ ou a₁
  2) Como o próximo termo muda em relação ao anterior?
  3) Tem multiplicação (×q) ou soma (+r)?

Tipos mais comuns:
  • Multiplicativo:  aₙ = q · aₙ₋₁          → cresce/cai em ×q
  • Aditivo:        aₙ = aₙ₋₁ + r           → soma constante
  • Misto:          aₙ = q · aₙ₋₁ + r       → combina os dois`,
                example: `LISTA 7 — Q1 (Bactérias):
"Colônia de 5.000 indivíduos triplica a cada hora."

→ Triplica = ×3 = multiplicativo.
→ Condição inicial: a₀ = 5.000

Relação:  aₙ = 3 · aₙ₋₁ ,  a₀ = 5.000

Verificando:
  a₁ = 3 × 5.000 = 15.000
  a₂ = 3 × 15.000 = 45.000  ✓

LISTA 7 — Q2 (Poupança):
"Depósito inicial R$500 + R$150/mês (sem juros)"

→ Soma constante de 150 = aditivo.
→ Condição inicial: a₀ = 500

Relação:  aₙ = aₙ₋₁ + 150 ,  a₀ = 500

Fórmula fechada: aₙ = 500 + 150n
Saldo após 10 meses = 500 + 150×10 = 2.000`,
                result: "aₙ = 500 + 150n  →  após 10 meses = R$ 2.000"
              },
              practice: {
                question: `LISTA 7 — Q6 (Investimento):
"Capital inicial R$200 dobra ao final de cada ano.
Após a duplicação, taxa fixa de R$50 é deduzida."

Relação:  Aₙ = 2·Aₙ₋₁ − 50 ,  A₀ = 200

Calcule manualmente A₁, A₂ e A₃:
  A₁ = 2×200 − 50 = ?
  A₂ = 2×A₁ − 50 = ?
  A₃ = 2×A₂ − 50 = ?

Qual é o valor de A₃?`,
                hint: "A₁ = 400−50 = 350. A₂ = 700−50 = 650. A₃ = 1300−50 = 1250.",
                answer: 1250,
                tolerance: 0.01
              }
            },
            {
              id: "rec_formula_fechada",
              theory: {
                title: "Fórmula Fechada — Substituição Regressiva",
                explanation: `A substituição regressiva "abre" a recorrência substituindo o termo anterior até chegar na condição inicial.

MACETE — Passo a passo:
  1) Escreva aₙ em função de aₙ₋₁
  2) Substitua aₙ₋₁ em função de aₙ₋₂
  3) Continue até aparecer o padrão
  4) Identifique a fórmula geral e substitua a condição inicial

TIPO MULTIPLICATIVO:  aₙ = q·aₙ₋₁  →  aₙ = a₀ · qⁿ
TIPO ADITIVO:         aₙ = aₙ₋₁ + r  →  aₙ = a₀ + n·r
TIPO MISTO:  aₙ = q·aₙ₋₁ + r
  → Ponto fixo: x = r/(1−q)
  → Solução: aₙ = C·qⁿ + r/(1−q)  onde C vem da cond. inicial`,
                example: `LISTA 7 — Q6 (Investimento):
Aₙ = 2·Aₙ₋₁ − 50 ,  A₀ = 200

Ponto fixo: x = −50/(1−2) = 50
Solução geral: Aₙ = C·2ⁿ + 50
Condição A₀:  C·1 + 50 = 200  →  C = 150

Fórmula fechada:  Aₙ = 150·2ⁿ + 50

Verificação:
  A₁ = 150·2 + 50 = 350  ✓
  A₃ = 150·8 + 50 = 1.250  ✓

LISTA 7 — Q7 (Árvore Binária):
Nₕ = 2·Nₕ₋₁ + 1 ,  N₀ = 1

Ponto fixo: x = 1/(1−2) = −1
Solução: Nₕ = C·2ʰ + (−1)
N₀ = C − 1 = 1  →  C = 2

Fórmula:  Nₕ = 2ʰ⁺¹ − 1`,
                result: "Nₕ = 2ʰ⁺¹ − 1  (nós da árvore binária perfeita)"
              },
              practice: {
                question: `LISTA 7 — Q7 (Árvore Binária Perfeita):
Fórmula fechada:  Nₕ = 2ʰ⁺¹ − 1

Uma árvore binária perfeita de altura h = 4
quantos nós totais possui?

(Use a fórmula diretamente)`,
                hint: "N₄ = 2^(4+1) − 1 = 2^5 − 1 = 32 − 1 = 31.",
                answer: 31,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 2 ── Progressão Aritmética (Lista 8) ───────
        {
          id: "progressao_aritmetica",
          title: "Progressão Aritmética (PA)",
          icon: "↗",
          xp: 90,
          lessons: [
            {
              id: "pa_termo_geral",
              theory: {
                title: "Termo Geral da PA",
                explanation: `Uma PA é uma sequência onde cada termo difere do anterior por uma RAZÃO CONSTANTE r.

FÓRMULAS ESSENCIAIS:
  • Termo geral:  aₙ = a₁ + (n−1)·r
  • Razão:        r = (aₙ − aₘ) / (n − m)   (entre dois termos)

MACETE — Quando você tem dois termos e quer achar r:
  r = (termo de índice maior − termo de índice menor)
      ÷ (diferença dos índices)

MACETE — Quando você tem S e relação entre termos:
  Sₙ = n·(a₁ + aₙ)/2  →  isole o que não sabe`,
                example: `LISTA 8 — Q1:
"PA com a₂₀ = 5 e a₆₀ = 13. Achar a₂₀₀."

Passo 1 — Ache r:
  r = (13 − 5) / (60 − 20) = 8 / 40 = 0,2

Passo 2 — Ache a₁:
  a₁ = a₂₀ − (20−1)·r = 5 − 19×0,2 = 1,2

Passo 3 — Ache a₂₀₀:
  a₂₀₀ = 1,2 + (200−1)×0,2 = 1,2 + 39,8 = 41  ✓

LISTA 8 — Q7 (S + relação entre termos):
"S₁₁ = 176  e  a₁₁ = a₁ + 30"
  S₁₁ = 11(a₁+a₁₁)/2 = 176  →  a₁+a₁₁ = 32
  Como a₁₁ = a₁+30:  2a₁+30 = 32  →  a₁ = 1
  r = 30/(11−1) = 3   →   aₙ = 3n − 2`,
                result: "a₂₀₀ = 41  |  aₙ = 3n − 2"
              },
              practice: {
                question: `LISTA 8 — Q7:
A fórmula do termo geral é  aₙ = 3n − 2.

Calcule o valor de a₁₅.

Qual é o resultado?`,
                hint: "a₁₅ = 3(15) − 2 = 45 − 2 = 43.",
                answer: 43,
                tolerance: 0.01
              }
            },
            {
              id: "pa_soma",
              theory: {
                title: "Soma dos Termos da PA",
                explanation: `FÓRMULA DA SOMA (Gauss):
  Sₙ = n · (a₁ + aₙ) / 2
  Sₙ = n · (2a₁ + (n−1)r) / 2

MACETE VISUAL: Sₙ = QUANTIDADE × MÉDIA DOS EXTREMOS

COMO USAR:
  1) Identifique a₁ (primeiro) e aₙ (último)
  2) Conte quantos termos: n = (aₙ − a₁)/r + 1
  3) Aplique: Sₙ = n(a₁ + aₙ)/2`,
                example: `LISTA 8 — Q2:
"Soma dos números pares entre 1 e 101"
Pares: 2, 4, 6, …, 100

a₁=2, aₙ=100, r=2
n = (100−2)/2 + 1 = 50 termos

S₅₀ = 50 × (2+100) / 2 = 50 × 51 = 2.550  ✓

LISTA 8 — Q10:
"Soma dos inteiros entre 50 e 350 com unidade = 1"
Sequência: 51, 61, 71, …, 341  (r=10)

n = (341−51)/10 + 1 = 30 termos
S₃₀ = 30 × (51+341) / 2 = 30 × 196 = 5.880  ✓`,
                result: "S₅₀ = 2.550  |  S₃₀ = 5.880"
              },
              practice: {
                question: `LISTA 8 — Q9 (Números Triangulares):
"Tₙ é o n-ésimo número triangular."
T₁=1, T₂=3, T₃=6, T₄=10, …

Perceba que Tₙ = 1 + 2 + 3 + ... + n
(é a soma de PA com a₁=1, aₙ=n, r=1)

Fórmula direta:  Tₙ = n(n+1)/2

Qual é o valor de T₁₀₀?`,
                hint: "T₁₀₀ = 100 × 101 / 2 = 5.050.",
                answer: 5050,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 3 ── Progressão Geométrica (Lista 8) ───────
        {
          id: "progressao_geometrica",
          title: "Progressão Geométrica (PG)",
          icon: "×",
          xp: 90,
          lessons: [
            {
              id: "pg_termo_geral",
              theory: {
                title: "Termo Geral da PG",
                explanation: `Uma PG multiplica cada termo pelo mesmo fator q (razão).

FÓRMULAS ESSENCIAIS:
  • Termo geral:  aₙ = a₁ · q^(n−1)
  • Entre dois termos:  aₙ = aₘ · q^(n−m)
  • Ache q: q^(n−m) = aₙ / aₘ → isole q

MACETE — Para achar a₁ dado aₙ e q:
  a₁ = aₙ / q^(n−1)

MACETE — Para achar q dado a₁ e aₙ:
  q^(n−1) = aₙ/a₁ → q = (aₙ/a₁)^(1/(n−1))`,
                example: `LISTA 8 — Q17:
"PG com a₄=64 e q=2. Achar a₁."
  a₄ = a₁ · 2³  →  64 = 8a₁  →  a₁ = 8  ✓

LISTA 8 — Q18:
"PG com a₁=4 e a₄=4.000. Achar q."
  a₄ = a₁·q³  →  4.000 = 4·q³  →  q³ = 1.000  →  q = 10  ✓

LISTA 8 — Q19:
"PG com a₅=32 e a₈=256. Achar a₁ e q."
  a₈ = a₅·q³  →  256 = 32·q³  →  q³=8  →  q=2
  a₅ = a₁·q⁴  →  32 = a₁·16  →  a₁=2  ✓`,
                result: "Q17: a₁=8 | Q18: q=10 | Q19: a₁=2, q=2"
              },
              practice: {
                question: `LISTA 8 — Q13:
"A sequência (1, a, ...) é uma PG.
O nono termo é 256."

a₁ = 1  e  a₉ = 256

Use: a₉ = a₁ · q^(9−1) = 1 · q⁸ = 256

256 = 2⁸, então q = ?

Qual é o valor da razão q?`,
                hint: "q⁸ = 256 = 2⁸. Portanto q = 2.",
                answer: 2,
                tolerance: 0.01
              }
            },
            {
              id: "pg_soma",
              theory: {
                title: "Soma dos Termos da PG",
                explanation: `FÓRMULA DA SOMA (q ≠ 1):
  Sₙ = a₁ · (qⁿ − 1) / (q − 1)

MACETE — Se q = 2:  Sₙ = a₁·(2ⁿ − 1)
MACETE — Se q = 3:  Sₙ = a₁·(3ⁿ − 1)/2

COMO ACHAR n QUANDO VOCÊ TEM Sₙ:
  1) Substitua na fórmula
  2) Isole qⁿ
  3) Identifique a potência (por tentativa ou logaritmo)

PROPRIEDADE ÚTIL (Q11):
  Se dois grupos de termos têm razão constante:
  (aₘ + aₘ₊₁) / (aₖ + aₖ₊₁) = q^(m−k)`,
                example: `LISTA 8 — Q12:
"S₉ da PG (1, 2, 4, 8, …)"
a₁=1, q=2:
  S₉ = 1·(2⁹−1)/(2−1) = (512−1)/1 = 511  ✓

LISTA 8 — Q15:
"PG 1,3,9,27,… Soma = 3.280. Quantos termos?"
a₁=1, q=3:
  Sₙ = 1·(3ⁿ−1)/2 = 3.280
  3ⁿ−1 = 6.560  →  3ⁿ = 6.561
  3¹=3, 3²=9, 3⁴=81, 3⁸=6.561  →  n = 8  ✓

LISTA 8 — Q11:
"a₁+a₂=3 e a₄+a₅=24"
  (a₄+a₅) = (a₁+a₂)·q³
  24 = 3·q³  →  q³=8  →  q=2  ✓`,
                result: "Q12: 511 | Q15: 8 termos | Q11: q=2"
              },
              practice: {
                question: `LISTA 8 — Q16:
Calcule a soma dos 7 primeiros termos da PG:
(8 ; 4 ; 2 ; 1 ; 1/2 ; ...)

a₁ = 8  e  q = 1/2

Use:  Sₙ = a₁ · (qⁿ − 1) / (q − 1)

O resultado é uma fração. Se S₇ = p/q, calcule p+q.
(Resposta esperada: S₇ como decimal arredondado a 3 casas)`,
                hint: "S₇ = 8·(1−(1/2)^7)/(1−1/2) = 8·(127/128)/(1/2) = 8·127/64 = 127/8 = 15.875.",
                answer: 15.875,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 4 ── Funções — Conceito (Lista 9) ──────────
        {
          id: "funcoes_conceito",
          title: "Funções: Conceito",
          icon: "f→",
          xp: 80,
          lessons: [
            {
              id: "func_definicao",
              theory: {
                title: "O que é Função + Injetora/Sobrejetora",
                explanation: `DEFINIÇÃO: f: A → B é função se cada x de A tem EXATAMENTE UM par y em B.

O QUE QUEBRA uma função:
  ✗ Um x com dois y diferentes: {(1,2),(1,3)} → NÃO é função
  ✓ Dois x com o mesmo y: {(1,2),(2,2)} → É função

CLASSIFICAÇÃO:
  INJETORA:    x₁ ≠ x₂  implica  f(x₁) ≠ f(x₂)
               Cada y tem no máximo 1 pré-imagem.

  SOBREJETORA: todo y do contradomínio é atingido por algum x.
               Im(f) = contradomínio inteiro.

  BIJETORA:    injetora + sobrejetora ao mesmo tempo.

MACETE VISUAL:
  f(x)=2x de ℤ→ℤ:
  • Injetora? SIM (x diferentes → y diferentes)
  • Sobrejetora? NÃO (y=1 não tem pré-imagem, 1 é ímpar)

DOMÍNIO:
  Fração → denominador ≠ 0
  Raiz par → expressão dentro ≥ 0
  Polinômio → Dom = ℝ (sempre)`,
                example: `LISTA 9 — Q1b (y = 2x de ℤ→ℤ):
  É função: cada x → exatamente um y=2x  ✓
  Injetora: 2x₁=2x₂ → x₁=x₂  ✓
  NÃO sobrejetora: Im={pares} ≠ ℤ
  Inversa: f⁻¹(y) = y/2

LISTA 9 — Q1d ({(x,y)|x·y=0}):
  x=0 mapearia para qualquer y (0·0=0, 0·1=0, ...)
  → NÃO é função ✗

LISTA 9 — Q6a (f(x)=2x de ℤ→ℤ):
  Injetora. NÃO sobrejetora.`,
                result: "f(x)=2x: injetora, NÃO sobrejetora. Dom=ℤ, Im={pares}"
              },
              practice: {
                question: `LISTA 9 — Q4c:
f: ℕ → ℕ  dada por  f(x) = (x+1)·(x+1)

Calcule f(2).

Substitua x=2 na expressão.`,
                hint: "f(2) = (2+1)·(2+1) = 3·3 = 9.",
                answer: 9,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 5 ── Funções: Aplicações (Listas 10 e 11) ──
        {
          id: "funcoes_aplicacoes",
          title: "Avaliação & Composição",
          icon: "⊕",
          xp: 100,
          lessons: [
            {
              id: "func_avaliacao",
              theory: {
                title: "Avaliar Funções, Domínio e Inversa",
                explanation: `AVALIAR f(a): substitua x = a na expressão.
MACETE — Troque x pelo valor, USE PARÊNTESES para não errar sinal!

  f(x) = −2x + 3
  f(−4) = −2·(−4) + 3 = 8 + 3 = 11  ← parênteses salvam!

INVERSA — "desfaz" a função:
  1) Escreva y = f(x)
  2) Isole x em função de y
  3) Troque x e y (f⁻¹(x))

DOMÍNIO — regras rápidas:
  √(expr) → expr ≥ 0
  1/expr  → expr ≠ 0
  √(expr)/denom → combine as duas regras`,
                example: `LISTA 11 — Q1 (f(x) = −2x + 3):
  f(1) = −2(1) + 3 = 1      ✓
  f(0) = −2(0) + 3 = 3      ✓
  f(1/3) = −2/3 + 3 = 7/3   ✓

LISTA 10 — Q15a (f(x) = 3x + 5):
Achar f⁻¹(x):
  y = 3x + 5
  y − 5 = 3x
  x = (y − 5) / 3

  f⁻¹(x) = (x − 5) / 3

Verificação:  f⁻¹(8) = (8−5)/3 = 1
  f(1) = 3(1)+5 = 8  ✓ (f⁻¹ desfaz f corretamente!)`,
                result: "f⁻¹(x) = (x−5)/3  |  f⁻¹(8) = 1"
              },
              practice: {
                question: `LISTA 11 — Q5:
"Dada f(x) = ax + 2, determine a para que f(4) = 22."

Substitua x=4:
  f(4) = a·(4) + 2 = 22

Isole a e resolva.

Qual é o valor de a?`,
                hint: "4a + 2 = 22 → 4a = 20 → a = 5.",
                answer: 5,
                tolerance: 0.01
              }
            },
            {
              id: "func_composicao",
              theory: {
                title: "Função Composta  (f∘g)(x) = f(g(x))",
                explanation: `ORDEM IMPORTA:  f∘g ≠ g∘f em geral!

MACETE — leia de DENTRO pra FORA:
  (f∘g)(x) → "primeiro calcula g(x), depois aplica f"
  (g∘f)(x) → "primeiro calcula f(x), depois aplica g"

PASSO A PASSO:
  1) Calcule o valor da função de DENTRO
  2) Use esse resultado como entrada da função de FORA

LISTA 10 — Q13a (compostas gerais):
f(x) = x²−3x , g(x) = x+2
  f(g(x)) = (x+2)² − 3(x+2) = x²+4x+4 − 3x−6 = x²+x−2
  g(f(x)) = (x²−3x) + 2 = x²−3x+2`,
                example: `LISTA 10 — Q12 (Valores numéricos):
f(x) = 3x+1  ,  g(x) = 2x²

Calcular f(g(−1)):
  g(−1) = 2·(−1)² = 2·1 = 2
  f(2)  = 3·2 + 1 = 7

Calcular g(f(−1)):
  f(−1) = 3·(−1) + 1 = −2
  g(−2) = 2·(−2)² = 2·4 = 8

RESULTADO:
  f(g(−1)) − g(f(−1)) = 7 − 8 = −1  ✓`,
                result: "f(g(−1)) − g(f(−1)) = −1"
              },
              practice: {
                question: `LISTA 10 — Q12:
f(x) = 3x + 1  e  g(x) = 2x²

Siga os passos:
  1) g(−1) = 2·(−1)² = ?
  2) f(resultado) = ?
  3) f(−1) = ?
  4) g(resultado) = ?

Calcule  f(g(−1)) − g(f(−1)).`,
                hint: "g(−1)=2, f(2)=7. f(−1)=−2, g(−2)=8. Resultado: 7−8 = −1.",
                answer: -1,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 6 ── Funções Linear & Quadrática (Lista 11) ─
        {
          id: "func_lin_quad",
          title: "Linear & Quadrática",
          icon: "∧",
          xp: 100,
          lessons: [
            {
              id: "func_linear",
              theory: {
                title: "Função Linear — Coeficientes e Gráfico",
                explanation: `f(x) = ax + b

  a = coeficiente angular (INCLINAÇÃO da reta)
      a > 0 → CRESCENTE  |  a < 0 → DECRESCENTE

  b = coeficiente linear (onde corta o eixo y)

INTERCEPTOS (onde a reta corta os eixos):
  Eixo y: x=0 → ponto (0, b)
  Eixo x: y=0 → 0=ax+b → x = −b/a

ACHAR a e b com DOIS PONTOS:
  Monte o sistema f(x₁)=y₁ e f(x₂)=y₂
  Subtraia as equações para eliminar b e achar a`,
                example: `LISTA 11 — Q4a:
"f(x)=ax+b, f(−1)=7 e f(2)=−1"

  Equação 1:  −a + b = 7
  Equação 2:  2a + b = −1
  Subtraia (1)−(2):  −3a = 8  →  a = −8/3
  b = 7 + a = 7 − 8/3 = 13/3

LISTA 11 — Q6a (y = 3x + 1):
  a=3 (crescente), b=1
  Intercepto y: (0, 1)
  Intercepto x: x = −1/3 → (−1/3, 0)
  f(2) = 7  ,  f(−1) = −2`,
                result: "Q4a: a = −8/3, b = 13/3  |  Q6a: crescente, interceptos (0,1) e (−1/3,0)"
              },
              practice: {
                question: `LISTA 11 — Q9:
"Custo fixo: R$5.000. Cada bolsa custa R$25 e vende por R$45.
Para lucro de R$4.000, quantas bolsas vender?"

Lucro por bolsa = 45 − 25 = R$20
Lucro total = 20x − 5.000 = 4.000

Isole x e resolva.

Quantas bolsas (x) devem ser vendidas?`,
                hint: "20x = 4.000 + 5.000 = 9.000. x = 9.000/20 = 450 bolsas.",
                answer: 450,
                tolerance: 0.01
              }
            },
            {
              id: "func_quadratica",
              theory: {
                title: "Função Quadrática — Vértice e Aplicações",
                explanation: `f(x) = ax² + bx + c  (parábola)

VÉRTICE — ponto extremo da parábola:
  xᵥ = −b / (2a)
  yᵥ = f(xᵥ)  →  substitua xᵥ na função

  a > 0 → abre pra CIMA (∪) → vértice é MÍNIMO
  a < 0 → abre pra BAIXO (∩) → vértice é MÁXIMO

MACETE — yᵥ sem calcular f(xᵥ):
  yᵥ = −Δ / (4a)   onde  Δ = b² − 4ac

RAÍZES: x = (−b ± √Δ) / (2a)

TANGENTE AO EIXO x: Δ = 0  (uma raiz dupla)`,
                example: `LISTA 11 — Q14 (Lançamento Vertical):
h(t) = 20t − 5t²   (a=−5, b=20)

a) Tempo da altura máxima:
   tᵥ = −20 / (2·(−5)) = 20/10 = 2 segundos

b) Altura máxima:
   h(2) = 20(2) − 5(4) = 40 − 20 = 20 metros

c) Quando volta ao solo (h=0):
   5t(4−t) = 0  →  t=0 ou t=4 segundos

LISTA 11 — Q10:
"y=x²−4x+k tem mínimo = 8"
  xᵥ = 4/2 = 2
  yᵥ = (2)² − 4(2) + k = k − 4 = 8
  k = 12  ✓`,
                result: "Q14: t_max=2s, h_max=20m, solo=4s  |  Q10: k=12"
              },
              practice: {
                question: `LISTA 11 — Q15:
"Lucro L(x) = −x² + 30x − 5 (x = qtd vendida)"

a) Qual o lucro máximo possível?

   Calcule o vértice: xᵥ = −30/(2·(−1)) = 15
   L(15) = −(15)² + 30(15) − 5 = ?`,
                hint: "L(15) = −225 + 450 − 5 = 220. Lucro máximo = R$220.",
                answer: 220,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 7 ── Derivadas (Lista 12) ──────────────────
        {
          id: "derivadas_discreta",
          title: "Derivadas",
          icon: "d/dx",
          xp: 170,
          lessons: [
            {
              id: "der_regras_basicas",
              theory: {
                title: "Regras Básicas de Derivação",
                explanation: `REGRAS ESSENCIAIS (LISTA 12):
  • Potência:     (xⁿ)' = n·xⁿ⁻¹          ← mais usada!
  • Constante:    (c)' = 0
  • Soma/Sub:     (f ± g)' = f' ± g'
  • Produto:      (f·g)' = f'·g + f·g'
  • Quociente:    (f/g)' = (f'g − fg') / g²

MACETE DA POTÊNCIA — "desce e subtrai 1":
  (x⁵)' = 5x⁴    (3x²)' = 6x    (x)' = 1    (7)' = 0

MACETE DO PRODUTO — "pega um, deriva o outro":
  (f·g)' = f'·g + f·g'   (dois termos, sempre!)

PARA SIMPLIFICAR: expanda e use a potência!
  k(x) = x²·(3x²−2x+5) = 3x⁴−2x³+5x²
  k'(x) = 12x³−6x²+10x   ← muito mais fácil`,
                example: `LISTA 12 — I.8 (k(x) = x²·(3x²−2x+5)):

MÉTODO — Expanda e derive:
  k(x) = 3x⁴ − 2x³ + 5x²
  k'(x) = 12x³ − 6x² + 10x

Calcule k'(2):
  k'(2) = 12(8) − 6(4) + 10(2)
        = 96 − 24 + 20 = 92  ✓

LISTA 12 — I.11 (f(x) = (4x+5)/(3x+2)):
Regra do quociente: f'/g = (f'g − fg')/g²
  f' = 4  ,  g' = 3
  = [4(3x+2) − (4x+5)·3] / (3x+2)²
  = [12x+8 − 12x−15] / (3x+2)²
  = −7 / (3x+2)²`,
                result: "k'(2) = 92  |  f'(x) = −7/(3x+2)²"
              },
              practice: {
                question: `LISTA 12 — I.5:
g(x) = (x³ − 7)(2x² + 3)

Passo 1 — Expanda:
  g(x) = 2x⁵ + 3x³ − 14x² − 21

Passo 2 — Derive (regra da potência):
  g'(x) = 10x⁴ + 9x² − 28x

Passo 3 — Calcule g'(1):
  g'(1) = 10(1)⁴ + 9(1)² − 28(1)

Qual é o resultado?`,
                hint: "g'(1) = 10 + 9 − 28 = 19 − 28 = −9.",
                answer: -9,
                tolerance: 0.01
              }
            },
            {
              id: "der_cadeia_aplicacoes",
              theory: {
                title: "Regra da Cadeia + Aplicações Reais",
                explanation: `REGRA DA CADEIA — Para composta h(x) = f(g(x)):
  h'(x) = f'(g(x)) · g'(x)

MACETE: "Deriva de fora, guarda de dentro, multiplica pela derivada de dentro"

EXEMPLOS RÁPIDOS (LISTA 12 — Seção II):
  F(x) = (x⁴+3x²−2)⁵
  F'(x) = 5(x⁴+3x²−2)⁴ · (4x³+6x)

  g(x) = 1/(x²+1)³ = (x²+1)⁻³
  g'(x) = −3(x²+1)⁻⁴ · 2x = −6x/(x²+1)⁴

APLICAÇÕES — Taxa de variação (Seção III):
  s(t) = posição  →  v(t) = s'(t) = velocidade
  r(t) = raio     →  dr/dt = taxa de variação do raio
  V = volume      →  dV/ds = taxa do volume por unidade`,
                example: `LISTA 12 — III.1 (Balão Meteorológico):
s(t) = 6 + 2t + t²

v(t) = s'(t) = 2 + 2t   (derive!)

  t=1: v = 2+2(1) = 4 m/s   ✓
  t=4: v = 2+2(4) = 10 m/s  ✓
  t=8: v = 2+2(8) = 18 m/s  ✓

LISTA 12 — III.6 (Mergulhador):
s(t) = −16t² + 16t + 32 = 0

Divide por −16:  t² − t − 2 = 0
Fatora:  (t−2)(t+1) = 0  →  t = 2 s  ✓

Velocidade: v(t) = s'(t) = −32t + 16
  v(2) = −64 + 16 = −48 pés/s  ✓`,
                result: "v(4)=10 m/s | Mergulhador: t=2s, v(2)=−48 pés/s"
              },
              practice: {
                question: `LISTA 12 — III.7 (Volume do Cubo):
"O volume de um cubo de aresta s é V = s³."

Calcule a taxa de variação do volume
em relação a s quando s = 4 cm.

Derive: dV/ds = ?
Avalie em s = 4.`,
                hint: "dV/ds = 3s². Em s=4: 3×(4²) = 3×16 = 48 cm³/cm.",
                answer: 48,
                tolerance: 0.01
              }
            }
          ]
        }

      ] // skills (matdiscreta)
    }, // módulo 0

    // ═══════════════════════════════════════════════════════
    //  MÓDULO 1 — CÁLCULO I  (Rank E)
    // ═══════════════════════════════════════════════════════
    {
      id: "calc1",
      title: "Cálculo I",
      rank: "E",
      rankColor: "#00e5ff",
      subtitle: "Limites, Derivadas & Integrais",
      icon: "∂",
      totalXP: 500,
      skills: [
        {
          id: "limites_intro",
          title: "Limites: Conceito",
          icon: "⟶",
          xp: 60,
          lessons: [
            {
              id: "lim_01",
              theory: {
                title: "O que é um Limite?",
                explanation: `Um limite descreve o valor que f(x) SE APROXIMA quando x tende a 'a'.
Notação: lim f(x) = L  (x → a)

MACETE: substitua x = a diretamente.
  • Deu número → esse é o limite!
  • Deu 0/0 → fatore e cancele`,
                example: `lim (x²−1)/(x−1)  quando x → 1
Fatore: (x−1)(x+1)/(x−1) = x+1
lim (x+1) = 2  ✓`,
                result: "2"
              },
              practice: {
                question: `Calcule: lim (x²−4)/(x−2)  quando x → 2

Fatore: x²−4 = (x−2)(x+2)`,
                hint: "Cancele (x−2). Resta (x+2). Em x=2: 4.",
                answer: 4,
                tolerance: 0.01
              }
            },
            {
              id: "lim_lhopital",
              theory: {
                title: "L'Hôpital e Limites no Infinito",
                explanation: `L'HÔPITAL — Use quando dá 0/0 ou ∞/∞:
  lim f/g = lim f'/g'

LIMITES NO INFINITO — divida pelo maior grau:
  lim (5x³−x)/(2x³+7) = 5/2`,
                example: `lim (eˣ−1)/x  x→0: 0/0 → L'Hôpital
  Deriva: eˣ/1 = e⁰ = 1  ✓`,
                result: "1"
              },
              practice: {
                question: `Calcule: lim (5x³−x)/(2x³+7)  quando x→∞

Divida tudo por x³ e simplifique.`,
                hint: "(5−1/x²)/(2+7/x³). Quando x→∞: 5/2 = 2.5.",
                answer: 2.5,
                tolerance: 0.05
              }
            }
          ]
        },
        {
          id: "derivadas_regras",
          title: "Derivadas: Regras",
          icon: "Δ",
          xp: 80,
          lessons: [
            {
              id: "der_calc1_01",
              theory: {
                title: "Regras e Regra da Cadeia",
                explanation: `• Potência: (xⁿ)' = n·xⁿ⁻¹
• Produto: (f·g)' = f'g + fg'
• Quociente: (f/g)' = (f'g−fg')/g²
• Cadeia: (f(g(x)))' = f'(g(x))·g'(x)`,
                example: `f(x) = 4x³−2x²+7x−5
f'(x) = 12x²−4x+7

Cadeia: h(x) = (x²+3)⁵
h'(x) = 5(x²+3)⁴·2x = 10x(x²+3)⁴`,
                result: "f'(x) = 12x²−4x+7"
              },
              practice: {
                question: `f(x) = 5x⁴ − 3x² + 2x − 8

Calcule f'(1).`,
                hint: "f'(x) = 20x³−6x+2. f'(1) = 20−6+2 = 16.",
                answer: 16,
                tolerance: 0.01
              }
            }
          ]
        },
        {
          id: "integrais_intro",
          title: "Integrais",
          icon: "∫",
          xp: 90,
          lessons: [
            {
              id: "int_01",
              theory: {
                title: "Integral Indefinida e Teorema Fundamental",
                explanation: `• ∫xⁿ dx = xⁿ⁺¹/(n+1) + C
• Teorema: ∫ₐᵇ f(x)dx = F(b)−F(a)`,
                example: `∫(3x²+2x−5)dx = x³+x²−5x+C

∫₀² 3x²dx = [x³]₀² = 8  ✓`,
                result: "8"
              },
              practice: {
                question: `Calcule: ∫₁³ (2x+1) dx

F(x) = x²+x
Calcule F(3)−F(1).`,
                hint: "F(3)=12, F(1)=2. Resultado: 10.",
                answer: 10,
                tolerance: 0.01
              }
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    //  MÓDULO 2 — CÁLCULO II  (Rank D)
    // ═══════════════════════════════════════════════════════
    {
      id: "calc2",
      title: "Cálculo II",
      rank: "D",
      rankColor: "#a855f7",
      subtitle: "Integração e Séries",
      icon: "∬",
      totalXP: 700,
      skills: [
        {
          id: "tecnicas_int",
          title: "Técnicas de Integração",
          icon: "∿",
          xp: 100,
          lessons: [
            {
              id: "int_sub_01",
              theory: {
                title: "Substituição",
                explanation: `Para ∫f(g(x))·g'(x)dx:
  u=g(x), du=g'(x)dx → ∫f(u)du`,
                example: `∫2x·(x²+1)⁴dx:
u=x²+1, du=2xdx
∫u⁴du = u⁵/5 + C = (x²+1)⁵/5 + C  ✓`,
                result: "(x²+1)⁵/5 + C"
              },
              practice: {
                question: `∫3x²·(x³+2)⁴dx

Resultado: (x³+2)⁵/k + C. Qual é k?`,
                hint: "u=x³+2, du=3x²dx. ∫u⁴du=u⁵/5. k=5.",
                answer: 5,
                tolerance: 0.01
              }
            }
          ]
        },
        {
          id: "series",
          title: "Séries",
          icon: "Σ",
          xp: 120,
          lessons: [
            {
              id: "ser_01",
              theory: {
                title: "Séries Geométricas Infinitas",
                explanation: `Σ a·rⁿ (n=0→∞):
  |r|<1 → S = a/(1−r)
  |r|≥1 → diverge`,
                example: `Σ(1/2)ⁿ: S = 1/(1−1/2) = 2  ✓`,
                result: "S = 2"
              },
              practice: {
                question: `Σ 2·(1/4)ⁿ (n=0→∞)

S = a/(1−r) com a=2, r=1/4.`,
                hint: "S = 2/(3/4) = 8/3 ≈ 2.667.",
                answer: 2.667,
                tolerance: 0.01
              }
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    //  MÓDULO 3 — CÁLCULO III  (Rank C)
    // ═══════════════════════════════════════════════════════
    {
      id: "calc3",
      title: "Cálculo III",
      rank: "C",
      rankColor: "#f59e0b",
      subtitle: "Cálculo Multivariável",
      icon: "∭",
      totalXP: 900,
      skills: [
        {
          id: "deriv_parciais",
          title: "Derivadas Parciais",
          icon: "∂",
          xp: 100,
          lessons: [
            {
              id: "dp_01",
              theory: {
                title: "Derivada Parcial",
                explanation: `∂f/∂x: trate y como constante, derive em x
∂f/∂y: trate x como constante, derive em y`,
                example: `f(x,y)=x²y+3xy²
∂f/∂x = 2xy+3y²
∂f/∂y = x²+6xy`,
                result: "∂f/∂x = 2xy+3y²"
              },
              practice: {
                question: `f(x,y) = x³+4x²y−y³

∂f/∂x = 3x²+8xy

Calcule em (1,2).`,
                hint: "3(1)+8(1)(2) = 3+16 = 19.",
                answer: 19,
                tolerance: 0.01
              }
            }
          ]
        },
        {
          id: "integrais_duplas",
          title: "Integrais Duplas",
          icon: "∬",
          xp: 120,
          lessons: [
            {
              id: "id_01",
              theory: {
                title: "Integrais Iteradas",
                explanation: `∬f(x,y)dA = ∫ₐᵇ[∫_c^d f(x,y)dy]dx
Integre de dentro para fora.`,
                example: `∫₀¹∫₀²(x+y)dydx
Interno: [xy+y²/2]₀² = 2x+2
Externo: [x²+2x]₀¹ = 3  ✓`,
                result: "3"
              },
              practice: {
                question: `Calcule: ∫₀¹∫₀¹(2x+3y)dydx`,
                hint: "Interno: 2x+3/2. Externo: 1+3/2 = 2.5.",
                answer: 2.5,
                tolerance: 0.05
              }
            }
          ]
        }
      ]
    }

  ] // modules
}; // GAME_DATA
