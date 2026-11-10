import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { Game, GAMES, money, normalize } from './games';
import { GameArt, GameCard, GamePrice } from './components';
@Component({selector:'app-root',imports:[GameArt,GameCard,GamePrice],templateUrl:'./app.html'})
export class App {
 readonly games=GAMES; readonly genres=['Todos','Aventura','Exploração','Corrida','Simulação'];
 query=signal('');genre=signal('Todos');onlySaved=signal(false);sort=signal('curadoria');saved=signal<ReadonlySet<string>>(new Set());selected=signal<Game|null>(null);
 detail=viewChild<ElementRef<HTMLDialogElement>>('detail'); private opener:HTMLElement|null=null;
 filtered=computed(()=>this.games.filter(g=>(this.genre()==='Todos'||g.genre===this.genre())&&(!this.onlySaved()||this.saved().has(g.id))&&normalize(g.title+' '+g.genre).includes(normalize(this.query()))).sort((a,b)=>this.sort()==='preco'?a.price-b.price:0));
 toggle(id:string){this.saved.update(s=>{const next=new Set(s);next.has(id)?next.delete(id):next.add(id);return next;});}
 reset(){this.query.set('');this.genre.set('Todos');this.onlySaved.set(false);this.sort.set('curadoria');}
 open(game:Game){this.opener=document.activeElement as HTMLElement;this.selected.set(game);this.detail()?.nativeElement.showModal();}
 close(){this.detail()?.nativeElement.close();this.opener?.focus();}
 search(event:Event){this.query.set((event.target as HTMLInputElement).value);}
 changeSort(event:Event){this.sort.set((event.target as HTMLSelectElement).value);}
 format=money;
}

