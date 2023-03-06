import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MetaTagKeys } from '../../../shared/models/meta';
import { MetaHandlerService } from '../../../shared/services/meta-handler/meta-handler.service';

@Component({
    selector: 'ngui-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent implements OnInit {
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
