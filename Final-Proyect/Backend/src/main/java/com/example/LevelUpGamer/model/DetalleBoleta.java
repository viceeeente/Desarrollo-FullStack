package com.example.LevelUpGamer.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "detalle_boleta")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DetalleBoleta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "boleta_id")
    private Long boletaId;  // FK real a la boleta

    private String producto;
    private Integer cantidad;
    private Double subtotal;
}
