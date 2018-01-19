import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NetworkingService {

    constructor(
        private http: HttpClient
    ) {

    }

    findUniversities(
        searchText: string,
        success: (universities: any[]) => void,
        error: () => void,
        location?: any
    ) {

        let url = "" + searchText;

        this.http.get(url, {

        }).subscribe(
            data => {

            },
            error => {

            }
            );
    }

}