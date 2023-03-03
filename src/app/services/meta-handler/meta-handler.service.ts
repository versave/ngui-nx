import { Injectable } from '@angular/core';
import { MetaTag, MetaTagKeys } from '../../models/meta';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class MetaHandlerService {
    private defaultMetaTags: MetaTagKeys = {
        title: 'NGUI Title',
        description: 'NGUI Description',
    };
    private titlePostfix = ' | NGUI';

    constructor(private metaService: Meta, private titleService: Title) {}

    public initDefaultMetaTags(): void {
        this.setDefaultTags();
        this.setCanonicalTag(window.location.origin);
    }

    public updateMetaTags(metaTags: MetaTagKeys): void {
        const tagsArray: MetaTag[] = Object.entries(metaTags).map(([key, value]) => ({ name: key, content: value }));
        tagsArray.forEach((tag) => this.metaService.updateTag({ name: tag.name, content: tag.content }));
    }

    public setDefaultTags(): void {
        this.updateMetaTags(this.defaultMetaTags);
        this.setPageTitle(this.defaultMetaTags?.title as string);
    }

    public setCanonicalTag(url: string): void {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = url;
        document.head.appendChild(link);
    }

    public setPageTitle(title: string, postfix = true): void {
        this.titleService.setTitle(title + (postfix ? this.titlePostfix : ''));
    }
}
