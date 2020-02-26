import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataBaseService } from '../../shared/services/data-base.service';
import { AuthGuard } from '../../shared/guard/auth.guard';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public errors: string[] = [];
    public lock;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private dataBaseService: DataBaseService,
        private authGuard: AuthGuard)
    {}

    ngOnInit() {
        // this.authGuard.canActivate();

        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required],
        });
    }

    onSubmit() {
        const username = this.loginForm.get('username').value;
        this.dataBaseService.setUsername(this.loginForm.get('username').value);
        if (this.dataBaseService.isLoggedIn()) {
            this.router.navigate(['/' + username]);
        }
    }
}
