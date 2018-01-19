"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var NetworkingService = /** @class */ (function () {
    function NetworkingService(http) {
        this.http = http;
    }
    NetworkingService.prototype.findUniversities = function (searchText, success, error, country) {
        var url = "http://universities.hipolabs.com/search?name=" + searchText;
        if (country != null) {
            url = url + '&country=' + country;
        }
        console.log("URL: " + url);
        this.http.get(url, {}).subscribe(function (data) {
            success(data);
        }, function (err) {
            console.log(err);
            error();
        });
    };
    NetworkingService.prototype.findCountryByLocation = function (location, success, error) {
        var url = 'http://api.geonames.org/findNearbyPlaceNameJSON?username=jmperezsantos&lat=' + location.latitude + '&lng=' + location.longitude;
        this.http.get(url, {}).subscribe(function (data) {
            var json = data;
            success(json.geonames[0].countryName);
        }, function (err) {
            error();
        });
    };
    NetworkingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NetworkingService);
    return NetworkingService;
}());
exports.NetworkingService = NetworkingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29ya2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUtsRDtJQUVJLDJCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFHNUIsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUNJLFVBQWtCLEVBQ2xCLE9BQTZDLEVBQzdDLEtBQWlCLEVBQ2pCLE9BQWdCO1FBR2hCLElBQUksR0FBRyxHQUFHLCtDQUErQyxHQUFHLFVBQVUsQ0FBQztRQUN2RSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVsQixHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFFdEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDYixFQUFFLENBQ0wsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJO1lBRUEsT0FBTyxDQUFDLElBQXlCLENBQUMsQ0FBQztRQUV2QyxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBRUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQztRQUVaLENBQUMsQ0FDQSxDQUFDO0lBQ1YsQ0FBQztJQUVELGlEQUFxQixHQUFyQixVQUFzQixRQUFrQixFQUNwQyxPQUFrQyxFQUNsQyxLQUFpQjtRQUVqQixJQUFJLEdBQUcsR0FBRyw2RUFBNkUsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRTNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDYixFQUFFLENBQ0wsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJO1lBRUEsSUFBSSxJQUFJLEdBQUcsSUFBVyxDQUFDO1lBRXZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFDLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFFQyxLQUFLLEVBQUUsQ0FBQztRQUVaLENBQUMsQ0FDQSxDQUFDO0lBRVYsQ0FBQztJQWhFUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FJUyxpQkFBVTtPQUhuQixpQkFBaUIsQ0FrRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFVuaXZlcnNpdHkgfSBmcm9tIFwiLi4vbW9kZWwvVW5pdmVyc2l0eVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXR3b3JraW5nU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBmaW5kVW5pdmVyc2l0aWVzKFxuICAgICAgICBzZWFyY2hUZXh0OiBzdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3M6ICh1bml2ZXJzaXRpZXM6IFVuaXZlcnNpdHlbXSkgPT4gdm9pZCxcbiAgICAgICAgZXJyb3I6ICgpID0+IHZvaWQsXG4gICAgICAgIGNvdW50cnk/OiBzdHJpbmdcbiAgICApIHtcblxuICAgICAgICB2YXIgdXJsID0gXCJodHRwOi8vdW5pdmVyc2l0aWVzLmhpcG9sYWJzLmNvbS9zZWFyY2g/bmFtZT1cIiArIHNlYXJjaFRleHQ7XG4gICAgICAgIGlmIChjb3VudHJ5ICE9IG51bGwpIHtcblxuICAgICAgICAgICAgdXJsID0gdXJsICsgJyZjb3VudHJ5PScgKyBjb3VudHJ5O1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlVSTDogXCIgKyB1cmwpO1xuXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodXJsLFxuICAgICAgICAgICAge31cbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSBhcyBBcnJheTxVbml2ZXJzaXR5Pik7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgZXJyb3IoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmaW5kQ291bnRyeUJ5TG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICBzdWNjZXNzOiAoY291bnRyeTogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICBlcnJvcjogKCkgPT4gdm9pZCkge1xuXG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2FwaS5nZW9uYW1lcy5vcmcvZmluZE5lYXJieVBsYWNlTmFtZUpTT04/dXNlcm5hbWU9am1wZXJlenNhbnRvcyZsYXQ9JyArIGxvY2F0aW9uLmxhdGl0dWRlICsgJyZsbmc9JyArIGxvY2F0aW9uLmxvbmdpdHVkZTtcblxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHVybCxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IGRhdGEgYXMgYW55O1xuXG4gICAgICAgICAgICAgICAgc3VjY2Vzcyhqc29uLmdlb25hbWVzWzBdLmNvdW50cnlOYW1lKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG5cbiAgICAgICAgICAgICAgICBlcnJvcigpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgfVxuXG59Il19