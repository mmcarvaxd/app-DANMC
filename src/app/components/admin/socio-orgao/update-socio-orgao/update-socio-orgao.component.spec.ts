import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateSocioOrgaoComponent } from './update-socio-orgao.component';

describe('UpdateSocioOrgaoComponent', () => {
  let component: UpdateSocioOrgaoComponent;
  let fixture: ComponentFixture<UpdateSocioOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSocioOrgaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSocioOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
