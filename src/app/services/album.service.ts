import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private http: HttpClient
  ) { }

  createAlbum(album) {
    return this.http.post(`${appConfig.apiUrl}/albums`, album);
  }
  getAlbums() {
    return this.http.get(`${appConfig.apiUrl}/albums/user-albums/${JSON.parse(localStorage.getItem('GLOBE_USER')).id}`);
  }
  getAlbumsImages(id){
    return this.http.get(`${appConfig.apiUrl}/albums/${id}`);
  }
  updateAlbum(updateAlb){
    return this.http.post(`${appConfig.apiUrl}/albums/update-files`, updateAlb);
  }

  deleteImage(id) {
    return this.http.delete(`${appConfig.apiUrl}/files/${id}`);
  }

  getUserAlbums(id) {
    return this.http.get(`${appConfig.apiUrl}/albums/user-albums/${id}`);
  }

}
