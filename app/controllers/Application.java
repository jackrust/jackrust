package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(main.render("Jack Rust", null, contact.render()));
    }
    public static Result cv() {
        return ok(main.render("Jack Rust", null, resume.render()));
    }
    public static Result projects() {
        return ok(main.render("Jack Rust", null, projects.render()));
    }
    public static Result about() {
        return ok(main.render("Jack Rust", null, about.render()));
    }

    public static Result peta() {
        return ok(peta.render());
    }
    public static Result dinny() {
        return ok(dinny.render());
    }
    public static Result parallax() {
        return ok(parallax.render());
    }
    public static Result flat() {
        return ok(flat.render());
    }
}
