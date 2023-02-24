import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymsgComponent } from './mymsg.component';

describe('MymsgComponent', () => {
  let component: MymsgComponent;
  let fixture: ComponentFixture<MymsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
