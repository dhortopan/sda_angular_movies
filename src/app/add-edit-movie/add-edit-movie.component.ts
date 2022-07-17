import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnInit, OnChanges {
  @Input() movie: any;

  //proprietati pe care le vom adauga si in html
  title: string = '';
  description: string = '';
  year: string = '';
  director: string = '';

  constructor(private movieService: MovieService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
       if(this.movie){
         this.title= this.movie.title;
         this.description = this.movie.description;
         this.year = this.movie.year;
         this.director = this.movie.director;
       }
    }

  ngOnInit(): void {
  }

  onSubmitClicked(): void {
  this.movieService.add(this.title,this.description, this.year,this.director).subscribe(response=>{
    console.log(response);
    })
  }

  onUpdateClicked(): void {
    this.movieService.update(this.movie.id, this.title,this.description, this.year, this.director).subscribe(response=>{
      console.log(response);
    })
  }
}
