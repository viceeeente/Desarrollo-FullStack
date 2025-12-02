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
@RequestMapping("/vendedor")
@Tag(name = "Vendedor")
@RequiredArgsConstructor
public class VendedorController {

    private final ProductoRepository productRepo;
    private final BoletaRepository orderRepo;
    private final UserRepository userRepo;

    @GetMapping("/productos")
    public List<Producto> listarProductos() {
        return productRepo.findAll();
    }

    @PostMapping("/venta")
    public Boleta registrarVenta(@RequestBody Boleta order, Principal principal) {

        User vendedor = userRepo.findByUsername(principal.getName())
                .orElseThrow();

        order.setVendedorId(vendedor.getId());
        order.setFecha(LocalDate.now());

        return orderRepo.save(order);
    }

    @GetMapping("/mis-ventas")
    public List<Boleta> ventasDelVendedor(Principal principal) {

        User vendedor = userRepo.findByUsername(principal.getName()).orElseThrow();

        return orderRepo.findAll()
                .stream()
                .filter(o -> o.getVendedorId().equals(vendedor.getId()))
                .toList();
    }
}
