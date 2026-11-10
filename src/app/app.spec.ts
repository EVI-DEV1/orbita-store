import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest';
import { App } from './app';
import { GAMES, money } from './games';

describe('Órbita: exploração do catálogo',()=>{
 it('combina busca sem acentos, gênero e desejos; restaura catálogo no estado vazio',()=>{
  const app=TestBed.createComponent(App).componentInstance;
  app.query.set('EXPLORACAO');app.genre.set('Exploração');app.onlySaved.set(true);
  expect(app.filtered()).toHaveLength(0);
  app.toggle('solaris');expect(app.filtered().map(g=>g.id)).toEqual(['solaris']);
  app.query.set('não existe');expect(app.filtered()).toHaveLength(0);
  app.reset();expect(app.filtered()).toHaveLength(6);expect(app.saved().has('solaris')).toBe(true);
 });
 it('ordena preços em centavos e inclui o título gratuito',()=>{
  const app=TestBed.createComponent(App).componentInstance;app.sort.set('preco');
  expect(app.filtered()[0].id).toBe('satelite');
  const prices=app.filtered().map(g=>g.price);expect(prices).toEqual([...prices].sort((a,b)=>a-b));
  expect(money(12990)).toContain('129,90');expect(money(0)).toBe('Gratuito');
 });
 it('atualiza estado acessível de favorito pelo componente filho e filtra a lista',async()=>{
  await TestBed.configureTestingModule({imports:[App]}).compileComponents();
  const fixture=TestBed.createComponent(App);await fixture.whenStable();
  const root=fixture.nativeElement as HTMLElement;
  const save=root.querySelector('.wish') as HTMLButtonElement;save.click();await fixture.whenStable();
  expect(save.getAttribute('aria-pressed')).toBe('true');
  fixture.componentInstance.onlySaved.set(true);await fixture.whenStable();
  expect(root.querySelectorAll('game-card')).toHaveLength(1);
  (root.querySelector('.wish') as HTMLButtonElement).click();await fixture.whenStable();
  expect(root.querySelector('.empty')?.textContent).toContain('Nenhum mundo');
 });
 it('mantém dados completos e preços coerentes para todos os cards',()=>{
  expect(new Set(GAMES.map(g=>g.id)).size).toBe(GAMES.length);
  for(const game of GAMES){expect(game.description.length).toBeGreaterThan(40);expect(Number.isInteger(game.price)).toBe(true);if(game.oldPrice)expect(game.oldPrice).toBeGreaterThan(game.price);}
 });
});

