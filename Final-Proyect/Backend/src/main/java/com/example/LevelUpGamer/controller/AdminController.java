package com.example.LevelUpGamer.controller;

import com.example.LevelUpGamer.model.Boleta;
import com.example.LevelUpGamer.model.Producto;
import com.example.LevelUpGamer.repository.BoletaRepository;
import com.example.LevelUpGamer.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ProductoRepository productRepo;
    private final BoletaRepository orderRepo;

    @PostMapping("/productos")
    public Producto crearProducto(@RequestBody Producto product) {
        return productRepo.save(product);
    }

    @PutMapping("/productos/{id}")
    public Producto editarProducto(@PathVariable Long id, @RequestBody Producto p) {
        Producto prod = productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("No existe producto"));

        prod.setNombre(p.getNombre());
        prod.setDescripcion(p.getDescripcion());
        prod.setPrecio(p.getPrecio());
        prod.setStock(p.getStock());

        return productRepo.save(prod);
    }

    @DeleteMapping("/productos/{id}")
    public void eliminarProducto(@PathVariable Long id) {
        productRepo.deleteById(id);
    }

    @GetMapping("/ventas")
    public List<Boleta> todasLasVentas() {
        return orderRepo.findAll();
    }
}
