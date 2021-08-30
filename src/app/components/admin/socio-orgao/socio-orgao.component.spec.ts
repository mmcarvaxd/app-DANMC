import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocioOrgaoComponent } from './socio-orgao.component';

describe('SocioOrgaoComponent', () => {
  let component: SocioOrgaoComponent;
  let fixture: ComponentFixture<SocioOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioOrgaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocioOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
