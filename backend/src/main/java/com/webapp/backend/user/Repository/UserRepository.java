package com.webapp.backend.user.Repository;

import com.webapp.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByDni(Integer dni);
    void deleteByDni(Integer dni);

}
