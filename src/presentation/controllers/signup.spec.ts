import { SignUpController } from "./signup";

describe("SignUp Controller", () => {
  it("Shoud return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "any_email@email.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httResponse = sut.handle(httpRequest);
    expect(httResponse.statusCode).toBe(400);
    expect(httResponse.body).toEqual(new Error("Missing param: name"));
  });

  it("Shoud return 400 if no email is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httResponse = sut.handle(httpRequest);
    expect(httResponse.statusCode).toBe(400);
    expect(httResponse.body).toEqual(new Error("Missing param: email"));
  });
});