import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewcustomerPage } from './newcustomer.page';

describe('NewcustomerPage', () => {
  let component: NewcustomerPage;
  let fixture: ComponentFixture<NewcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
