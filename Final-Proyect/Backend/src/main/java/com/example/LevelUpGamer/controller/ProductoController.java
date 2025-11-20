package com.example.LevelUpGamer.controller;

import com.example.LevelUpGamer.model.Producto;
import com.example.LevelUpGamer.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/productos")
@Tag(name = "Productos", description = "Gestión de productos del catálogo")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    @Operation(summary = "Obtener todos los productos disponibles")
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener un producto según su ID")
    public Producto getProductoById(@PathVariable Long id) {
        return productoService.getProductoById(id);
    }

    @GetMapping("/categoria/{idCategoria}")
    @Operation(summary = "Obtener productos filtrados por categoría")
    public List<Producto> getProductosByCategoria(@PathVariable Long idCategoria) {
        return productoService.getProductosByCategoria(idCategoria);
    }

    @PostMapping
    @Operation(summary = "Crear un nuevo producto")
    public Producto createProducto(@RequestBody Producto producto) {
        return productoService.saveProducto(producto);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar un producto existente")
    public Producto updateProducto(
            @PathVariable Long id,
            @RequestBody Producto producto) {

        Producto existing = productoService.getProductoById(id);

        if (existing != null) {
            boolean categoriaCambio = !existing.getCategoria().getId()
                    .equals(producto.getCategoria().getId());
            existing.setNombre(producto.getNombre());
            existing.setDescripcion(producto.getDescripcion());
            existing.setPrecio(producto.getPrecio());
            existing.setStock(producto.getStock());
            existing.setCategoria(producto.getCategoria());

            if (categoriaCambio) {
                existing.setCodigo(null);
            }

            return productoService.saveProducto(existing);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar un producto por ID")
    public void deleteProducto(@PathVariable Long id) {
        productoService.deleteProducto(id);
    }
}
