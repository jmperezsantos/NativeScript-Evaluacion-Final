import { Component, OnInit } from "@angular/core";
import { SearchBar } from "ui/search-bar";
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
import { NetworkingService } from "../services/networking.service";

@Component({
    selector: 'finder',
    templateUrl: 'finder.component.html',
    styleUrls: ["finder.component.css"]
})
export class FinderComponent implements OnInit {

    constructor(
        private networking:NetworkingService
    ) {
        this.universities = [];
        for (var i = 0; i < 50; i++) {
            this.universities.push({
                id: i,
                name: 'i ' + i
            });
        }
    }

    searchPhrase: string = '';

    universities: any[] = [];

    ngOnInit() {

    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    onLocate() {

        if (!isEnabled()) {

            enableLocationRequest().then(
                () => {
                    this.onLocate();
                },
                err => {
                    alert("Debes dar permisos a la localización!");
                })

        } else {

            getCurrentLocation({
                desiredAccuracy: 3
            }).then(
                location => {

                    if (location) {
                        alert("Location: lat=" + location.latitude + " - lon=" + location.longitude);
                    } else {
                        alert("No hay ubicación");
                    }

                },
                error => {
                    alert("Ocurrió un error al buscar última ubicación");
                }
                );
        }

    }

}