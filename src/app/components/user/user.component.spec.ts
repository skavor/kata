import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '@core';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
        
      ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test email input validity', () => {
    const inputEmailForm:HTMLInputElement = fixture.debugElement.nativeElement.
                  querySelector('form').querySelectorAll('input')[2]

    const emailValueFromGroup = component.userInfos.get('email');
    expect(inputEmailForm.value).toEqual(emailValueFromGroup.value);
    expect(emailValueFromGroup.errors).not.toBeNull();
    expect(emailValueFromGroup.errors.required).toBeTruthy();
  })

  it('test email input after entering some value', () => {
    const inputEmailForm:HTMLInputElement = fixture.debugElement.nativeElement.
                  querySelector('form').querySelectorAll('input')[2]
    inputEmailForm.value="iskander@gmail.com"
    inputEmailForm.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const emailValueFromGroup = component.userInfos.get('email');
      expect(inputEmailForm.value).toEqual(emailValueFromGroup.value);
      expect(emailValueFromGroup.errors).toBeNull();
    })
    
  })

  it('test a form group element count', ()=> {
    const formElements = fixture.debugElement.nativeElement.querySelector('form');
   
    const inputElements = formElements.querySelectorAll('input')
    const selectElements = formElements.querySelectorAll('select')
    expect(inputElements.length).toEqual(4)
    expect(selectElements.length).toEqual(1)
    
  })
});
