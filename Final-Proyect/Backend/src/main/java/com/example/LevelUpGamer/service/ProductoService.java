package com.example.LevelUpGamer.service;

import com.example.LevelUpGamer.model.Producto;
import com.example.LevelUpGamer.model.Categoria;
import com.example.LevelUpGamer.repository.ProductoRepository;
import com.example.LevelUpGamer.repository.CategoriaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    public Producto getProductoById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    public List<Producto> getProductosByCategoria(Long idCategoria) {
        return productoRepository.findByCategoriaId(idCategoria);
    }

    public Producto saveProducto(Producto producto) {

        Categoria categoria = categoriaRepository.findById(producto.getCategoria().getId())
                .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));

        producto.setCategoria(categoria);

        if (producto.getCodigo() == null || producto.getCodigo().isEmpty()) {

            String nombreCat = categoria.getNombre().toLowerCase();
            String prefijo;

            switch (nombreCat) {
                case "mouse":
                    prefijo = "MO";
                    break;
                case "mousepad":
                    prefijo = "MP";
                    break;
                default:
                    prefijo = categoria.getNombre().substring(0, 2).toUpperCase();
                    break;
            }

            long contador = productoRepository.countByCategoriaId(categoria.getId()) + 1;

            String codigoGenerado = prefijo + String.format("%03d", contador);

            producto.setCodigo(codigoGenerado);
        }

        return productoRepository.save(producto);
    }

    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }
}
