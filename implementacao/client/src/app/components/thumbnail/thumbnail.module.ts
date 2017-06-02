import { NgModule }      from '@angular/core';
import { ThumbnailComponent }  from './thumbnail.component';

@NgModule({
    declarations: [ThumbnailComponent],
    exports:[ThumbnailComponent]
})

export class ThumbnailModule { }
