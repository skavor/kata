import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Project, User } from '../_models';




const users: User[] = [];
const projects:Project[] = [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/addUser') && method === 'POST':
                    return addUser();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.endsWith('/projects/addProjects') && method === 'POST':
                    return addProject();
                case url.endsWith('/projects') && method === 'GET':
                    return getProject();
                case url.endsWith('/delete') && method === 'DELETE':
                    return deleteData();
                
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }

        }

        // route functions

        function addUser() {
            users.unshift(body);
            return ok("User has been created")
        }

        function addProject() {
            projects.unshift(body);
            return ok("Project has been created")
        }

        function getUsers() {
            return ok(users)
        }

        function deleteData() {
            users.length = 0;
            projects.length = 0;
            return ok("Data has been deleted");
        }

        function getProject() {
            return ok(projects)
        }

        // helper functions

        function ok(body:any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'unauthorized' } });
        }

        function error(message:any) {
            return throwError({ status: 400, error: { message } });
        }

        
    }
}
