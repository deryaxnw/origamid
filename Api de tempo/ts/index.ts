const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

const sectionInfos = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!input || !sectionInfos) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("local precisa ter pelo menso 3 letras");
  }

try {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=aade76dc49a569bf31ad186812a6d99b&lang=pt_br&units=metric`
    );
    const dados = await response.json();
  
    const info = {
      temperatura: Math.round(dados.main.temp),
      local: dados.name,
      icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`,
    };
  
    sectionInfos.innerHTML = `
          <div class="tempo-dados">
                  <h2>${info.local}</h2>
                  <span>${info.temperatura}°C</span>
              </div>
  
              <img src="${info.icone}" alt="tempo">
    
    `;
} catch(err){
    console.error("falha na requisição da api")
}
});
