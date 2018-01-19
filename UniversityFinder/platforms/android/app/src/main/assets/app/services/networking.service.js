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
        }, function (error) {
            error();
        });
    };
    NetworkingService.prototype.findCountryByLocation = function (location, success, error) {
        var url = 'http://api.geonames.org/findNearbyPlaceNameJSON?username=jmperezsantos&lat=' + location.latitude + '&lng=' + location.longitude;
        this.http.get(url, {}).subscribe(function (data) {
            var json = data;
            success(json.geonames[0].countryName);
        }, function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29ya2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUtsRDtJQUVJLDJCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFHNUIsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUNJLFVBQWtCLEVBQ2xCLE9BQTZDLEVBQzdDLEtBQWlCLEVBQ2pCLE9BQWdCO1FBR2hCLElBQUksR0FBRyxHQUFHLCtDQUErQyxHQUFHLFVBQVUsQ0FBQztRQUN2RSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVsQixHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFFdEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDYixFQUFFLENBQ0wsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJO1lBRUEsT0FBTyxDQUFDLElBQXlCLENBQUMsQ0FBQztRQUV2QyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBRUQsS0FBSyxFQUFFLENBQUM7UUFFWixDQUFDLENBQ0EsQ0FBQztJQUNWLENBQUM7SUFFRCxpREFBcUIsR0FBckIsVUFBc0IsUUFBa0IsRUFDcEMsT0FBa0MsRUFDbEMsS0FBaUI7UUFFakIsSUFBSSxHQUFHLEdBQUcsNkVBQTZFLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUUzSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQ2IsRUFBRSxDQUNMLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSTtZQUVBLElBQUksSUFBSSxHQUFHLElBQVcsQ0FBQztZQUV2QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBRUQsS0FBSyxFQUFFLENBQUM7UUFFWixDQUFDLENBQ0EsQ0FBQztJQUVWLENBQUM7SUEvRFEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSVMsaUJBQVU7T0FIbkIsaUJBQWlCLENBaUU3QjtJQUFELHdCQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBVbml2ZXJzaXR5IH0gZnJvbSBcIi4uL21vZGVsL1VuaXZlcnNpdHlcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0d29ya2luZ1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICAgICkge1xuXG4gICAgfVxuXG4gICAgZmluZFVuaXZlcnNpdGllcyhcbiAgICAgICAgc2VhcmNoVGV4dDogc3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiAodW5pdmVyc2l0aWVzOiBVbml2ZXJzaXR5W10pID0+IHZvaWQsXG4gICAgICAgIGVycm9yOiAoKSA9PiB2b2lkLFxuICAgICAgICBjb3VudHJ5Pzogc3RyaW5nXG4gICAgKSB7XG5cbiAgICAgICAgdmFyIHVybCA9IFwiaHR0cDovL3VuaXZlcnNpdGllcy5oaXBvbGFicy5jb20vc2VhcmNoP25hbWU9XCIgKyBzZWFyY2hUZXh0O1xuICAgICAgICBpZiAoY291bnRyeSAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIHVybCA9IHVybCArICcmY291bnRyeT0nICsgY291bnRyeTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJVUkw6IFwiICsgdXJsKTtcblxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHVybCxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEgYXMgQXJyYXk8VW5pdmVyc2l0eT4pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXJyb3IoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmaW5kQ291bnRyeUJ5TG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICBzdWNjZXNzOiAoY291bnRyeTogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICBlcnJvcjogKCkgPT4gdm9pZCkge1xuXG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2FwaS5nZW9uYW1lcy5vcmcvZmluZE5lYXJieVBsYWNlTmFtZUpTT04/dXNlcm5hbWU9am1wZXJlenNhbnRvcyZsYXQ9JyArIGxvY2F0aW9uLmxhdGl0dWRlICsgJyZsbmc9JyArIGxvY2F0aW9uLmxvbmdpdHVkZTtcblxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHVybCxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IGRhdGEgYXMgYW55O1xuXG4gICAgICAgICAgICAgICAgc3VjY2Vzcyhqc29uLmdlb25hbWVzWzBdLmNvdW50cnlOYW1lKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAgICAgICAgIGVycm9yKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICB9XG5cbn0iXX0=