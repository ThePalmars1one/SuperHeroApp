import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderHeroesComponent } from './render-heroes.component';

describe('RenderHeroesComponent', () => {
  let component: RenderHeroesComponent;
  let fixture: ComponentFixture<RenderHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
