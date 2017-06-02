import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'widget',
    templateUrl: './widget.component.html' 
})

export class WidgetComponent {
    @Input() widgetTitle: String;
    @Input() url: String;
    @Input() description: String;
}