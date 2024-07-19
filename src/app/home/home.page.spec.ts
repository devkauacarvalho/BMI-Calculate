import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import {  BmiPage } from './home.page';

describe('BmiPage', () => {
  let component: BmiPage;
  let fixture: ComponentFixture<BmiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
