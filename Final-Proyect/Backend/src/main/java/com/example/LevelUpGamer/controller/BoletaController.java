package com.example.LevelUpGamer.controller;

import com.example.LevelUpGamer.model.Boleta;
import com.example.LevelUpGamer.model.DetalleBoleta;
import com.example.LevelUpGamer.repository.BoletaRepository;
import com.example.LevelUpGamer.repository.DetalleBoletaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boletas")
public class BoletaController {

    private final BoletaRepository boletaRepo;
    private final DetalleBoletaRepository detalleRepo;

    public BoletaController(BoletaRepository boletaRepo, DetalleBoletaRepository detalleRepo) {
        this.boletaRepo = boletaRepo;
        this.detalleRepo = detalleRepo;
    }

    @GetMapping
    public List<Boleta> obtenerBoletas() {
        return boletaRepo.findAll();
    }

    @GetMapping("/{boletaId}/detalle")
    public List<DetalleBoleta> obtenerDetalle(@PathVariable Long boletaId) {
        return detalleRepo.findByBoletaId(boletaId);
    }

    @PostMapping
    public Boleta crearBoleta(@RequestBody Boleta boleta) {
        return boletaRepo.save(boleta);
    }

    @PostMapping("/{boletaId}/detalle")
    public DetalleBoleta crearDetalle(@PathVariable Long boletaId, @RequestBody DetalleBoleta detalle) {
        detalle.setBoletaId(boletaId);
        return detalleRepo.save(detalle);
    }
}
