import { Component, OnInit } from "@angular/core";
import { SearchBar } from "ui/search-bar";
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
import { NetworkingService } from "../services/networking.service";
import { University } from "../model/University";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "app-finder",
    moduleId: module.id,
    styleUrls: ["finder.component.css"],
    templateUrl: "finder.component.html"
})
export class FinderComponent implements OnInit {

    constructor(
        private networking: NetworkingService
    ) {
    }

    searchPhrase: string = '';

    universities: University[] = [];

    country?: string;

    isLoading = false;

    ngOnInit() {

    }

    public onSubmit(args) {

        let searchBar = <SearchBar>args.object;

        searchBar.dismissSoftInput();

        this.performSearching();

    }

    public onTextChanged(args) {

        let searchBar = <SearchBar>args.object;

        this.searchPhrase = searchBar.text;

    }

    onLocate() {

        this.isLoading = true;

        if (!isEnabled()) {

            enableLocationRequest().then(
                () => {
                    this.onLocate();
                },
                err => {

                    alert("Debes dar permisos a la localización!");

                    this.isLoading = false;

                })

        } else {

            getCurrentLocation({
                desiredAccuracy: 3
            }).then(
                location => {

                    if (location) {

                        this.isLoading = true;

                        this.networking.findCountryByLocation(
                            location,
                            country => {

                                this.isLoading = false;

                                console.log("País: " + country);

                                this.country = country

                                this.showDialog();

                            }, () => {

                                alert("Ocurrió un error al buscar País");

                                this.isLoading = false;

                            })

                    } else {

                        this.isLoading = false;

                    }

                },
                rejected => {

                    alert("Ocurrió un error al buscar última ubicación");

                    this.isLoading = false;

                }
                );

        }

    }

    performSearching() {

        this.isLoading = true;

        this.networking.findUniversities(
            this.searchPhrase,
            universities => {

                this.universities = universities;

                this.isLoading = false;

            }, () => {

                alert("Ocurrió un error al consumir el servicio Web");

            },
            this.country);
    }

    showDialog() {

        console.log("Showing dialog");

        dialogs.action({
            message: "Tu ubicación es: " + this.country,
            cancelButtonText: "Cancel text",
            actions: ["Buscar en mi ubicación", "Buscar en todo el mundo"]
        }).then(result => {

            console.log("Dialog result: " + result);

            if (result == "Buscar en mi ubicación") {

                this.performSearching();

            } else if (result == "Buscar en todo el mundo") {

                this.country = '';

                this.performSearching();

            }
        });

    }

}