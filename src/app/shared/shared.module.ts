import { NgModule } from '@angular/core';
import { InputComponent } from './components/input.component/input.component';

@NgModule({
    imports: [InputComponent],
    exports: [InputComponent]
})
export class SharedModule { }
