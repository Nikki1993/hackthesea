import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class IvService {

  FoSRaw: number = 0.00; // initial value
  FoSProcessed: number;

  // Intellegent Vessel = IV... I am so funny xD

  constructor(private http: Http) {}

  public log(LogMsg: any) {
    console.log(LogMsg);
  }

  getData() {
    return this.http.get('https://hackthesea-f2092.firebaseio.com/value.json').map(
        (response: Response) => response.json()
      );
  }

  getRawFoS() {
    return this.FoSRaw;
  }

  setRawFoS(num: number) {
    this.FoSRaw = num;
  }

  getProcessedFoS() {
    return this.FoSProcessed;
  }

  setProcessedFoS(numberFoS: number) {
    this.FoSProcessed = numberFoS;
  }
}
