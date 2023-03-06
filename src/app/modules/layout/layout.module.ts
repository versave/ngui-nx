import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, ShellComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, FooterComponent, ShellComponent],
})
export class LayoutModule {}
