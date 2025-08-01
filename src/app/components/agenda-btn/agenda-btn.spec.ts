import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaBtn } from './agenda-btn';

describe('AgendaBtn', () => {
  let component: AgendaBtn;
  let fixture: ComponentFixture<AgendaBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
