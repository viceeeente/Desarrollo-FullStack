package com.example.LevelUpGamer.repository;

import com.example.LevelUpGamer.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
