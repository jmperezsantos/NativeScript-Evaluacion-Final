"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var NetworkingService = /** @class */ (function () {
    function NetworkingService(http) {
        this.http = http;
    }
    NetworkingService.prototype.findUniversities = function (searchText, success, error, location) {
        var url = "" + searchText;
        this.http.get(url, {}).subscribe(function (data) {
        }, function (error) {
        });
    };
    NetworkingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NetworkingService);
    return NetworkingService;
}());
exports.NetworkingService = NetworkingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29ya2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUdsRDtJQUVJLDJCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFHNUIsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUNJLFVBQWtCLEVBQ2xCLE9BQXNDLEVBQ3RDLEtBQWlCLEVBQ2pCLFFBQWM7UUFHZCxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUVsQixDQUFDLENBQUMsU0FBUyxDQUNSLFVBQUEsSUFBSTtRQUVKLENBQUMsRUFDRCxVQUFBLEtBQUs7UUFFTCxDQUFDLENBQ0EsQ0FBQztJQUNWLENBQUM7SUEzQlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSVMsaUJBQVU7T0FIbkIsaUJBQWlCLENBNkI3QjtJQUFELHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXR3b3JraW5nU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBmaW5kVW5pdmVyc2l0aWVzKFxuICAgICAgICBzZWFyY2hUZXh0OiBzdHJpbmcsXG4gICAgICAgIHN1Y2Nlc3M6ICh1bml2ZXJzaXRpZXM6IGFueVtdKSA9PiB2b2lkLFxuICAgICAgICBlcnJvcjogKCkgPT4gdm9pZCxcbiAgICAgICAgbG9jYXRpb24/OiBhbnlcbiAgICApIHtcblxuICAgICAgICBsZXQgdXJsID0gXCJcIiArIHNlYXJjaFRleHQ7XG5cbiAgICAgICAgdGhpcy5odHRwLmdldCh1cmwsIHtcblxuICAgICAgICB9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn0iXX0=