INSERT INTO categoria (nombre) VALUES ('Consolas');
INSERT INTO categoria (nombre) VALUES ('PC Gamer');
INSERT INTO categoria (nombre) VALUES ('Juegos');
INSERT INTO categoria (nombre) VALUES ('Accesorios');
INSERT INTO categoria (nombre) VALUES ('Mouse');
INSERT INTO categoria (nombre) VALUES ('Mousepad');
INSERT INTO categoria (nombre) VALUES ('Sillas Gamers');
INSERT INTO categoria (nombre) VALUES ('Poleras Personalizadas');

INSERT INTO producto (nombre, descripcion, precio, stock, codigo, id_categoria) VALUES
('PlayStation 5', 'Consola de última generación de Sony, con gráficos impresionantes y tiempos de carga ultrarrápidos.', 499990, 10, 'CO001', 1),
('Xbox Series X', 'La consola más potente de Microsoft con soporte para 4K, Game Pass y cientos de títulos disponibles.', 499990, 10, 'CO002', 1),
('PC Gamer Ryzen 7 RTX 4060', 'Potente equipo con procesador Ryzen 7 y tarjeta gráfica RTX 4060. Ideal para gaming en 2K y multitareas exigentes.', 899990, 8, 'PC001', 2),
('Notebook ASUS TUF Gaming', 'Notebook gamer con pantalla 144Hz, Ryzen 5 y GPU GTX 1650, diseñado para juegos competitivos y rendimiento.', 749990, 8, 'PC002', 2),
('Catan', 'Juego de estrategia donde construyes, comercias y compites por dominar la isla.', 29900, 20, 'JM001', 3),
('Carcassonne', 'Juego de estrategia donde construyes ciudades y caminos colocando losetas y reclamando territorios para ganar puntos.', 24990, 20, 'JM002', 3),
('Controlador Inalambrico Xbox Series X', 'Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.', 59990, 40, 'AC001', 4),
('Auriculares Gamer HyperX Cloud II', 'Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.', 79990, 40, 'AC002', 4),
('Logitech G502', 'Mouse Logitech G502 HERO con sensor HERO 25K, 11 botones programables y pesos ajustables.', 49990, 25, 'MS001', 5),
('Mouse Gamer Razer DeathAdder V2', 'Mouse Razer Deathadder V2 con sensor óptico de 8.500 dpi y diseño ergonómico. Dimensiones y peso reducido para un mouse con un rendimiento excepcional y una ergonomía sin igual.', 29990, 25, 'MS002', 5),
('Mousepad Gamer Razer Goliathus Extended Chroma', 'Mousepad Razer Goliathus Extended Chroma con iluminación RGB y superficie optimizada para precisión y velocidad.', 29990, 30, 'MP001', 6),
('Mousepad Gamer Corsair MM300', 'La alfombrilla MM300 proporciona una superficie de tela resistente y suave con los bordes cosidos reforzados para evitar el desgaste.', 19990, 30, 'MP002', 6),
('Silla Gamer Secretlab TITAN', 'La Silla Gamer SecretLab Titan ofrece máxima comodidad y ergonomía, con soporte lumbar ajustable, reposabrazos 4D y respaldo reclinable.', 159990, 12, 'SG001', 7),
('Silla Gamer DXRacer Formula Series', 'Diseño ergonómico, materiales premium y soporte ajustable para máximo confort en sesiones largas.', 159990, 12, 'SG002', 7),
('Polera Gamer Personalizada "Level Up"', 'Polera estampada LevelUp Gamer.', 14990, 50, 'PP001', 8),
('Polera Gamer "Game On"', 'Polera estampada Game On.', 14990, 50, 'PP002', 8);