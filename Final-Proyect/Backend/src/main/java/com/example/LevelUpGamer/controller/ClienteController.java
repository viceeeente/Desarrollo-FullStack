package com.example.LevelUpGamer.controller;

import com.example.LevelUpGamer.model.Boleta;
import com.example.LevelUpGamer.model.Producto;
import com.example.LevelUpGamer.model.User;
import com.example.LevelUpGamer.repository.BoletaRepository;
import com.example.LevelUpGamer.repository.ProductoRepository;
import com.example.LevelUpGamer.repository.UserRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/cliente")
@RequiredArgsConstructor
@Tag(name = "Cliente")
public class ClienteController {

    private final ProductoRepository productRepo;
    private final BoletaRepository orderRepo;
    private final UserRepository userRepo;

    @GetMapping("/productos")
    public List<Producto> listaProductos() {
        return productRepo.findAll();
    }

    @PostMapping("/comprar")
    public Boleta comprar(@RequestBody Boleta order, Principal principal) {

        User cliente = userRepo.findByUsername(principal.getName()).orElseThrow();

        order.setUserId(cliente.getId());
        order.setFecha(LocalDate.now());

        return orderRepo.save(order);
    }
}
