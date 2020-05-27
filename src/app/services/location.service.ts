import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { iVendor } from "../interfaces/ivendor";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private http: HttpClient) {}

  private vendorsData: iVendor[];
  private location: string;
  private currentlocation: string;
  private calcdistance;

  getVendors(postcode: string) {
    return { ...this.vendorsData.find((p) => p.postcode.includes(postcode)) };
  }

  getDistance() {
    let Vendors = this.vendorsData;
    let sortedVendors = [];

    for (let vendor of Vendors) {
    }
  }
}
