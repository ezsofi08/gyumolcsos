import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaliComponent } from './sali.component';

describe('SaliComponent', () => {
  let component: SaliComponent;
  let fixture: ComponentFixture<SaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
