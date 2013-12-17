package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }
    public static Result cv() {
        return ok(cv.render());
    }
    public static Result projects() {
        return ok(projects.render());
    }
    public static Result peta() {
        return ok(peta.render());
    }
}
