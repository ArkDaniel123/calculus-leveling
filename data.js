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
      totalXP: 720,
      skills: [

        // ── SKILL 1 ── Relações de Recorrência (Lista 7) ─────
        {
          id: "recorrencia",
          title: "Recorrências",
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
            },

            // ── Lição 3 ── Fibonacci e Sequências de 2ª Ordem ─
            {
              id: "rec_fibonacci",
              theory: {
                title: "Sequências de 2ª Ordem (tipo Fibonacci)",
                explanation: `Recorrência de SEGUNDA ORDEM usa os DOIS termos anteriores:
  aₙ = aₙ₋₁ + aₙ₋₂

MACETE — Monte uma tabela e preencha linha a linha:
  n:  1  2  3  4  5   6   7   8
  a:  1  1  2  3  5   8  13  21  ← Fibonacci clássico

Pode iniciar com qualquer a₁ e a₂!
O padrão é sempre: próximo = soma dos dois anteriores.

NÃO há fórmula fechada simples → sempre calcule passo a passo.`,
                example: `LISTA 7 — Sequência com a₁=1, a₂=3:
  a₁ = 1
  a₂ = 3
  a₃ = a₂+a₁ = 3+1 = 4
  a₄ = a₃+a₂ = 4+3 = 7
  a₅ = a₄+a₃ = 7+4 = 11
  a₆ = a₅+a₄ = 11+7 = 18  ✓

Fibonacci clássico (a₁=1, a₂=1):
  1,1,2,3,5,8,13,21,34,55,...
  Termo 10 = 55`,
                result: "a₆ = 18  (com a₁=1, a₂=3)"
              },
              practice: {
                question: `Sequência de 2ª ordem:
a₁ = 2  ,  a₂ = 5
aₙ = aₙ₋₁ + aₙ₋₂

Monte a tabela passo a passo:
  a₃ = 5 + 2 = ?
  a₄ = a₃ + 5 = ?
  a₅ = a₄ + a₃ = ?
  a₆ = a₅ + a₄ = ?

Qual é o valor de a₆?`,
                hint: "a₃=7, a₄=12, a₅=19, a₆=31.",
                answer: 31,
                tolerance: 0.01
              }
            },

            // ── Lição 4 ── Recorrência Mista Aplicada ─────────
            {
              id: "rec_misto_aplicado",
              theory: {
                title: "Recorrência Mista em Contexto Real",
                explanation: `Recorrência mista:  aₙ = c·aₙ₋₁ + d

  c = fator de multiplicação (crescimento ou decrescimento)
  d = constante somada (positivo = ganha, negativo = perde/subtrai)

COMO RESOLVER PASSO A PASSO:
  Basta substituir sequencialmente:
  a₁ = c·a₀ + d
  a₂ = c·a₁ + d
  a₃ = c·a₂ + d  ... e assim por diante

FÓRMULA FECHADA (quando d ≠ 0):
  Ponto fixo: p = d / (1 − c)
  Solução:    aₙ = (a₀ − p)·cⁿ + p

ATENÇÃO: mesmo com c > 1, se d < 0 e |d| > (c−1)·a₀
a sequência pode oscilar ou crescer mais devagar!`,
                example: `LISTA 7 — Colônia com predação:
"500 bactérias. Dobra por dia, mas 200 morrem."
  c=2 , d=−200 , a₀=500

Calculando:
  a₁ = 2×500 − 200 = 800
  a₂ = 2×800 − 200 = 1.400
  a₃ = 2×1.400 − 200 = 2.600

Fórmula fechada:
  p = −200/(1−2) = 200
  aₙ = (500−200)·2ⁿ + 200 = 300·2ⁿ + 200

Verificação: a₃ = 300·8+200 = 2.600  ✓`,
                result: "a₃ = 2.600  |  aₙ = 300·2ⁿ + 200"
              },
              practice: {
                question: `Poupança especial:
A₀ = R$300  (depósito inicial)
A cada mês: o valor TRIPLICA, depois R$400 são sacados.
Aₙ = 3·Aₙ₋₁ − 400

Calcule passo a passo:
  A₁ = 3×300 − 400 = ?
  A₂ = 3×A₁ − 400 = ?
  A₃ = 3×A₂ − 400 = ?

Qual é o valor de A₃?`,
                hint: "A₁=500, A₂=1100, A₃=2900.",
                answer: 2900,
                tolerance: 0.01
              }
            },

            // ── Lição 5 ── Iteração Direta com Incremento ─────
            {
              id: "rec_iteracao",
              theory: {
                title: "Iteração Direta — Somando Incrementos",
                explanation: `Quando aₙ = aₙ₋₁ + f(n), a solução vem somando todos os incrementos:
  aₙ = a₀ + f(1) + f(2) + ... + f(n)

MACETE — TELESCÓPIO:
  a₁−a₀ = f(1)
  a₂−a₁ = f(2)
  ...
  aₙ−aₙ₋₁ = f(n)
  ──────────────────
  aₙ−a₀ = Σ f(k)  (tudo do meio se cancela!)

CASO ESPECIAL — aₙ = aₙ₋₁ + 2n:
  aₙ = a₀ + 2(1+2+...+n) = a₀ + n(n+1)
  → usa-se a fórmula da soma da PA (Gauss)`,
                example: `LISTA 7 — Escada com degraus:
a₀=0, aₙ = aₙ₋₁ + 2n

Tabela:
  a₁ = 0 + 2(1) = 2
  a₂ = 2 + 2(2) = 6
  a₃ = 6 + 2(3) = 12
  a₄ = 12 + 2(4) = 20
  a₅ = 20 + 2(5) = 30

Fórmula fechada:  aₙ = n(n+1)
Verificação: a₅ = 5×6 = 30  ✓`,
                result: "aₙ = n(n+1)  →  a₅ = 30"
              },
              practice: {
                question: `Recorrência com incremento:
a₀ = 1  ,  aₙ = aₙ₋₁ + 3n

Preencha a tabela:
  a₁ = 1 + 3(1) = ?
  a₂ = a₁ + 3(2) = ?
  a₃ = a₂ + 3(3) = ?
  a₄ = a₃ + 3(4) = ?

Qual é o valor de a₄?`,
                hint: "a₁=4, a₂=10, a₃=19, a₄=31.",
                answer: 31,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 2 ── Progressão Aritmética (Lista 8) ───────
        {
          id: "progressao_aritmetica",
          title: "Prog. Aritmética",
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
            },

            // ── Lição 3 ── Inserindo Meios Aritméticos ────────
            {
              id: "pa_interpolacao",
              theory: {
                title: "Inserindo Meios Aritméticos",
                explanation: `Inserir k meios aritméticos entre a e b = criar uma PA:
  a , m₁ , m₂ , ... , mₖ , b
com (k+2) termos total.

FÓRMULA DA RAZÃO:
  r = (b − a) / (k + 1)

MACETE — "Quantos espaços existem?"
  k meios → k+1 intervalos entre os k+2 termos
  r = (último − primeiro) / nº de intervalos

DEPOIS: encontre cada meio somando r ao anterior!`,
                example: `LISTA 8 — Inserir 3 meios entre 2 e 18:
  k=3 → r = (18−2)/(3+1) = 16/4 = 4

PA:  2 , 6 , 10 , 14 , 18
  m₁=6 , m₂=10 , m₃=14  ✓

LISTA 8 — Inserir 4 meios entre 5 e 35:
  r = (35−5)/(4+1) = 30/5 = 6
  PA: 5, 11, 17, 23, 29, 35
  m₁=11, m₂=17, m₃=23, m₄=29`,
                result: "r=4: meios 6,10,14  |  r=6: meios 11,17,23,29"
              },
              practice: {
                question: `Inserir 5 meios aritméticos entre 3 e 45.

Passo 1 — Calcule r:
  r = (45 − 3) / (5 + 1) = 42 / 6 = ?

Passo 2 — Calcule o 3º meio (m₃):
  m₁ = 3 + r
  m₂ = m₁ + r
  m₃ = m₂ + r = 3 + 3r = ?

Qual é o valor do 3º meio inserido?`,
                hint: "r=7. m₁=10, m₂=17, m₃=24.",
                answer: 24,
                tolerance: 0.01
              }
            },

            // ── Lição 4 ── Propriedade Central da PA ──────────
            {
              id: "pa_propriedade_central",
              theory: {
                title: "Termo do Meio é Sempre a Média",
                explanation: `PROPRIEDADE CENTRAL da PA:
  O termo aₘ é a MÉDIA ARITMÉTICA dos termos equidistantes:
  aₘ = (aₘ₋ₖ + aₘ₊ₖ) / 2  para qualquer k

CASO MAIS USADO (3 termos em PA):
  Se a, b, c estão em PA → b = (a+c)/2  ou  2b = a+c

MACETE — Soma de extremos SIMÉTRICOS:
  a₁ + aₙ = a₂ + aₙ₋₁ = a₃ + aₙ₋₂ = ...
  (todos os pares equidistantes têm a mesma soma!)

APLICAÇÃO RÁPIDA:
  Dados a₂ e a₈ → a₅ = (a₂+a₈)/2  (sem precisar de r!)`,
                example: `LISTA 8 — PA com a₃=8 e a₇=16:
  a₅ está no meio entre a₃ e a₇ (equidistante):
  a₅ = (8+16)/2 = 12  ✓

Verificação: r = (16−8)/(7−3) = 2
  a₃=8, a₅=12, a₇=16  →  diferença sempre 4=2r ✓

LISTA 8 — PA com a₁+a₉=30:
  O meio dessa PA é a₅ (5º de 9):
  a₅ = (a₁+a₉)/2 = 30/2 = 15  (propriedade dos extremos!)`,
                result: "a₅ = (a₃+a₇)/2 = 12  |  a₅ = (a₁+a₉)/2 = 15"
              },
              practice: {
                question: `PA em que  a₂ = 7  e  a₈ = 25.

Use a propriedade central:
  a₅ é equidistante de a₂ e a₈
  (distância de 3 posições para cada lado)

  a₅ = (a₂ + a₈) / 2 = (7 + 25) / 2 = ?

Qual é o valor de a₅?`,
                hint: "a₅ = (7+25)/2 = 32/2 = 16.",
                answer: 16,
                tolerance: 0.01
              }
            },

            // ── Lição 5 ── PA por Sistema de Equações ─────────
            {
              id: "pa_sistema",
              theory: {
                title: "PA por Sistema — Duas Condições",
                explanation: `Quando o enunciado dá DUAS condições, monte um sistema:
  Use aₙ = a₁ + (n−1)r para cada condição → 2 equações, 2 incógnitas (a₁ e r)

PASSO A PASSO:
  1) Escreva cada condição como equação em a₁ e r
  2) Resolva o sistema (subtraia as equações para eliminar a₁)
  3) Ache r, depois volte para achar a₁
  4) Escreva a fórmula final aₙ = a₁ + (n−1)r

MACETE — "subtração elimina b, deixa só r":
  Equação 2 − Equação 1 → r aparece isolado!`,
                example: `LISTA 8 — Q7 (sistema):
"S₁₁ = 176  e  a₁₁ = a₁ + 30"

S₁₁ = 11(a₁+a₁₁)/2 = 176  →  a₁+a₁₁ = 32
Como a₁₁ = a₁+30:
  a₁ + (a₁+30) = 32
  2a₁ = 2  →  a₁ = 1

r = 30/(11−1) = 3

aₙ = 1 + (n−1)·3 = 3n − 2  ✓

LISTA 8 — a₄=10 e a₉=25:
  Eq1: a₁+3r=10
  Eq2: a₁+8r=25
  Eq2−Eq1: 5r=15 → r=3, a₁=1`,
                result: "Sys: a₁=1, r=3  |  aₙ=3n−2"
              },
              practice: {
                question: `PA com  S₅ = 60  e  r = 4.

Use a fórmula:  Sₙ = n·(2a₁ + (n−1)·r) / 2

  S₅ = 5·(2a₁ + 4·4) / 2 = 60

Resolva:
  5·(2a₁ + 16) / 2 = 60
  2a₁ + 16 = 24
  2a₁ = ?  →  a₁ = ?

Qual é o valor de a₁?`,
                hint: "2a₁+16=24 → 2a₁=8 → a₁=4. Verificação: S₅=5(8+32)/2=5×20=100... Hmm, vamos conferir: 5(2×4+16)/2=5×24/2=60 ✓.",
                answer: 4,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 3 ── Progressão Geométrica (Lista 8) ───────
        {
          id: "progressao_geometrica",
          title: "Prog. Geométrica",
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
            },

            // ── Lição 3 ── Meios Geométricos ──────────────────
            {
              id: "pg_interpolacao",
              theory: {
                title: "Inserindo Meios Geométricos",
                explanation: `Inserir k meios geométricos entre a e b = criar uma PG:
  a , m₁ , m₂ , ... , mₖ , b

FÓRMULA DA RAZÃO:
  q = (b/a)^(1/(k+1))   ← raiz (k+1)-ésima de b/a

MACETE — 1 meio geométrico entre a e b:
  q = √(b/a)   e   m = a·q = √(a·b)
  Isso chama-se MÉDIA GEOMÉTRICA de a e b!

COMO CALCULAR:
  1) Ache q pela fórmula
  2) m₁ = a·q , m₂ = m₁·q , ...`,
                example: `LISTA 8 — Inserir 2 meios entre 2 e 54:
  k=2 → q = (54/2)^(1/3) = 27^(1/3) = 3

PG:  2 , 6 , 18 , 54
  m₁ = 2×3 = 6 , m₂ = 6×3 = 18  ✓

LISTA 8 — 1 meio geométrico entre 4 e 100:
  q = √(100/4) = √25 = 5
  m = 4×5 = 20

PG: 4 , 20 , 100  (razão 5)  ✓`,
                result: "meios entre 2 e 54: {6,18}  |  meio entre 4 e 100: 20"
              },
              practice: {
                question: `Inserir 1 meio geométrico entre 3 e 75.

Passo 1 — Calcule q:
  q = √(75/3) = √25 = ?

Passo 2 — O meio inserido:
  m = 3 × q = ?

Qual é o meio geométrico entre 3 e 75?`,
                hint: "q=√(75/3)=√25=5. m=3×5=15.",
                answer: 15,
                tolerance: 0.01
              }
            },

            // ── Lição 4 ── Soma Infinita da PG ────────────────
            {
              id: "pg_infinita",
              theory: {
                title: "Soma Infinita da PG (quando |q| < 1)",
                explanation: `Quando −1 < q < 1, a PG CONVERGE e existe soma infinita:

  S∞ = a₁ / (1 − q)

CONDIÇÃO OBRIGATÓRIA: |q| < 1
  Se |q| ≥ 1 → soma infinita NÃO existe!

POR QUÊ?
  Os termos ficam cada vez menores e somam um valor finito.
  Exemplo: 1 + 1/2 + 1/4 + 1/8 + ... = 2 (nunca passa de 2!)

APLICAÇÕES ÚTEIS:
  → Dízimas periódicas: 0,333... = 1/3
  → Zeno's paradox, física, convergência`,
                example: `PG 1 + 1/2 + 1/4 + ...:
  a₁=1, q=1/2  (|q|<1 ✓)
  S∞ = 1/(1−1/2) = 1/(1/2) = 2  ✓

LISTA 8 — PG 3 + 1 + 1/3 + 1/9 + ...:
  a₁=3, q=1/3  (|q|<1 ✓)
  S∞ = 3/(1−1/3) = 3/(2/3) = 9/2 = 4,5  ✓

Dízima 0,333...:
  = 3/10 + 3/100 + ...  →  a₁=0,3 , q=0,1
  S∞ = 0,3/(1−0,1) = 0,3/0,9 = 1/3  ✓`,
                result: "PG 1+1/2+...: S∞=2  |  PG 3+1+...: S∞=4,5"
              },
              practice: {
                question: `PG infinita:  12 + 4 + 4/3 + 4/9 + ...

Identifique:
  a₁ = 12
  q = 4/12 = 1/3  (|q| < 1 ✓)

Use a fórmula:
  S∞ = a₁ / (1 − q)
     = 12 / (1 − 1/3)
     = 12 / (2/3)
     = 12 × 3/2 = ?

Qual é o valor de S∞?`,
                hint: "S∞ = 12 × 3/2 = 18.",
                answer: 18,
                tolerance: 0.01
              }
            },

            // ── Lição 5 ── PG Aplicada: Juros Compostos ───────
            {
              id: "pg_juros",
              theory: {
                title: "PG Aplicada — Juros Compostos e Crescimento",
                explanation: `Juros compostos formam uma PG!
  Mₙ = M₀ · (1 + i)ⁿ

  M₀ = capital inicial
  i  = taxa por período em decimal (10% → 0,10)
  n  = nº de períodos
  q  = 1 + i  ← razão da PG

MACETE — Depreciação (desvalorização):
  Mₙ = M₀ · (1 − i)ⁿ  → q = 1 − i < 1

MACETE — "Dobrar o capital":
  Quando dobra a cada T anos: q=2, n=t/T períodos
  M = M₀ · 2^(t/T)`,
                example: `LISTA 8 — R$1.000 a 10% ao ano. Após 3 anos:
  q = 1+0,10 = 1,10
  M₃ = 1.000 × (1,10)³ = 1.000×1,331 = R$1.331  ✓

LISTA 8 — Carro R$50.000, desvaloriza 20%/ano. Após 2 anos:
  q = 1−0,20 = 0,80
  M₂ = 50.000 × (0,80)² = 50.000×0,64 = R$32.000  ✓

Crescimento: capital dobra a cada 5 anos.
  Após 15 anos: n=15/5=3 períodos
  M = M₀ × 2³ = 8×M₀`,
                result: "Juros: R$1.331  |  Depreciação: R$32.000"
              },
              practice: {
                question: `Uma quantia de R$500 dobra a cada 5 anos.

Após 15 anos, quantos períodos de 5 anos passaram?
  n = 15 ÷ 5 = 3 períodos

Calcule o montante:
  M = 500 · 2ⁿ = 500 · 2³ = 500 · 8 = ?

Qual é o montante após 15 anos?`,
                hint: "M = 500 × 8 = R$4.000.",
                answer: 4000,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 4 ── Funções — Conceito (Lista 9) ──────────
        {
          id: "funcoes_conceito",
          title: "Funções",
          icon: "ƒ",
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
            },

            // ── Lição 2 ── Domínio ────────────────────────────
            {
              id: "func_dominio",
              theory: {
                title: "Domínio — Onde a Função Existe",
                explanation: `DOMÍNIO é o conjunto de x para os quais f(x) está definida.

REGRAS RÁPIDAS (o que "quebra" a função):
  Fração 1/g:      g(x) ≠ 0  (denominador ≠ zero)
  Raiz par √g:     g(x) ≥ 0  (não existe raiz de negativo)
  Raiz no denom:   g(x) > 0  (estrito! — proíbe zero também)
  Polinômio puro:  Dom = ℝ   (tudo funciona)

PASSO A PASSO:
  1) Identifique o "perigo" na expressão
  2) Monte a condição (≠0 ou ≥0)
  3) Resolva e escreva o domínio`,
                example: `LISTA 9 — Dom de f(x) = √(x−3):
  Exige: x−3 ≥ 0 → x ≥ 3
  Dom = [3, +∞)

LISTA 9 — Dom de f(x) = 1/(x²−4):
  Exige: x²−4 ≠ 0 → x ≠ ±2
  Dom = ℝ − {−2, 2}

LISTA 9 — Dom de f(x) = √(x+4)/(x−5):
  Raiz: x+4 ≥ 0 → x ≥ −4
  Denom: x−5 ≠ 0 → x ≠ 5
  Dom = [−4, 5) ∪ (5, +∞)`,
                result: "√(x−3): x≥3 | 1/(x²−4): x≠±2"
              },
              practice: {
                question: `LISTA 9 — f(x) = √(2x − 6)

Para que f(x) esteja definida:
  2x − 6 ≥ 0
  2x ≥ 6
  x ≥ ?

Qual é o MENOR valor de x no domínio de f?`,
                hint: "2x−6≥0 → x≥3. Menor valor = 3.",
                answer: 3,
                tolerance: 0.01
              }
            },

            // ── Lição 3 ── Imagem ─────────────────────────────
            {
              id: "func_imagem",
              theory: {
                title: "Imagem — Quais Valores f Realmente Assume",
                explanation: `IMAGEM (Im) = conjunto dos valores que f REALMENTE produz.
Diferente do contradomínio (que é onde a função PODERIA chegar).

COMO ENCONTRAR A IMAGEM:
  Funções finitas: aplique f em cada elemento, colete os resultados
  f(x) = ax+b:    Im = ℝ  (sobrejetora se domínio = ℝ)
  f(x) = ax²+bx+c (a>0): Im = [yᵥ, +∞)
  f(x) = ax²+bx+c (a<0): Im = (−∞, yᵥ]
  f(x) = √x:      Im = [0, +∞)

MACETE: pense "quais y eu CONSIGO atingir?",
não "quais y existem no conjunto de chegada".`,
                example: `LISTA 9 — f: {1,2,3,4} → ℤ ,  f(x) = 2x−1:
  f(1) = 1 , f(2) = 3 , f(3) = 5 , f(4) = 7
  Im = {1, 3, 5, 7}  (4 elementos)
  (os valores 2,4,6,... não são atingidos)

LISTA 9 — f(x) = x² (dom = ℝ):
  x² é sempre ≥ 0 → Im = [0, +∞)
  y = −4 não é atingido! → f NÃO é sobrejetora em ℝ`,
                result: "Im finita: {1,3,5,7}  |  Im de x²: [0,+∞)"
              },
              practice: {
                question: `f: {1,2,3,4,5} → ℤ  ,  f(x) = 3x − 2

Calcule cada imagem:
  f(1) = 3(1)−2 = 1
  f(2) = 3(2)−2 = 4
  f(3) = ?
  f(4) = ?
  f(5) = ?

Quantos elementos distintos tem a Imagem de f?`,
                hint: "f(3)=7, f(4)=10, f(5)=13. Im={1,4,7,10,13} → 5 elementos.",
                answer: 5,
                tolerance: 0.01
              }
            },

            // ── Lição 4 ── Função Inversa ─────────────────────
            {
              id: "func_inversa",
              theory: {
                title: "Função Inversa f⁻¹(x)",
                explanation: `f⁻¹ "desfaz" o que f fez:  f(f⁻¹(x)) = x

PASSO A PASSO para calcular f⁻¹:
  1) Escreva  y = f(x)
  2) Isole x  em função de y
  3) Troque os nomes: substitua y por x
  → O resultado é f⁻¹(x)

f⁻¹ existe SÓ SE f é bijetora (1-a-1 e sobrejetora).

VERIFICAÇÃO:
  f(f⁻¹(x)) = x  deve ser sempre verdade
  f⁻¹(f(x)) = x  deve ser sempre verdade`,
                example: `LISTA 9 — f(x) = 3x − 6:
  1) y = 3x−6
  2) y+6 = 3x  →  x = (y+6)/3
  3) f⁻¹(x) = (x+6)/3

Verificação:
  f(f⁻¹(4)) = f(10/3) = 3·(10/3)−6 = 10−6 = 4  ✓

LISTA 9 — f(x) = 5x+1:
  y = 5x+1 → x = (y−1)/5
  f⁻¹(x) = (x−1)/5

Verificação: f⁻¹(f(2)) = f⁻¹(11) = (11−1)/5 = 2  ✓`,
                result: "f⁻¹ de 3x−6: (x+6)/3  |  f⁻¹ de 5x+1: (x−1)/5"
              },
              practice: {
                question: `LISTA 9 — f(x) = 2x + 10

Calcule f⁻¹(x) passo a passo:
  1) y = 2x + 10
  2) 2x = y − 10
  3) f⁻¹(x) = (x − 10) / 2

Agora avalie:  f⁻¹(4) = (4 − 10) / 2 = ?`,
                hint: "f⁻¹(4) = (4−10)/2 = −6/2 = −3.",
                answer: -3,
                tolerance: 0.01
              }
            },

            // ── Lição 5 ── Contar Funções ─────────────────────
            {
              id: "func_contagem",
              theory: {
                title: "Quantas Funções Existem? — Contagem",
                explanation: `TOTAL de funções f: A → B (|A|=m, |B|=n):
  nᵐ  ← cada um dos m elementos de A tem n destinos possíveis

FUNÇÕES INJETORAS f: A → B (|A|=m ≤ |B|=n):
  n·(n−1)·(n−2)·...·(n−m+1) = P(n,m)
  ← primeiro tem n opções, segundo n−1 (não pode repetir), etc.

FUNÇÕES BIJETORAS (|A|=|B|=n):
  n!  ← todas as permutações de n elementos

MACETE:
  Total     → cada elemento PODE ir para qualquer destino
  Injetora  → cada destino é usado NO MÁXIMO uma vez
  Bijetora  → cada destino é usado EXATAMENTE uma vez`,
                example: `LISTA 9 — A={1,2}, B={a,b,c} (m=2, n=3):

Total de funções:  3² = 9
Injetoras:  P(3,2) = 3×2 = 6
Bijetoras:  0  (pois 2 ≠ 3, impossível!)

LISTA 9 — A={1,2,3}, B={a,b} (m=3, n=2):
Total: 2³ = 8
Injetoras: 0  (pois m > n — não há espaço!)`,
                result: "A(2)→B(3): 9 totais, 6 injetoras  |  A(3)→B(2): 8 totais"
              },
              practice: {
                question: `A = {x, y, z}  (3 elementos)
B = {0, 1}    (2 elementos)

Quantas funções f: A → B existem no total?

Use:  nᵐ = 2³ = ?

(Cada um dos 3 elementos de A pode ir para 0 ou 1)`,
                hint: "2³ = 2×2×2 = 8 funções.",
                answer: 8,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 5 ── Funções: Aplicações (Listas 10 e 11) ──
        {
          id: "funcoes_aplicacoes",
          title: "Composição",
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
            },

            // ── Lição 3 ── Composição Simbólica ───────────────
            {
              id: "func_comp_simbolica",
              theory: {
                title: "Composição Simbólica — Obtendo uma Nova Função",
                explanation: `Composição simbólica: você obtém uma EXPRESSÃO NOVA, não um número.
  (f∘g)(x) = f(g(x)) — substitua g(x) onde aparece x em f

PASSO A PASSO:
  1) Identifique f e g
  2) Substitua g(x) no lugar de x em f(x)
  3) Simplifique a expressão resultante!

ATENÇÃO:  f∘g ≠ g∘f  em geral!

MACETE: "de dentro para fora"
  (f∘g)(x): aplica g PRIMEIRO, depois f`,
                example: `LISTA 10 — f(x)=x²−3x ,  g(x)=x+2:

(f∘g)(x) = f(g(x)) = f(x+2):
  = (x+2)² − 3(x+2)
  = x²+4x+4 − 3x−6
  = x² + x − 2  ✓

(g∘f)(x) = g(f(x)) = g(x²−3x):
  = (x²−3x) + 2
  = x² − 3x + 2

Comparando: x²+x−2 ≠ x²−3x+2  →  f∘g ≠ g∘f  ✓`,
                result: "(f∘g)(x)=x²+x−2  |  (g∘f)(x)=x²−3x+2"
              },
              practice: {
                question: `f(x) = 2x + 1   e   g(x) = x − 3

Calcule (f∘g)(x):
  (f∘g)(x) = f(g(x)) = f(x−3)
            = 2(x−3) + 1
            = 2x − 6 + 1
            = 2x − 5

Agora avalie em x = 7:
  (f∘g)(7) = 2(7) − 5 = ?`,
                hint: "(f∘g)(7) = 14−5 = 9.",
                answer: 9,
                tolerance: 0.01
              }
            },

            // ── Lição 4 ── Achar f Dada a Composição ──────────
            {
              id: "func_comp_encontrar",
              theory: {
                title: "Achar f Dada a Composição",
                explanation: `Se sabemos (f∘g)(x) = H(x) e g(x), como achar f?

MÉTODO:
  1) Faça u = g(x)  (u é o "input" de f)
  2) Expresse x em função de u: x = g⁻¹(u)
  3) Substitua em H(x): f(u) = H(g⁻¹(u))
  4) Substitua u por x → f(x) pronto!

MACETE — Se g(x) = ax+b:
  u = ax+b  →  x = (u−b)/a
  Substitua em H e simplifique!`,
                example: `LISTA 10 — (f∘g)(x)=6x+9 ,  g(x)=2x+3:

u = 2x+3  →  x = (u−3)/2

f(u) = (f∘g)((u−3)/2) = 6·(u−3)/2 + 9
     = 3(u−3) + 9 = 3u − 9 + 9 = 3u

Portanto: f(x) = 3x

Verificação:
  f(g(x)) = 3(2x+3) = 6x+9  ✓`,
                result: "f(x) = 3x"
              },
              practice: {
                question: `(f∘g)(x) = 4x − 2   e   g(x) = x + 1

Passo 1: u = x+1  →  x = u−1

Passo 2: f(u) = 4(u−1) − 2
               = 4u − 4 − 2
               = 4u − 6

Logo:  f(x) = 4x − 6

Calcule  f(10) = 4(10) − 6 = ?`,
                hint: "f(10) = 40−6 = 34.",
                answer: 34,
                tolerance: 0.01
              }
            },

            // ── Lição 5 ── Composição com 3 Funções ───────────
            {
              id: "func_comp_tripla",
              theory: {
                title: "Composição Tripla — 3 Funções em Série",
                explanation: `(f∘g∘h)(x) = f(g(h(x)))

MACETE — Linha de montagem, SEMPRE de dentro para fora:
  x → [h] → resultado₁ → [g] → resultado₂ → [f] → final

PASSO A PASSO:
  1) Calcule h(x) ou h(valor) primeiro
  2) Use o resultado como entrada de g
  3) Use o resultado de g como entrada de f

É exatamente como calcular composição dupla,
mas com mais um passo no início!`,
                example: `f(x)=x+1,  g(x)=2x,  h(x)=x²

(f∘g∘h)(3):
  h(3) = 3² = 9
  g(9) = 2×9 = 18
  f(18) = 18+1 = 19  ✓

Simbolicamente — (f∘g∘h)(x):
  h(x) = x²
  g(h(x)) = 2x²
  f(g(h(x))) = 2x² + 1`,
                result: "(f∘g∘h)(3) = 19  |  expressão: 2x²+1"
              },
              practice: {
                question: `f(x) = x − 1  ,  g(x) = 3x  ,  h(x) = x + 2

Calcule (f∘g∘h)(4):

Passo 1:  h(4) = 4 + 2 = 6
Passo 2:  g(6) = 3 × 6 = 18
Passo 3:  f(18) = 18 − 1 = ?

Qual é o resultado?`,
                hint: "h(4)=6, g(6)=18, f(18)=17.",
                answer: 17,
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
            },

            // ── Lição 3 ── Zeros da Função Quadrática ─────────
            {
              id: "func_zeros",
              theory: {
                title: "Zeros da Quadrática — Fórmula de Bhaskara",
                explanation: `Zeros (raízes): valores de x onde f(x) = 0.

FÓRMULA DE BHASKARA:
  Δ = b² − 4ac
  x = (−b ± √Δ) / (2a)

ANÁLISE DO Δ:
  Δ > 0 → 2 raízes reais distintas
  Δ = 0 → 1 raiz dupla  x = −b/(2a)  ← é o próprio vértice!
  Δ < 0 → sem raízes reais

MACETE — Relações de Vieta (sem calcular √):
  x₁+x₂ = −b/a    (soma das raízes)
  x₁·x₂ = c/a     (produto das raízes)`,
                example: `LISTA 11 — f(x) = x² − 5x + 6:
  Δ = 25 − 24 = 1
  x = (5±1)/2  →  x₁=3 , x₂=2

Vieta: soma=3+2=5=5/1 ✓ , produto=3×2=6=6/1 ✓

LISTA 11 — f(x) = x² − 7x + 10:
  Δ = 49−40 = 9 → x=(7±3)/2
  x₁=5 , x₂=2
  Soma = 7  (= −(−7)/1)  ✓`,
                result: "x²−5x+6: raízes 2,3  |  x²−7x+10: raízes 2,5"
              },
              practice: {
                question: `LISTA 11 — f(x) = x² − 9x + 14

Usando Bhaskara:
  Δ = 9² − 4(1)(14) = 81 − 56 = 25
  x = (9 ± 5) / 2

Calcule x₁ e x₂, depois some-os.

Qual é a SOMA das duas raízes?
(Dica de Vieta: soma = −b/a = 9/1 = ?)`,
                hint: "x₁=(9+5)/2=7, x₂=(9−5)/2=2. Soma=9. Ou direto por Vieta: −(−9)/1=9.",
                answer: 9,
                tolerance: 0.01
              }
            },

            // ── Lição 4 ── Discriminante e Sinal ──────────────
            {
              id: "func_sinal_quadratica",
              theory: {
                title: "Sinal da Parábola e Discriminante",
                explanation: `O SINAL de f(x)=ax²+bx+c depende de a e das raízes:

  a > 0 (∪ parábola pra cima):
    f(x) > 0 para x < x₁ ou x > x₂
    f(x) < 0 para x₁ < x < x₂

  a < 0 (∩ parábola pra baixo):
    f(x) > 0 para x₁ < x < x₂
    f(x) < 0 para x < x₁ ou x > x₂

MACETE VISUAL:
  Desenhe a parábola, marque x₁ e x₂.
  Positive = onde a parábola fica ACIMA do eixo x.`,
                example: `LISTA 11 — f(x) = −x² + 9:
  a=−1 < 0  →  parábola ∩
  Raízes: x²=9 → x=±3
  Verificação: f(0) = 9 > 0 (entre −3 e 3)  ✓

  f(x) > 0 para −3 < x < 3
  f(x) < 0 para x < −3 ou x > 3

LISTA 11 — f(x) = x²−4:
  a=1>0 → parábola ∪ , raízes x=±2
  f(x)>0 fora de [−2,2]`,
                result: "−x²+9 > 0 em (−3,3)  |  x²−4 > 0 fora de [−2,2]"
              },
              practice: {
                question: `f(x) = −x² + 9

Para verificar que x=3 é raiz:
  f(3) = −(3)² + 9 = −9 + 9 = ?

Qual é o valor de f(3)?`,
                hint: "f(3) = −9+9 = 0. Confirmado: x=3 é raiz.",
                answer: 0,
                tolerance: 0.01
              }
            },

            // ── Lição 5 ── Otimização com Quadrática ──────────
            {
              id: "func_otimizacao",
              theory: {
                title: "Otimização — Máximo e Mínimo por Vértice",
                explanation: `O VÉRTICE dá a solução ótima em problemas de maximização/minimização.

FÓRMULAS DO VÉRTICE:
  xᵥ = −b/(2a)
  yᵥ = f(xᵥ)  = −Δ/(4a)   ← atalho!

PROBLEMAS TÍPICOS:
  Área máxima com perímetro fixo
  Lucro máximo / custo mínimo
  Altura máxima de projéteis

PASSO A PASSO:
  1) Defina a variável x
  2) Monte f(x) = ax²+bx+c com os dados do problema
  3) Calcule xᵥ e yᵥ
  4) Interprete a resposta no contexto`,
                example: `LISTA 11 — Cerca retangular com 100m de arame:
  2x+2y=100 → y=50−x
  Área A=x(50−x) = −x²+50x

  xᵥ = −50/(2×(−1)) = 25 m
  A_máx = −(25)²+50(25) = −625+1.250 = 625 m²

LISTA 11 — h(t)=−5t²+20t+1:
  tᵥ = −20/(2×(−5)) = 2 s
  h_máx = −5(4)+20(2)+1 = 21 m`,
                result: "A_máx=625m² em x=25  |  h_máx=21m em t=2s"
              },
              practice: {
                question: `LISTA 11 — Lançamento:
h(t) = −5t² + 30t + 2  metros

Passo 1 — Tempo do ponto máximo:
  tᵥ = −30 / (2·(−5)) = 3 s

Passo 2 — Altura máxima:
  h(3) = −5(3)² + 30(3) + 2
       = −45 + 90 + 2 = ?

Qual é a altura máxima?`,
                hint: "h(3) = −45+90+2 = 47 metros.",
                answer: 47,
                tolerance: 0.01
              }
            }
          ]
        },

        // ── SKILL 7 ── Derivadas (Lista 12) ──────────────────
        {
          id: "derivadas_discreta",
          title: "Derivadas",
          icon: "∂",
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
            },

            // ── Lição 3 ── Produto e Quociente Detalhados ─────
            {
              id: "der_produto_quociente",
              theory: {
                title: "Regras do Produto e Quociente",
                explanation: `REGRA DO PRODUTO (f·g):
  (f·g)' = f'·g + f·g'
  "Deriva o 1º × mantém o 2º  +  mantém o 1º × deriva o 2º"

REGRA DO QUOCIENTE (f/g):
  (f/g)' = (f'·g − f·g') / g²
  Mnemônico: "BAIXO·CIMA' menos CIMA·BAIXO', sobre BAIXO²"

DICA DE OURO:
  Sempre que possível, EXPANDA primeiro e derive termo a termo.
  Evita a regra do produto e reduz erros!`,
                example: `LISTA 12 — I.7 (Produto):
f(x) = (x²+1)·(x−3)

EXPANDA: x³−3x²+x−3
f'(x) = 3x²−6x+1  ← simples!

LISTA 12 — I.11 (Quociente):
h(x) = (4x+5)/(3x+2)
  f=4x+5 (f'=4) , g=3x+2 (g'=3)
  h'(x) = [4(3x+2)−(4x+5)·3] / (3x+2)²
         = [12x+8−12x−15] / (3x+2)²
         = −7/(3x+2)²  ✓`,
                result: "(x²+1)(x−3)' = 3x²−6x+1  |  (4x+5)/(3x+2)' = −7/(3x+2)²"
              },
              practice: {
                question: `LISTA 12 — f(x) = x² · (x + 3)

Expanda primeiro:
  f(x) = x³ + 3x²

Derive (regra da potência):
  f'(x) = 3x² + 6x

Calcule f'(2):
  f'(2) = 3(4) + 6(2) = 12 + 12 = ?`,
                hint: "f'(2) = 12+12 = 24.",
                answer: 24,
                tolerance: 0.01
              }
            },

            // ── Lição 4 ── Pontos Críticos ────────────────────
            {
              id: "der_pontos_criticos",
              theory: {
                title: "Pontos Críticos — Máximos e Mínimos",
                explanation: `PONTOS CRÍTICOS: onde f'(x) = 0 ou f' não existe.
Nesses pontos a função pode ter máximo local, mínimo local ou inflexão.

TESTE DA 2ª DERIVADA:
  f'(x₀) = 0 e f''(x₀) > 0 → MÍNIMO LOCAL  (∪ curvatura)
  f'(x₀) = 0 e f''(x₀) < 0 → MÁXIMO LOCAL  (∩ curvatura)
  f'(x₀) = 0 e f''(x₀) = 0 → inconclusivo

PASSO A PASSO:
  1) Derive: obtenha f'(x)
  2) Resolva f'(x) = 0  para achar x₀
  3) Calcule f''(x₀) para classificar
  4) Calcule f(x₀) para o valor extremo`,
                example: `LISTA 12 — f(x) = x³ − 3x:
  f'(x) = 3x²−3 = 0 → x²=1 → x=±1

  f''(x) = 6x
  f''(1) = 6 > 0  → MÍNIMO em x=1,  f(1)=−2
  f''(−1) = −6 < 0 → MÁXIMO em x=−1, f(−1)=2`,
                result: "Máx em x=−1 (valor 2), Mín em x=1 (valor −2)"
              },
              practice: {
                question: `LISTA 12 — f(x) = x² − 6x + 8

Passo 1 — Derive:
  f'(x) = 2x − 6

Passo 2 — Iguale a zero:
  2x − 6 = 0  →  x = ?

Passo 3 — Como f''(x) = 2 > 0,
  este ponto é um MÍNIMO.

Qual é a coordenada x do ponto mínimo?`,
                hint: "2x−6=0 → x=3. f''>0 confirma mínimo.",
                answer: 3,
                tolerance: 0.01
              }
            },

            // ── Lição 5 ── 2ª Derivada e Concavidade ──────────
            {
              id: "der_segunda_derivada",
              theory: {
                title: "2ª Derivada — Concavidade e Inflexão",
                explanation: `A 2ª derivada f''(x) descreve como a taxa de variação MUDA:

  f''(x) > 0: côncava para CIMA (∪)  — "acelerando"
  f''(x) < 0: côncava para BAIXO (∩) — "desacelerando"
  f''(x) = 0: possível ponto de INFLEXÃO (muda a concavidade)

MACETE — Física:
  s(t) = posição
  s'(t) = velocidade
  s''(t) = aceleração  ← é a segunda derivada!

COMO USAR:
  1) Derive f duas vezes
  2) Analise o sinal de f''(x) nos intervalos
  3) Resolva f''=0 para candidatos a inflexão`,
                example: `LISTA 12 — f(x) = x³−6x²+9x:
  f'(x)  = 3x²−12x+9
  f''(x) = 6x−12

  Inflexão: 6x−12=0 → x=2
  Para x<2: f''<0 (∩)
  Para x>2: f''>0 (∪)
  → mudança de concavidade em x=2  ✓

Física: s(t) = t³
  v(t) = 3t²   (velocidade)
  a(t) = 6t    (aceleração)`,
                result: "Inflexão em x=2  |  a(t) = 6t"
              },
              practice: {
                question: `LISTA 12 — f(x) = x³

Calcule a segunda derivada:
  f'(x)  = 3x²
  f''(x) = ?

Avalie f''(2):
  f''(2) = 6 × 2 = ?`,
                hint: "f''(x)=6x. f''(2)=12.",
                answer: 12,
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
          title: "Limites",
          icon: "→",
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
