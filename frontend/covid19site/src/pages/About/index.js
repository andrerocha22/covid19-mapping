import React from "react";
import Header from "../../components/Header";
import "./styles.scss";

export default function About() {
  return (
    <>
      <Header />
      <div className="content">
        <section className="title">
          <h1>Sobre a doença</h1>
        </section>
        <section  className="body">
          <h1>O que é COVID-19</h1>
          <p>
            A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que
            apresenta um quadro clínico que varia de infecções assintomáticas a
            quadros respiratórios graves. De acordo com a Organização Mundial de
            Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%)
            podem ser assintomáticos e cerca de 20% dos casos podem requerer
            atendimento hospitalar por apresentarem dificuldade respiratória e
            desses casos aproximadamente 5% podem necessitar de suporte para o
            tratamento de insuficiência respiratória (suporte ventilatório).
          </p>
        </section>

        <section  className="body">
          <h1>O que é o coronavírus?</h1>
          <p>
            Coronavírus é uma família de vírus que causam infecções
            respiratórias. O novo agente do coronavírus foi descoberto em
            31/12/19 após casos registrados na China. Provoca a doença chamada
            de coronavírus (COVID-19).
          </p>
          <p>
            Os primeiros coronavírus humanos foram isolados pela primeira vez em
            1937. No entanto, foi em 1965 que o vírus foi descrito como
            coronavírus, em decorrência do perfil na microscopia, parecendo uma
            coroa.
          </p>
          <p>
            A maioria das pessoas se infecta com os coronavírus comuns ao longo
            da vida, sendo as crianças pequenas mais propensas a se infectarem
            com o tipo mais comum do vírus. Os coronavírus mais comuns que
            infectam humanos são o alpha coronavírus 229E e NL63 e beta
            coronavírus OC43, HKU1.
          </p>
        </section>

        <section  className="body">
          <h1>Quais são os sintomas</h1>
          <p>
            Os sintomas da COVID-19 podem variar de um simples resfriado até uma
            pneumonia severa. Sendo os sintomas mais comuns:
          </p>
          <ul>
            <li>Tosse</li>
            <li>Febre</li>
            <li>Coriza</li>
            <li>Dor de Garganta</li>
            <li>Dificuldade de respirar</li>
          </ul>
        </section>

        <section  className="body">
          <h1>Como é transmitido</h1>
          <p>
            A transmissão acontece de uma pessoa doente para outra ou por
            contato próximo por meio de:
          </p>
          <ul>
            <li>Toque do aperto de mão;</li>
            <li>Gotículas de saliva;</li>
            <li>Espirro;</li>
            <li>Tosse;</li>
            <li>Catarro;</li>
            <li>
              Objetos ou superfícies contaminadas, como celulares, mesas,
              maçanetas, brinquedos, teclados de computador etc.
            </li>
          </ul>
        </section>

        <section  className="body">
          <h1>Diagnóstico</h1>
          <p>
            O diagnóstico da COVID-19 é realizado primeiramente pelo
            profissional de saúde que deve avaliar a presença de critérios
            clínicos:
          </p>
          <ul>
            <li>
              Pessoa com quadro respiratório agudo, caracterizado por sensação
              febril ou febre, que pode ou não estar presente na hora da
              consulta (podendo ser relatada ao profissional de saúde),
              acompanhada de tosse OU dor de garganta OU coriza OU dificuldade
              respiratória, o que é chamado de Síndrome Gripal.
            </li>
            <li>
              Pessoa com desconforto respiratório/dificuldade para respirar OU
              pressão persistente no tórax OU saturação de oxigênio menor do que
              95% em ar ambiente OU coloração azulada dos lábios ou rosto, o que
              é chamado de Síndrome Respiratória Aguda Grave
            </li>
          </ul>
          <p>
            Caso o paciente apresente os sintomas, o profissional de saúde
            poderá solicitar exame laboratoriais:
          </p>
          <ul>
            <li>
              De biologia molecular (RT-PCR em tempo real) que diagnostica tanto
              a COVID-19, a Influenza ou a presença de Vírus Sincicial
              Respiratório (VSR).
            </li>
            <li>
              Imunológico (teste rápido) que detecta, ou não, a presença de
              anticorpos em amostras coletadas somente após o sétimo dia de
              início dos sintomas.
            </li>
          </ul>
          <p>
            O diagnóstico da COVID-19 também pode ser realizado a partir de
            critérios como: histórico de contato próximo ou domiciliar, nos
            últimos 7 dias antes do aparecimento dos sintomas, com caso
            confirmado laboratorialmente para COVID-19 e para o qual não foi
            possível realizar a investigação laboratorial específica, também
            observados pelo profissional durante a consulta.
          </p>
        </section>
        <section  className="body">
          <h1>Como se proteger</h1>
          <p>As recomendações de prevenção à COVID-19 são as seguintes:</p>
          <ul>
            <li>
              Lave com frequência as mãos até a altura dos punhos, com água e
              sabão, ou então higienize com álcool em gel 70%.
            </li>
            <li>
              Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o
              braço, e não com as mãos.
            </li>
            <li>Evite tocar olhos, nariz e boca com as mãos não lavadas.</li>
            <li>Ao tocar, lave sempre as mãos como já indicado.</li>
            <li>
              Mantenha uma distância mínima de cerca de 2 metros de qualquer
              pessoa tossindo ou espirrando.
            </li>
            <li>
              Evite abraços, beijos e apertos de mãos. Adote um comportamento
              amigável sem contato físico, mas sempre com um sorriso no rosto.
            </li>
            <li>
              Higienize com frequência o celular e os brinquedos das crianças.
            </li>
            <li>
              Evite circulação desnecessária nas ruas, estádios, teatros,
              shoppings, shows, cinemas e igrejas. Se puder, fique em casa.
            </li>
            <li>
              Não compartilhe objetos de uso pessoal, como talheres, toalhas,
              pratos e copos.
            </li>
            <li>
              Utilize máscaras caseiras ou artesanais feitas de tecido em
              situações de saída de sua residência.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
