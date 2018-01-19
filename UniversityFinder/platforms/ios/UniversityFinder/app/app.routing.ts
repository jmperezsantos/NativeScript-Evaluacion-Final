import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { FinderComponent } from "./finder/finder.component";

const routes: Routes = [
    { path: "", redirectTo: "/finder", pathMatch: "full" },
    { path: "finder", component: FinderComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }