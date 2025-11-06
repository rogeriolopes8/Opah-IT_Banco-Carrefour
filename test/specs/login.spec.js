const LoginScreen = require('../pageobjects/login.screen');

describe('Login', () => {
  it('deve logar com credenciais válidas', async () => {
    const rand = Date.now();
    const email = `valid${rand}@test.com`;
    const password = '123456';

    // usa o fluxo de cadastro para garantir usuário válido
    await LoginScreen.signup(email, password);
    await LoginScreen.closeAlertIfVisible();

    await LoginScreen.login(email, password);
    const msg = await LoginScreen.getAlertText();

    expect(msg).to.contain('success'); // ajuste pro texto real
    await LoginScreen.closeAlertIfVisible();
  });

  it('não deve logar com senha inválida', async () => {
    await LoginScreen.login('usuario@invalido.com', 'errada');
    const msg = await LoginScreen.getAlertText();

    expect(msg.toLowerCase()).to.contain('invalid');
    await LoginScreen.closeAlertIfVisible();
  });

  it('deve exibir erro ao tentar logar sem preencher campos', async () => {
    await LoginScreen.open();
    await LoginScreen.btnLogin.click();
    const msg = await LoginScreen.getAlertText();

    expect(msg.toLowerCase()).to.contain('required');
    await LoginScreen.closeAlertIfVisible();
  });
});
