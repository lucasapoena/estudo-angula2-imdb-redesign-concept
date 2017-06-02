import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'columnList',
    templateUrl: './columnList.component.html'
})

export class ColumnListComponent{
    @Input() url: String;
    @Input() labelOne: String;
    @Input() labelTwo: String;
    @Input() labelThree: String;
}