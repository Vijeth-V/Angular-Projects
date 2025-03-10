import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryUsersComponent } from './directory-users.component';

describe('DirectoryUsersComponent', () => {
  let component: DirectoryUsersComponent;
  let fixture: ComponentFixture<DirectoryUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectoryUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
