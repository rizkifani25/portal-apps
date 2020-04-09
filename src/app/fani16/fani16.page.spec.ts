import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fani16Page } from './fani16.page';

describe('Fani16Page', () => {
  let component: Fani16Page;
  let fixture: ComponentFixture<Fani16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fani16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fani16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
