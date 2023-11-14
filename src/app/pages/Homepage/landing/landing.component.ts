import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../Store/Actions/homepage.actions'
import { post } from '../interfaces/homepage.interface';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'homepage-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class HomepageLandingComponent implements OnInit, OnDestroy{

  public posts: post[];
  public count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>,
    private homepageService: HomepageService
  ) {
    this.posts = [];
    this.count$ = store.pipe(select('count'));
  }

  public ngOnInit(): void {
    this.homepageService.getPosts().subscribe((response) => {
      this.posts = response;
    })
  }

  public ngOnDestroy(): void {
      
  }

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }

  public reset(): void {
    this.store.dispatch(reset());
  }
}
