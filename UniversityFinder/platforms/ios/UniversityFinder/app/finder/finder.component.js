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
                        _this.isLoading = false;
                    });
                }
                else {
                    _this.isLoading = false;
                }
            }, function (rejected) {
                alert("Ocurrió un error al buscar última ubicación");
                _this.isLoading = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUVBQW9IO0FBQ3BILHFFQUFtRTtBQUVuRSxvQ0FBc0M7QUFRdEM7SUFFSSx5QkFDWSxVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUl6QyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUUxQixpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFJaEMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVJsQixDQUFDO0lBVUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSxrQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFFaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUU1QixDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUVyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUV2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQW1FQztRQWpFRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFZixnREFBcUIsRUFBRSxDQUFDLElBQUksQ0FDeEI7Z0JBQ0ksS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBRUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7Z0JBRS9DLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRTNCLENBQUMsQ0FBQyxD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LElBeUpDO0FBekpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IExvY2F0aW9uLCBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZGlzdGFuY2UsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL25ldHdvcmtpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgVW5pdmVyc2l0eSB9IGZyb20gXCIuLi9tb2RlbC9Vbml2ZXJzaXR5XCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1maW5kZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiZmluZGVyLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiZmluZGVyLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRmluZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5ldHdvcmtpbmc6IE5ldHdvcmtpbmdTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgc2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuICAgIHVuaXZlcnNpdGllczogVW5pdmVyc2l0eVtdID0gW107XG5cbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xuXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XG5cbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgc2VhcmNoQmFyLmRpc21pc3NTb2Z0SW5wdXQoKTtcblxuICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2hpbmcoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcblxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcblxuICAgICAgICB0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaEJhci50ZXh0O1xuXG4gICAgfVxuXG4gICAgb25Mb2NhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghaXNFbmFibGVkKCkpIHtcblxuICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbihcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2NhdGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJEZWJlcyBkYXIgcGVybWlzb3MgYSBsYSBsb2NhbGl6YWNpw7NuIVwiKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBnZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogM1xuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR3b3JraW5nLmZpbmRDb3VudHJ5QnlMb2NhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGHDrXM6IFwiICsgY291bnRyeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiT2N1cnJpw7MgdW4gZXJyb3IgYWwgYnVzY2FyIFBhw61zXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWplY3RlZCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJPY3VycmnDsyB1biBlcnJvciBhbCBidXNjYXIgw7psdGltYSB1YmljYWNpw7NuXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwZXJmb3JtU2VhcmNoaW5nKCkge1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm5ldHdvcmtpbmcuZmluZFVuaXZlcnNpdGllcyhcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUGhyYXNlLFxuICAgICAgICAgICAgdW5pdmVyc2l0aWVzID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2l0aWVzID0gdW5pdmVyc2l0aWVzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJPY3VycmnDsyB1biBlcnJvciBhbCBjb25zdW1pciBlbCBzZXJ2aWNpbyBXZWJcIik7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLmNvdW50cnkpO1xuICAgIH1cblxuICAgIHNob3dEaWFsb2coKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTaG93aW5nIGRpYWxvZ1wiKTtcblxuICAgICAgICBkaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIlR1IHViaWNhY2nDs24gZXM6IFwiICsgdGhpcy5jb3VudHJ5LFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWwgdGV4dFwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiQnVzY2FyIGVuIG1pIHViaWNhY2nDs25cIiwgXCJCdXNjYXIgZW4gdG9kbyBlbCBtdW5kb1wiXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IFwiQnVzY2FyIGVuIG1pIHViaWNhY2nDs25cIikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoaW5nKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiQnVzY2FyIGVuIHRvZG8gZWwgbXVuZG9cIikge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5ID0gJyc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2hpbmcoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxufSJdfQ==