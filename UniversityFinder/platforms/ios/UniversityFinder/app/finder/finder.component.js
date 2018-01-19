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
        this.universities = [];
        for (var i = 0; i < 50; i++) {
            this.universities.push({
                id: i,
                name: 'i ' + i
            });
        }
    }
    FinderComponent.prototype.ngOnInit = function () {
    };
    FinderComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    FinderComponent.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    FinderComponent.prototype.onLocate = function () {
        var _this = this;
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest().then(function () {
                _this.onLocate();
            }, function (err) {
                alert("Debes dar permisos a la localización!");
            });
        }
        else {
            nativescript_geolocation_1.getCurrentLocation({
                desiredAccuracy: 3
            }).then(function (location) {
                if (location) {
                    alert("Location: lat=" + location.latitude + " - lon=" + location.longitude);
                }
                else {
                    alert("No hay ubicación");
                }
            }, function (error) {
                alert("Ocurrió un error al buscar última ubicación");
            });
        }
    };
    FinderComponent = __decorate([
        core_1.Component({
            selector: 'finder',
            templateUrl: 'finder.component.html',
            styleUrls: ["finder.component.css"]
        }),
        __metadata("design:paramtypes", [networking_service_1.NetworkingService])
    ], FinderComponent);
    return FinderComponent;
}());
exports.FinderComponent = FinderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUVBQW9IO0FBQ3BILHFFQUFtRTtBQU9uRTtJQUVJLHlCQUNZLFVBQTRCO1FBQTVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBV3hDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBWHJCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQzthQUNqQixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQU1ELGtDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRU0sa0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sbUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWdDQztRQTlCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFZixnREFBcUIsRUFBRSxDQUFDLElBQUksQ0FDeEI7Z0JBQ0ksS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0MsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFFVixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFSiw2Q0FBa0IsQ0FBQztnQkFDZixlQUFlLEVBQUUsQ0FBQzthQUNyQixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtnQkFFSixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNYLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pGLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzlCLENBQUM7WUFFTCxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNELEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FDQSxDQUFDO1FBQ1YsQ0FBQztJQUVMLENBQUM7SUEvRFEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUl5QixzQ0FBaUI7T0FIL0IsZUFBZSxDQWlFM0I7SUFBRCxzQkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IExvY2F0aW9uLCBnZXRDdXJyZW50TG9jYXRpb24sIGlzRW5hYmxlZCwgZGlzdGFuY2UsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL25ldHdvcmtpbmcuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZpbmRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdmaW5kZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1wiZmluZGVyLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRmluZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5ldHdvcmtpbmc6TmV0d29ya2luZ1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51bml2ZXJzaXRpZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXZlcnNpdGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaSAnICsgaVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hQaHJhc2U6IHN0cmluZyA9ICcnO1xuXG4gICAgdW5pdmVyc2l0aWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgYWxlcnQoXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEl0ZW1UYXBwZWQ6IFwiICsgYXJncy5pbmRleCk7XG4gICAgfVxuXG4gICAgb25Mb2NhdGUoKSB7XG5cbiAgICAgICAgaWYgKCFpc0VuYWJsZWQoKSkge1xuXG4gICAgICAgICAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvY2F0ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJEZWJlcyBkYXIgcGVybWlzb3MgYSBsYSBsb2NhbGl6YWNpw7NuIVwiKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiAzXG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9jYXRpb246IGxhdD1cIiArIGxvY2F0aW9uLmxhdGl0dWRlICsgXCIgLSBsb249XCIgKyBsb2NhdGlvbi5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJObyBoYXkgdWJpY2FjacOzblwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiT2N1cnJpw7MgdW4gZXJyb3IgYWwgYnVzY2FyIMO6bHRpbWEgdWJpY2FjacOzblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19