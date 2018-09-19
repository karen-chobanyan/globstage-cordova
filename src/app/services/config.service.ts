import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ConfigService {
  loadingSpinner$ = new Subject<boolean>();
  locale = 'Ru';

  private _loadingSpinner = false;

  set loadingSpinner(value: boolean) {
    if (this._loadingSpinner !== value) {
      this._loadingSpinner = value;
      this.loadingSpinner$.next(value);
    }
  }
}
