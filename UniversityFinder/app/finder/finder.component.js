"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var networking_service_1 = require("../services/networking.service");
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
                        _this.performSearching();
                    }, function () {
                        alert("Ocurrió un error al buscar País");
                    });
                }
                else {
                    _this.isLoading = false;
                }
            }, function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUVBQW9IO0FBQ3BILHFFQUFtRTtBQVNuRTtJQUVJLHlCQUNZLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBSXpDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUloQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBUmxCLENBQUM7SUFVRCxrQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLGtDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUVoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixJQUFJO1FBRXJCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBRXZDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBOERDO1FBNURHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0NBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVmLGdEQUFxQixFQUFFLENBQUMsSUFBSSxDQUN4QjtnQkFDSSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztnQkFFL0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFM0IsQ0FBQyxDQUFDLENBQUE7UUFFVixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFSiw2Q0FBa0IsQ0FBQztnQkFDZixlQUFlLEVBQUUsQ0FBQzthQUNyQixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtnQkFFSixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUVYLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUV0QixLQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUNqQyxRQUFRLEVBQ1IsVUFBQSxPQUFPO3dCQUVILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQzt3QkFFaEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7d0JBRXRCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUU1QixDQUFDLEVBQUU7d0JBRUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7b0JBRTdDLENBQUMsQ0FBQyxDQUFBO2dCQUVWLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBRUosS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBRTNCLENBQUM7WUFFTCxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUVELEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1lBRXpELENBQUMsQ0FDQSxDQUFDO1FBRVYsQ0FBQztJQUVMLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEI7UUFBQSxpQkFrQkM7UUFoQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FDNUIsSUFBSSxDQUFDLFlBQVksRUFDakIsVUFBQSxZQUFZO1lBRVIsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFFakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFM0IsQ0FBQyxFQUFFO1lBRUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFFMUQsQ0FBQyxFQUNELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBdkhRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSTBCLHNDQUFpQjtPQUhoQyxlQUFlLENBeUgzQjtJQUFELHNCQUFDO0NBQUEsQUF6SEQsSUF5SEM7QUF6SFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgTG9jYXRpb24sIGdldEN1cnJlbnRMb2NhdGlvbiwgaXNFbmFibGVkLCBkaXN0YW5jZSwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbmV0d29ya2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVbml2ZXJzaXR5IH0gZnJvbSBcIi4uL21vZGVsL1VuaXZlcnNpdHlcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWZpbmRlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCJmaW5kZXIuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJmaW5kZXIuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBGaW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmV0d29ya2luZzogTmV0d29ya2luZ1NlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBzZWFyY2hQaHJhc2U6IHN0cmluZyA9ICcnO1xuXG4gICAgdW5pdmVyc2l0aWVzOiBVbml2ZXJzaXR5W10gPSBbXTtcblxuICAgIGNvdW50cnk/OiBzdHJpbmc7XG5cbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcblxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcblxuICAgICAgICBzZWFyY2hCYXIuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gICAgICAgIHRoaXMucGVyZm9ybVNlYXJjaGluZygpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uVGV4dENoYW5nZWQoYXJncykge1xuICAgICAgICBcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaEJhci50ZXh0O1xuXG4gICAgfVxuXG4gICAgb25Mb2NhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghaXNFbmFibGVkKCkpIHtcblxuICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbihcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2NhdGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGViZXMgZGFyIHBlcm1pc29zIGEgbGEgbG9jYWxpemFjacOzbiFcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDNcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV0d29ya2luZy5maW5kQ291bnRyeUJ5TG9jYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhw61zOiBcIiArIGNvdW50cnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2hpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIk9jdXJyacOzIHVuIGVycm9yIGFsIGJ1c2NhciBQYcOtc1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk9jdXJyacOzIHVuIGVycm9yIGFsIGJ1c2NhciDDumx0aW1hIHViaWNhY2nDs25cIik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwZXJmb3JtU2VhcmNoaW5nKCkge1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm5ldHdvcmtpbmcuZmluZFVuaXZlcnNpdGllcyhcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUGhyYXNlLFxuICAgICAgICAgICAgdW5pdmVyc2l0aWVzID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2l0aWVzID0gdW5pdmVyc2l0aWVzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJPY3VycmnDsyB1biBlcnJvciBhbCBjb25zdW1pciBlbCBzZXJ2aWNpbyBXZWJcIik7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLmNvdW50cnkpO1xuICAgIH1cblxufSJdfQ==