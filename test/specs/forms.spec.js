const FormsScreen = require('../pageobjects/forms.screen');

describe('Formulários', () => {
  it('deve preencher o formulário e enviar com sucesso', async () => {
    await FormsScreen.fillForm('Teste formulário');
    const result = await FormsScreen.getResult();

    expect(result).to.contain('Teste formulário');
  });

  it('deve mostrar mensagem de erro ao enviar formulário vazio', async () => {
    await FormsScreen.submitEmpty();
    const result = await FormsScreen.getResult();

    expect(result.toLowerCase()).to.contain('error');
  });
});
