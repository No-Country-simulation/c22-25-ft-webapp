package com.webapp.backend.user;

import com.webapp.backend.components.specialtyArea.SpecialtyAreaDTO;
import com.webapp.backend.components.specialtyArea.SpecialtyArea_User;
import com.webapp.backend.role.Role;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.util.List;

import static jakarta.persistence.FetchType.EAGER;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {
    private int dni;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private List<String> roles;
    private List<SpecialtyAreaDTO> specialtyArea;

    public UserDTO(User user){
        this.dni = user.getDni();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.roles = user.getRole().stream().map(Role::getName).toList();
        this.specialtyArea = user.getSpecialtyAreaUsers().stream().map(specialtyAreaUser -> {
            return new SpecialtyAreaDTO(specialtyAreaUser.getSpecialtyArea());
        }).toList();
    }
}
