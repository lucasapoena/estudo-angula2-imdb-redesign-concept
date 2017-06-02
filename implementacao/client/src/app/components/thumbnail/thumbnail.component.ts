import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'thumbnail',
    templateUrl: './thumbnail.component.html' 
})

export class ThumbnailComponent {

    @Input() size: String;
    @Input() url: String;
    @Input() picture: String;
    @Input() title: String;
    @Input() labelTwo: String;
}