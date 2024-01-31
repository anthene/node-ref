import { Component } from "@angular/core"

@Component({
    standalone: true,
    selector: "app-root",
    template: "<h1>{{ message }}</h1>",
})
export class AppComponent {
    message = "Hello World!"
}
