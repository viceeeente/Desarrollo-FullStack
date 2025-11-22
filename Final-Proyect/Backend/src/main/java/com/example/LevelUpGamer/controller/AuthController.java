package com.example.LevelUpGamer.controller;

import com.example.LevelUpGamer.security.jwt.JwtService;
import com.example.LevelUpGamer.service.UserService;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtService jwtService;
    private final UserService userService;

    public AuthController(AuthenticationManager authManager, JwtService jwtService,
                          UserService userService) {
        this.authManager = authManager;
        this.jwtService = jwtService;
        this.userService = userService;
    }

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody Map<String, String> body) {

        String username = body.get("username");
        String password = body.get("password");

        if (username == null || password == null ||
                username.isBlank() || password.isBlank()) {
            return Map.of("error", "Username y password son requeridos");
        }

        String role = "USER";

        userService.register(username, password, role);

        return Map.of(
                "message", "Usuario registrado correctamente",
                "username", username,
                "role", role
        );
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {

        String username = body.get("username");
        String password = body.get("password");

        try {
            Authentication auth = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));

            if (auth.isAuthenticated()) {
                String token = jwtService.generateToken(username);

                return Map.of(
                        "token", token,
                        "username", username
                );
            }

        } catch (BadCredentialsException ex) {
            return Map.of("error", "Credenciales inválidas");
        }

        return Map.of("error", "Error al iniciar sesión");
    }
}
