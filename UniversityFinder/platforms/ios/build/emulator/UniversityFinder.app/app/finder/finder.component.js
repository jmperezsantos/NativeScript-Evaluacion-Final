"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var networking_service_1 = require("../services/networking.service");
var dialogs = require("ui/dialogs");
var FinderComponent = /** @class */ (function () {
    function FinderComponent(networking) {
        this.networking = networking;
        this.searchPhrase = '';
        this.universities = [];
        this.isLoading = false;
    }
    FinderComponent.prototype.ngOnInit = function () {
    };
    FinderComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        searchBar.dismissSoftInput();
        this.performSearching();
    };
    FinderComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        this.searchPhrase = searchBar.text;
    };
    FinderComponent.prototype.onLocate = function () {
        var _this = this;
        this.isLoading = true;
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest().then(function () {
                _this.onLocate();
            }, function (err) {
                alert("Debes dar permisos a la localización!");
                _this.isLoading = false;
            });
        }
        else {
            nativescript_geolocation_1.getCurrentLocation({
                desiredAccuracy: 3
            }).then(function (location) {
                if (location) {
                    _this.isLoading = true;
                    _this.networking.findCountryByLocation(location, function (country) {
                        _this.isLoading = false;
                        console.log("País: " + country);
                        _this.country = country;
                        _this.showDialog();
                    }, function () {
                        alert("Ocurrió un error al buscar País");
                    });
                }
                else {
                    _this.isLoading = false;
                }
            }, function (rejected) {
                alert("Ocurrió un error al buscar última ubicación");
            });
        }
    };
    FinderComponent.prototype.performSearching = function () {
        var _this = this;
        this.isLoading = true;
        this.networking.findUniversities(this.searchPhrase, function (universities) {
            _this.universities = universities;
            _this.isLoading = false;
        }, function () {
            alert("Ocurrió un error al consumir el servicio Web");
        }, this.country);
    };
    FinderComponent.prototype.showDialog = function () {
        var _this = this;
        console.log("Showing dialog");
        dialogs.action({
            message: "Tu ubicación es: " + this.country,
            cancelButtonText: "Cancel text",
            actions: ["Buscar en mi ubicación", "Buscar en todo el mundo"]
        }).then(function (result) {
            console.log("Dialog result: " + result);
            if (result == "Buscar en mi ubicación") {
                _this.performSearching();
            }
            else if (result == "Buscar en todo el mundo") {
                _this.country = '';
                _this.performSearching();
            }
        });
    };
    FinderComponent = __decorate([
        core_1.Component({
            selector: "app-finder",
            moduleId: module.id,
            styleUrls: ["finder.component.css"],
            templateUrl: "finder.component.html"
        }),
        __metadata("design:paramtypes", [networking_service_1.NetworkingService])
    ], FinderComponent);
    return FinderComponent;
}());
exports.FinderComponent = FinderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUVBQW9IO0FBQ3BILHFFQUFtRTtBQUVuRSxvQ0FBc0M7QUFRdEM7SUFFSSx5QkFDWSxVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUl6QyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUUxQixpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFJaEMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVJsQixDQUFDO0lBVUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSxrQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFFaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUU1QixDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUVyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUV2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQStEQztRQTdERyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFZixnREFBcUIsRUFBRSxDQUFDLElBQUksQ0FDeEI7Z0JBQ0ksS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBRUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7Z0JBRS9DLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRTNCLENBQUMsQ0FBQyxD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IkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9uZXR3b3JraW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVuaXZlcnNpdHkgfSBmcm9tIFwiLi4vbW9kZWwvVW5pdmVyc2l0eVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtZmluZGVyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcImZpbmRlci5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcImZpbmRlci5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEZpbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBuZXR3b3JraW5nOiBOZXR3b3JraW5nU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIHNlYXJjaFBocmFzZTogc3RyaW5nID0gJyc7XG5cbiAgICB1bml2ZXJzaXRpZXM6IFVuaXZlcnNpdHlbXSA9IFtdO1xuXG4gICAgY291bnRyeT86IHN0cmluZztcblxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xuXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIHNlYXJjaEJhci5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoaW5nKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG5cbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hCYXIudGV4dDtcblxuICAgIH1cblxuICAgIG9uTG9jYXRlKCkge1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWlzRW5hYmxlZCgpKSB7XG5cbiAgICAgICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9jYXRlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGViZXMgZGFyIHBlcm1pc29zIGEgbGEgbG9jYWxpemFjacOzbiFcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDNcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV0d29ya2luZy5maW5kQ291bnRyeUJ5TG9jYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhw61zOiBcIiArIGNvdW50cnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEaWFsb2coKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIk9jdXJyacOzIHVuIGVycm9yIGFsIGJ1c2NhciBQYcOtc1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlamVjdGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiT2N1cnJpw7MgdW4gZXJyb3IgYWwgYnVzY2FyIMO6bHRpbWEgdWJpY2FjacOzblwiKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBlcmZvcm1TZWFyY2hpbmcoKSB7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubmV0d29ya2luZy5maW5kVW5pdmVyc2l0aWVzKFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQaHJhc2UsXG4gICAgICAgICAgICB1bml2ZXJzaXRpZXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy51bml2ZXJzaXRpZXMgPSB1bml2ZXJzaXRpZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBhbGVydChcIk9jdXJyacOzIHVuIGVycm9yIGFsIGNvbnN1bWlyIGVsIHNlcnZpY2lvIFdlYlwiKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuY291bnRyeSk7XG4gICAgfVxuXG4gICAgc2hvd0RpYWxvZygpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3dpbmcgZGlhbG9nXCIpO1xuXG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVHUgdWJpY2FjacOzbiBlczogXCIgKyB0aGlzLmNvdW50cnksXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCB0ZXh0XCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJCdXNjYXIgZW4gbWkgdWJpY2FjacOzblwiLCBcIkJ1c2NhciBlbiB0b2RvIGVsIG11bmRvXCJdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gXCJCdXNjYXIgZW4gbWkgdWJpY2FjacOzblwiKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2hpbmcoKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gXCJCdXNjYXIgZW4gdG9kbyBlbCBtdW5kb1wiKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnkgPSAnJztcblxuICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVNlYXJjaGluZygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59Il19