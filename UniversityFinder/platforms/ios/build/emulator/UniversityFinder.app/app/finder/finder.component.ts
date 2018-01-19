import { Component, OnInit } from "@angular/core";
import { SearchBar } from "ui/search-bar";
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";

@Component({
    selector: 'finder',
    templateUrl: 'finder.component.html',
    styleUrls: ["finder.component.css"]
})
export class FinderComponent implements OnInit {

    constructor() {
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
        
        isEnabled().then(function (isEnabled) {
            if (!isEnabled) {
                enableLocationRequest().then(function () {
                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
        
    }

}