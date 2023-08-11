import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import App from "../Test";

describe("Suite de prueba 1", () => {
  test("la pantalla debe tener texto de usuario", () => {
    render(<App />);
    const byText = screen.getByText('Usuario');
    expect(byText).toBeTruthy();
  })
  test("la pantalla debe tener texto de contraseña", () => {
    render(<App />);
    const byText = screen.getByText('Contraseña');
    expect(byText).toBeTruthy();
  })

 test("No se puede oprimir botón si los campos estan vacios", () => {
    render(<App />);
    const button = screen.getByText("Iniciar Sesión");
    expect(button).toBeTruthy();
  });

  test("El boton ya se puede oprimir si llenas los campos usuario y password", () => {
    render(<App />);
    const usuarioInput = screen.getByTestId("Input1");
    const passInput = screen.getByTestId("Input2");
    const button = screen.getByText("Iniciar Sesión");

    fireEvent.changeText(usuarioInput, "usuarionuevo@gmail.com");
    fireEvent.changeText(passInput, "passwod123");
    expect(button).toBeTruthy();
  })
});


