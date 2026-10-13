import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from './app.routes';

/** Recorre el flujo completo de la tarea sin navegador real. */
describe('Flujo de la aplicación', () => {
  let harness: RouterTestingHarness;
  let errorSpy: ReturnType<typeof vi.spyOn>;

  const root = () => harness.routeNativeElement as HTMLElement;
  const cards = () => Array.from(root().querySelectorAll('app-movie-card'));
  const setInput = async (placeholder: string, value: string) => {
    const input = root().querySelector<HTMLInputElement>(`input[placeholder="${placeholder}"]`)!;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    await harness.fixture.whenStable();
    harness.detectChanges();
  };

  beforeEach(async () => {
    errorSpy = vi.spyOn(console, 'error');
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
    harness = await RouterTestingHarness.create();
  });

  afterEach(() => {
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  it('muestra todas las películas y filtra por director sin recargar', async () => {
    await harness.navigateByUrl('/');
    const total = cards().length;
    expect(total).toBeGreaterThan(5);

    await setInput('Ej. Nolan', 'nolan');
    expect(cards().length).toBeGreaterThan(0);
    expect(cards().length).toBeLessThan(total);
    expect(cards().every((c) => c.textContent?.includes('Christopher Nolan'))).toBe(true);

    await setInput('Ej. Nolan', 'zzzz');
    expect(cards().length).toBe(0);
    expect(root().querySelector('.empty')).toBeTruthy();
  });

  it('muestra el detalle y permite marcar y quitar favorito', async () => {
    await harness.navigateByUrl('/movies/5');
    expect(root().querySelector('h1')?.textContent).toContain('Inception');

    const button = () => root().querySelector<HTMLButtonElement>('.actions button')!;
    expect(button().textContent).toContain('Marcar como favorita');

    button().click();
    harness.detectChanges();
    expect(button().textContent).toContain('Quitar de favoritos');

    button().click();
    harness.detectChanges();
    expect(button().textContent).toContain('Marcar como favorita');
  });

  it('muestra mensaje si la película no existe', async () => {
    await harness.navigateByUrl('/movies/9999');
    expect(root().textContent).toContain('Película no encontrada');
  });

  it('lista favoritos y la película desaparece al quitarla', async () => {
    await harness.navigateByUrl('/favorites');
    expect(cards().length).toBe(0);

    await harness.navigateByUrl('/movies/1');
    root().querySelector<HTMLButtonElement>('.actions button')!.click();
    await harness.navigateByUrl('/movies/2');
    root().querySelector<HTMLButtonElement>('.actions button')!.click();

    await harness.navigateByUrl('/favorites');
    expect(cards().length).toBe(2);

    const remove = cards()[0].querySelector<HTMLButtonElement>('button')!;
    remove.click();
    harness.detectChanges();
    expect(cards().length).toBe(1);
    expect(cards()[0].textContent).toContain('The Godfather');
  });
});
