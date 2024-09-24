---
title: Cálculo do DAS - Simples Nacional
description: Esse processo assegura que o cálculo do imposto seja feito corretamente, considerando todas as regras do Simples Nacional.
---
::steps
### Determinação do RBT12 (Receita Bruta dos Últimos 12 Meses)

- **Objetivo:** Somar o faturamento bruto dos últimos 12 meses para obter o RBT12.
- **Como Calcular:**
  1. Utilize os valores de faturamento mensal listados na tabela abaixo.
  2. Some todos os valores dos últimos 12 meses (incluindo o mês atual).

**Tabela de Faturamento Bruto (1º Passo)**

| Ano | Mês       | Faturamento Bruto (R$) |
|-----|-----------|------------------------|
| 2021 | JANEIRO   | 37.985,00              |
| 2021 | FEVEREIRO | 25.069,00              |
| 2021 | MARÇO     | 28.251,00              |
| 2021 | ABRIL     | 21.029,00              |
| 2021 | MAIO      | 39.554,00              |
| 2021 | JUNHO     | 28.683,00              |
| 2021 | JULHO     | 22.009,00              |
| 2021 | AGOSTO    | 26.503,00              |
| 2021 | SETEMBRO  | 20.131,00              |
| 2021 | OUTUBRO   | 25.488,00              |
| 2021 | NOVEMBRO  | 21.291,00              |
| 2021 | DEZEMBRO  | 37.925,00              |
| 2022 | JANEIRO   | 32.662,00              |
| 2022 | FEVEREIRO | 20.994,00              |
| 2022 | MARÇO     | 31.521,00              |

Na planilha, o RBT12 é calculado somando os valores de janeiro de 2021 a abril de 2022, resultando em R$ 327.790,00.

### Aplicação da Tabela de Alíquotas do Simples Nacional

- **Objetivo:** Determinar a alíquota aplicável de acordo com o RBT12 calculado.
- **Como Calcular:**
  1. Encontre a faixa do RBT12 na tabela de alíquotas abaixo.
  2. Identifique a alíquota normal correspondente e o valor da dedução.

**Tabela de Alíquotas (2º Passo):**

| Faixa RBT12 (R$)           | Alíquota Normal (%) | Dedução (R$) |
|----------------------------|---------------------|--------------|
| -                          | 4,00                | 0            |
| 180.000,01 - 360.000,00    | 7,30                | 5.940,00     |
| 360.000,01 - 720.000,00    | 9,50                | 13.860,00    |
| 720.000,01 - 1.800.000,00  | 10,70               | 22.500,00    |
| 1.800.000,01 - 3.600.000,00| 14,30               | 87.300,00    |
| 3.600.000,01 - 4.800.000,00| 19,00               | 378.000,00   |

- **Exemplo:** Para um RBT12 de R$ 327.790,00, a faixa correta é de R$ 180.000,01 a R$ 360.000,00, onde a alíquota normal é de 7,30% e a dedução é de R$ 5.940,00.

### Cálculo da Alíquota Efetiva e do Valor do DAS

- **Objetivo:** Calcular a alíquota efetiva e o valor do DAS a ser pago.
- **Fórmula:**

$$
\text{Alíquota Efetiva} = \frac{\text{RBT12} \times \text{Alíquota} - \text{Dedução}}{\text{RBT12}}
$$

$$
\text{Valor do DAS} = \text{RBT12} \times \text{Alíquota Efetiva}
$$

- **Exemplo:**
  1. Calcule o valor bruto aplicando a alíquota: \( 327.790,00 \times 7,30\% = 23.930,67 \).
  2. Subtraia a dedução: \( 23.930,67 - 5.940,00 = 17.280,05 \).
  3. Calcule a alíquota efetiva: 

  $$
  \frac{17.280,05}{327.790,00} \approx 5,27\%
  $$

  4. O valor do DAS é, então, R$ 1.997,86.

::

::card

#title
:icon{name="fluent:person-support-24-filled"} Precisa de ajuda e não encontrou aqui?
#description
Entre em contato, estamos disponíveis para ajudar você com qualquer dúvida ou problema que possa ter.

---

- :icon{name="akar-icons-whatsapp-fill"} **whatsapp:** [(34) 99771-3731](https://wa.me/trilinksoftware)
- :icon{name="teenyicons:envelope-solid"} **E-mail:** [equipe@trilinksoftware.com.br](mailto:equipe@trilinksoftware.com.br)

::
