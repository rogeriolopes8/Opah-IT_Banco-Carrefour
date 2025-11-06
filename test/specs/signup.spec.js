const LoginScreen = require('../pageobjects/login.screen');

describe('Cadastro', () => {
  it('deve cadastrar novo usuário com sucesso', async () => {
    const rand = Date.now();
    const email = `novo${rand}@teste.com`;

    await LoginScreen.signup(email, '123456');
    const msg = await LoginScreen.getAlertText();

    expect(msg.toLowerCase()).to.contain('success');
    await LoginScreen.closeAlertIfVisible();
  });

  it('deve exibir erro ao cadastrar com e-mail inválido', async () => {
    await LoginScreen.signup('emailinvalido', '123456');
    const msg = await LoginScreen.getAlertText();

    expect(msg.toLowerCase()).to.contain('valid email');
    await LoginScreen.closeAlertIfVisible();
  });
});
