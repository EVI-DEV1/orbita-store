import { Component, input, output } from '@angular/core';
import { Game, money } from './games';
@Component({selector:'game-label',template:`<span class="badge">{{text()}}</span>`})
export class GameLabel { text=input.required<string>(); }
@Component({selector:'game-price',template:`<div class="price">@if(previous()){<del>{{format(previous()!)}}</del>}<strong>{{format(value())}}</strong></div>`})
export class GamePrice { value=input.required<number>(); previous=input<number>(); format=money; }
@Component({selector:'game-art',template:`<div class="art" [class]="'art '+kind()" [style.--accent]="color()" aria-hidden="true"><i class="planet"></i><i class="terrain"></i><span class="art-no">Ó / {{number()}}</span></div>`})
export class GameArt { kind=input.required<string>();color=input.required<string>(); number=input('01'); }
@Component({selector:'game-card',imports:[GameLabel,GamePrice,GameArt],template:`
<article class="game-card">
 <button class="cover-button" (click)="open.emit(game())" [attr.aria-label]="'Ver detalhes de '+game().title"><game-art [kind]="game().art" [color]="game().color" [number]="number()"/><game-label [text]="game().label"/></button>
 <div class="card-meta"><span>{{game().genre}}</span><span>{{game().platform}}</span></div>
 <h3><button (click)="open.emit(game())">{{game().title}}</button></h3>
 <div class="card-bottom"><game-price [value]="game().price" [previous]="game().oldPrice"/><button class="wish" [attr.aria-pressed]="saved()" [attr.aria-label]="(saved()?'Remover ':'Salvar ')+game().title+' na lista de desejos'" (click)="toggle.emit(game().id)">{{saved()?'♥':'♡'}}</button></div>
</article>`})
export class GameCard { game=input.required<Game>();saved=input(false);number=input('01');open=output<Game>();toggle=output<string>(); }
