import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  omdbapiBaseUrl,
  MovieListResponse,
} from '@bp/bp-training/movies/shared/util';

@Injectable({
  providedIn: 'root',
})
export class DataFactoryService {
  httpClient = inject(HttpClient);

  searchMovieByPhrase(searchPhrase: string) {
    return this.httpClient.get<MovieListResponse>(
      `${omdbapiBaseUrl}?s${searchPhrase}`
    );
  }
}
