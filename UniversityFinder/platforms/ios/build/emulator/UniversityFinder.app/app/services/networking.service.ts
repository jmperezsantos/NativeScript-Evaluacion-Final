import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { University } from "../model/University";
import { Location } from "nativescript-geolocation";

@Injectable()
export class NetworkingService {

    constructor(
        private http: HttpClient
    ) {

    }

    findUniversities(
        searchText: string,
        success: (universities: University[]) => void,
        error: () => void,
        country?: string
    ) {

        var url = "http://universities.hipolabs.com/search?name=" + searchText;
        if (country != null) {

            url = url + '&country=' + country;

        }

        console.log("URL: " + url);

        this.http.get(url,
            {}
        ).subscribe(
            data => {

                success(data as Array<University>);

            },
            err => {
                
                console.log(err);
                error();

            }
            );
    }

    findCountryByLocation(location: Location,
        success: (country: string) => void,
        error: () => void) {

        let url = 'http://api.geonames.org/findNearbyPlaceNameJSON?username=jmperezsantos&lat=' + location.latitude + '&lng=' + location.longitude;

        this.http.get(url,
            {}
        ).subscribe(
            data => {

                let json = data as any;

                success(json.geonames[0].countryName);

            },
            err => {

                error();

            }
            );

    }

}