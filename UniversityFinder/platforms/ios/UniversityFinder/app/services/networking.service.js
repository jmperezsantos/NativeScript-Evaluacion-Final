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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29ya2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUtsRDtJQUVJLDJCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFHNUIsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUNJLFVBQWtCLEVBQ2xCLE9BQTZDLEVBQzdDLEtBQWlCLEVBQ2pCLE9BQWdCO1FBR2hCLElBQUksR0FBRyxHQUFHLCtDQUErQyxHQUFHLFVBQVUsQ0FBQztRQUN2RSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVsQixHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFFdEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDYixFQUFFLENBQ0wsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJO1lBRUEsT0FBTyxDQUFDLElBQXlCLENBQUMsQ0FBQztRQUV2QyxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBRUMsS0FBSyxFQUFFLENBQUM7UUFFWixDQUFDLENBQ0EsQ0FBQztJQUNWLENBQUM7SUFFRCxpREFBcUIsR0FBckIsVUFBc0IsUUFBa0IsRUFDcEMsT0FBa0MsRUFDbEMsS0FBaUI7UUFFakIsSUFBSSxHQUFHLEdBQUcsNkVBQTZFLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUUzSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQ2IsRUFBRSxDQUNMLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSTtZQUVBLElBQUksSUFBSSxHQUFHLElBQVcsQ0FBQztZQUV2QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBRUMsS0FBSyxFQUFFLENBQUM7UUFFWixDQUFDLENBQ0EsQ0FBQztJQUVWLENBQUM7SUEvRFEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSVMsaUJBQVU7T0FIbkIsaUJBQWlCLENBaUU3QjtJQUFELHdCQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBVbml2ZXJzaXR5IH0gZnJvbSBcIi4uL21vZGVsL1VuaXZlcnNpdHlcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0d29ya2luZ1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICAgICkge1xuXG4gICAgfVxuXG4gICAgZmluZFVuaXZlcnNpdGllcyhcbiAgICAgICAgc2VhcmNoVGV4dDogc3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiAodW5pdmVyc2l0aWVzOiBVbml2ZXJzaXR5W10pID0+IHZvaWQsXG4gICAgICAgIGVycm9yOiAoKSA9PiB2b2lkLFxuICAgICAgICBjb3VudHJ5Pzogc3RyaW5nXG4gICAgKSB7XG5cbiAgICAgICAgdmFyIHVybCA9IFwiaHR0cDovL3VuaXZlcnNpdGllcy5oaXBvbGFicy5jb20vc2VhcmNoP25hbWU9XCIgKyBzZWFyY2hUZXh0O1xuICAgICAgICBpZiAoY291bnRyeSAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIHVybCA9IHVybCArICcmY291bnRyeT0nICsgY291bnRyeTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJVUkw6IFwiICsgdXJsKTtcblxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHVybCxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEgYXMgQXJyYXk8VW5pdmVyc2l0eT4pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVycm9yKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZmluZENvdW50cnlCeUxvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgc3VjY2VzczogKGNvdW50cnk6IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgZXJyb3I6ICgpID0+IHZvaWQpIHtcblxuICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9hcGkuZ2VvbmFtZXMub3JnL2ZpbmROZWFyYnlQbGFjZU5hbWVKU09OP3VzZXJuYW1lPWptcGVyZXpzYW50b3MmbGF0PScgKyBsb2NhdGlvbi5sYXRpdHVkZSArICcmbG5nPScgKyBsb2NhdGlvbi5sb25naXR1ZGU7XG5cbiAgICAgICAgdGhpcy5odHRwLmdldCh1cmwsXG4gICAgICAgICAgICB7fVxuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBkYXRhIGFzIGFueTtcblxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoanNvbi5nZW9uYW1lc1swXS5jb3VudHJ5TmFtZSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXJyb3IoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgIH1cblxufSJdfQ==