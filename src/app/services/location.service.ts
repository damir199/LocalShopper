import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iVendor } from "../interfaces/ivendor";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  private vendorsData: iVendor[];
  private location: string;
  private currentlocation: string;

  getVendors(postcode: string) {
    return { ...this.vendorsData.find(p => p.postcode == postcode) }
  }
}
