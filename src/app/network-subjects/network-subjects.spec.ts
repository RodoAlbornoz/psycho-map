import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSubjectsComponent } from './network-subjects';

describe('Home', () => {
  let component: NetworkSubjectsComponent;
  let fixture: ComponentFixture<NetworkSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkSubjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
