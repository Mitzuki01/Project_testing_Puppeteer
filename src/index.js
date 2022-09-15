  //DECLARAÇÃO DE QUE O CÓDIGO EM SI SERÁ COM BASE NA BIBLIOTECA PUPPETEER
  const puppeteer = require('puppeteer');
  (async () => {
    const browser = await puppeteer.launch({headless:false}); 
    const page = await browser.newPage();
    await page.setViewport({

    //RESOLUÇÃO DA PAGINA CHROMIUN QUE SERÁ ABERTA AO EXECUTAR A FUNÇÃO
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
    });

    //LINKAMENTO COM O SITE AONDE SERÁ FEITA O PROCESSO DE SCRAPPING

      await page.goto('https://app.sisloc.com.br/Portal/Login.aspx');

    //AÇÃO QUE SERÁ EXECUTADA A PARTI DO MOMENTO EM QUE O SITE FOR ABERTO, SERÁ ESCOLHIDO AONDE MEXEREMOS DE FORMA AUTOMATICA (COM BASE NA INFORMAÇÃO ENVIADA) E SERÁ EXECUTADA COM UM DELAY PARA NÃO DAR PROBLEMAS COM BOOT
      await page.type('input[name="WLIB500Theme_wt59$block$wtInputsLogin$wtUserNameInput"]' ,"email",{delay:100});
      await page.type('input[name="WLIB500Theme_wt59$block$wtInputsLogin$wtPasswordInput"]',"senha",{delay:100});
    
      await page.keyboard.press('Enter');
    
  })();







