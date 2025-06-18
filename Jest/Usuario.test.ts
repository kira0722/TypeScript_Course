import { Usuario } from "./Usuario";

describe("Usuario Class", () => {
  let usuario: Usuario;

  beforeEach(() => {
    usuario = new Usuario("Amin", "amin@example.com", "Developer", 10, true);
  });

  test("should return the correct name", () => {
    expect(usuario.getName()).toBe("Amin");
  });

  test("should return the correct profile", () => {
    const expectedProfile =
      "User is Amin, he works as Developer, and has 10, years of experience";
    expect(usuario.getProfile()).toBe(expectedProfile);
  });

  test("should return the correct active status", () => {
    expect(usuario.isStillActive()).toBe(true);
  });

  test("should return false for inactive user", () => {
    usuario = new Usuario("Amin", "amin@example.com", "Developer", 10, false);
    expect(usuario.isStillActive()).toBe(false);
  });
});
