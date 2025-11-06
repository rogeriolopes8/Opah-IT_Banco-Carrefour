describe('Smoke test', () => {
  it('deve abrir o app e verificar o título da tela inicial', async () => {
    const homeTitle = await $('~Home-screen');
    await expect(homeTitle).toBeDisplayed();
  });
});
