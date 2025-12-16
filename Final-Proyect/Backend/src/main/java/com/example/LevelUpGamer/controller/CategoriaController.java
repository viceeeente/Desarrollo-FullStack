package com.example.LevelUpGamer.controller;

import com.example.LevelUpGamer.model.Categoria;
import com.example.LevelUpGamer.service.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@Tag(name = "Categoria")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    @Operation(summary = "Listar todas las categorías")
    public List<Categoria> getAllCategorias() {
        return categoriaService.getAllCategorias();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener categoría por ID")
    public Categoria getCategoriaById(@PathVariable Long id) {
        return categoriaService.getCategoriaById(id);
    }

    @PostMapping
    @Operation(summary = "Crear nueva categoría")
    public Categoria createCategoria(@RequestBody Categoria categoria) {
        return categoriaService.saveCategoria(categoria);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar una categoría")
    public Categoria updateCategoria(@PathVariable Long id, @RequestBody Categoria categoria) {
        Categoria existing = categoriaService.getCategoriaById(id);
        if (existing != null) {
            existing.setNombre(categoria.getNombre());
            return categoriaService.saveCategoria(existing);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar una categoría")
    public void deleteCategoria(@PathVariable Long id) {
        categoriaService.deleteCategoria(id);
    }
}

