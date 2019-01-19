import { ActivatedRoute, Router } from '@angular/router';
import {
  Directive,
  EventEmitter,
  HostListener,
  OnInit,
  Output
} from '@angular/core';
import { SlidesDeckComponent } from '../deck/deck.component';

@Directive({
  // tslint:disable-next-line:all TODO: Fix linter warnings on the selector and delete this comment.
  selector: '[slidesRouting]'
})
export class SlidesRoutingDirective implements OnInit {
  activeSlideId: string;
  @Output() change = new EventEmitter();
  private ids: { [index: number]: string } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deck: SlidesDeckComponent
  ) {}

  getId(index: number) {
    return this.deck.slides &&
      this.deck.slides[index] &&
      this.deck.slides[index].id
      ? this.deck.slides[index].id
      : index;
  }

  navigate(url: string) {
    this.router.navigate(['../' + url], {
      relativeTo: this.route,
      queryParamsHandling: 'merge'
    });
  }

  @HostListener('slideChange', ['$event']) slideChange(index) {
    this.navigate(this.getId(index));
  }

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];
    const index = this.deck.slides.findIndex(s => s.id === id);
    // TODO(kirjs): Clean this up
    const index2 = Number(index === -1 ? id : index);
    this.deck.goToSlide(isNaN(index2) ? 0 : index2);
  }
}
