import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-vendor-registration",
  templateUrl: "./vendor-registration.component.html",
  styleUrls: ["./vendor-registration.component.scss"],
})
export class VendorRegistrationComponent implements OnInit {
  isLoading = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  onVendorRegister(vendorform: NgForm) {
    if (vendorform.invalid) {
      return;
    }
    this.isLoading = true;
    console.log(vendorform);
    this.authService.registerVendor(
      vendorform.value.name,
      vendorform.value.CompanyName,
      vendorform.value.CompanyAddress,
      vendorform.value.CompanyPostcode,
      vendorform.value.CompanyContact,
      vendorform.value.email,
      vendorform.value.password
    );
  }
}
