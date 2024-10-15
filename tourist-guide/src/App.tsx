import { Locale } from "./components/Locale"

function App() {

  return (
    <div className="bg-boho h-full mx-auto p-20">
      <div>
        <h1 className="text-red-500 uppercase font-bold text-sm">sua próxima viagem:</h1>
        <h2 className="font-bold text-2xl pt-2">Conheça Busan</h2>
        <img src="src/assets/hero.svg" alt="imagem de busan" className="mt-8 rounded-xl w-full" />
        <p className="italic text-sm text-center pt-6">Busan, a estrela em ascensão da Coreia do Sul, oferece de tudo, desde churrascarias de primeira linha até tradicionais barracas de comida de rua. Aqui, exploramos a segunda cidade da Coreia do Sul e descobrimos as suas ofertas culinárias.</p>
      </div>

      <div className="border-t mt-10">
        <h2 className="text-red-500 uppercase font-bold text-sm pt-16">para os amantes de história</h2>
        <h3 className="font-bold text-2xl pt-1">Descubra 3 destinos imperdíveis em Busan</h3>
        <img src="src/assets/hero.svg" alt="imagem de busan" className="mt-8 rounded-xl w-full" />
        <p className="text-sm text-justify pt-6">As atrações de Busan vão desde templos budistas centenários que pontilham as montanhas e o litoral da cidade até praias imaculadas com águas cristalinas. Esta cidade litorânea tem muitas coisas para fazer o ano todo - as famílias podem passar o tempo em um aquário à beira-mar, os compradores podem explorar bairros vibrantes e os amantes da natureza podem desfrutar de longas caminhadas até mirantes panorâmicos.
        Os santuários budistas que pontilham a costa e as montanhas de Busan têm uma arquitetura impressionante que irá encantar os fotógrafos.</p>
      </div>

      <div className="pt-16">
        <Locale 
        src="src/assets/templo-haedong.svg" 
        alt="Fotografia do Templo Haedong Yonggungsa" 
        title="1. Templo Haedong Yonggungsa"
        description="O Templo Haedong Yonggungsa é um templo budista localizado no extremo nordeste de Busan. Construído em 1376, é um dos poucos templos na Coreia construídos à beira-mar – você pode desfrutar de vistas do Mar do Leste de um lado e de belas montanhas do outro."
        colors={["#0C51A7"]} bullet={["História"]}/>

        <Locale
        src="src/assets/templo-beomeo-a.svg"
        alt="Templo Beomeo-sa"
        title="2. Templo Beomeo-sa"
        description="O Templo Beomeo-sa é um dos maiores santuários da Coreia do Sul. Ele está localizado no alto da borda leste da montanha Geumjeongsa e fica distante da agitação da cidade. O Daeungjeon Hall do templo é um exemplo bem preservado da arquitetura da Dinastia Joseon."
        colors={["#0C51A7"]} bullet={["História"]}/>

        <Locale
        src="src/assets/parque-yongdusan.svg"
        alt="Parque Yongdusan"
        title="3. Parque Yongdusan"
        description="O Parque Yongdusan, localizado no centro de Busan, abriga alguns dos monumentos mais importantes da cidade. Você pode ver vistas espetaculares do topo da Torre Busan, de 120 metros de altura. O parque tem 2 museus – confira os instrumentos musicais tradicionais no Museum of World Folk Instruments e mais de 80 veleiros coreanos no Exhibition Hall of World Model Boats."
        colors={["#591B98", "#E5245E", "#E95E10"]}
        bullet={["Casais", "Famílias", "Orçamento"]}/>
      </div>

      <div className="border-t">
        <p className="text-sm text-center pt-6">As melhores coisas para fazer em Busan mostram a reputação da cidade como um importante porto marítimo na Ásia. Frequentemente vista como a essência da Coreia do Sul, você experimentará uma atmosfera única em termos de diversidade étnica e cultural, já que a cidade recebe um público cosmopolita o ano todo. </p>
      </div>
    </div>

  )
}

export default App
