import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MetaHandlerService } from '../../services/meta-handler/meta-handler.service';
import { MetaTagKeys } from '../../models/meta';

@Component({
    selector: 'ngui-not-found',
    standalone: true,
    imports: [CommonModule, HeaderComponent],
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
    private pageTitle = 'Page Not Found';
    private pageMeta: MetaTagKeys = {
        title: this.pageTitle,
    };

    constructor(private metaHandlerService: MetaHandlerService) {}

    public ngOnInit(): void {
        this.metaHandlerService.setPageTitle(this.pageTitle);
        this.metaHandlerService.updateMetaTags(this.pageMeta);
    }
}
