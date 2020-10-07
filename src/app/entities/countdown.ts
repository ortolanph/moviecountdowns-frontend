import {MovieLink} from "./movie-link";
import {MovieStatus} from "./movie-status";

export class Countdown {

  id: number;
  title: string;
  releaseDate: string;
  status: MovieStatus;
  sinopsis: string;
  score: number;
  links: MovieLink[];

}
