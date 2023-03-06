import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupComponent } from './radio-group.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RadioComponent', () => {
    let component: RadioGroupComponent;
    let fixture: ComponentFixture<RadioGroupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RadioGroupComponent],
            imports: [ReactiveFormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(RadioGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
