import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent {
  @Input() rating = 0;
  @Input() numOfReviews = 0;

  onClick(ratingValue) {
    this.rating = ratingValue;
  }
}
